import type { PokemonDetails, PokemonPreview } from "@repo/core";
import { PokemonRepository } from "@repo/core";
function mapToPokemonDetails(raw: any): PokemonDetails | void {
    return;
}

export class PokeApiPokemonRepository implements PokemonRepository {
    private readonly baseUrl = process.env.POKEAPI_BASE_URL || "https://pokeapi.co/api/v2";

    async findAll(): Promise<PokemonPreview[]> {
        return [];
    }
    async findById(id: string): Promise<PokemonDetails | null> {
        return null;
    }
}
