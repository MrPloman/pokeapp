import { PokemonPreview } from "../../domain/Pokemon";
import { PokemonFilters } from "../interfaces/PokemonFilters";
import { PaginatedResult, PokemonRepository } from "../ports/PokemonRepository";

export class GetPokemonListUseCase {
    constructor(private readonly pokemonRepository: PokemonRepository) {}

    async execute(filters?: PokemonFilters): Promise<PaginatedResult<PokemonPreview>> {
        const pokemonList = await this.pokemonRepository
            .findAllPreview(10, 0)
            .then((result) => result.items);

        let result = pokemonList;

        if (filters?.types) {
            result = result.filter((p) => p.types.some((t) => filters.types!.includes(t)));
        }
        if (filters?.search) {
            const search = filters.search.toLowerCase();
            result = result.filter((p) => p.name.toLowerCase().startsWith(search));
        }

        return {
            items: result,
            total: result.length,
            hasMore: false,
        };
    }
}
