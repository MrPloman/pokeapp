import type { PokemonDetails, PokemonPreview } from "@repo/core";
import { PaginatedResult, PokemonRepository } from "@repo/core";
import { isPokemonDetailsObject } from "./validators";

function mapToPokemonDetails(raw: unknown): PokemonDetails | null {
    let pokemonDetails: any = raw;
    if (!isPokemonDetailsObject(pokemonDetails)) return null;
    else
        return {
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            imageUrl: pokemonDetails.sprites.front_default,
            types: [
                ...pokemonDetails.types.map(
                    (typeDetected: { type: { name: string }; slot: number }) =>
                        typeDetected.type.name,
                ),
            ],
            height: pokemonDetails.height,
            weight: pokemonDetails.weight,
            abilities: [
                ...pokemonDetails.abilities.map(
                    (ability: { ability: { name: string } }) => ability.ability.name,
                ),
            ],
            stats: {
                hp: pokemonDetails.stats.find((s: any) => s.stat.name === "hp")?.base_stat ?? 0,
                attack:
                    pokemonDetails.stats.find((s: any) => s.stat.name === "attack")?.base_stat ?? 0,
                defense:
                    pokemonDetails.stats.find((s: any) => s.stat.name === "defense")?.base_stat ??
                    0,
                specialAttack:
                    pokemonDetails.stats.find((s: any) => s.stat.name === "special-attack")
                        ?.base_stat ?? 0,
                specialDefense:
                    pokemonDetails.stats.find((s: any) => s.stat.name === "special-defense")
                        ?.base_stat ?? 0,
                speed:
                    pokemonDetails.stats.find((s: any) => s.stat.name === "speed")?.base_stat ?? 0,
            },
        };
}
async function findByUrl(url: string): Promise<PokemonDetails | null> {
    if (!url) return null;
    const response = await fetch(url);
    const pokemonDetails: unknown = await response.json();
    if (!pokemonDetails) return null;
    return mapToPokemonDetails(pokemonDetails);
}
export class PokeApiPokemonRepository implements PokemonRepository {
    private readonly baseUrl = process.env.POKEAPI_BASE_URL || "https://pokeapi.co/api/v2";

    async findAllPreview(limit = 10, offset = 0): Promise<PaginatedResult<PokemonPreview>> {
        const response = await fetch(`${this.baseUrl}/pokemon/?limit=${limit}&offset=${offset}`);
        const {
            count,
            next,
            results,
        }: {
            count: number;
            next: string;
            results: { name: string; url: string }[];
        } = await response.json();
        if (!results || results.length === 0)
            return {
                items: [],
                hasMore: false,
                total: 0,
            };
        // Map each item into a Promise (and handle the 'else' case properly)
        const pokemonPromises = results.map(async (pokemon: { name: string; url: string }) => {
            const _pokemon = await findByUrl(pokemon.url);
            return _pokemon || null; // standardizes missing items as null
        });

        // Await all promises concurrently
        const resolvedList = await Promise.all(pokemonPromises);

        // Filter out null/undefined results so the type strictly matches PokemonDetails[]
        let pokemonList: PokemonDetails[] = resolvedList.filter(
            (pokemon): pokemon is PokemonDetails => pokemon !== null,
        );
        if (!pokemonList || pokemonList.length === 0 || !Array.isArray(pokemonList))
            return {
                items: [],
                hasMore: false,
                total: 0,
            };
        else
            return {
                items: pokemonList.map((value: PokemonDetails): PokemonPreview => {
                    return {
                        id: value.id,
                        name: value.name,
                        imageUrl: value.imageUrl,
                        types: value.types,
                    };
                }),
                hasMore: !!next,
                total: count,
            };
    }
    async findById(id: string): Promise<PokemonDetails | null> {
        if (!id) return null;
        const response = await fetch(`${this.baseUrl}/pokemon/${id}`);
        const pokemonDetails: unknown = await response.json();
        if (!pokemonDetails) return null;
        return mapToPokemonDetails(pokemonDetails);
    }
}
