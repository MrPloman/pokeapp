import type { PokemonDetails, PokemonPreview } from "../../domain/Pokemon";
export interface PaginatedResult<T> {
    items: T[];
    hasMore: boolean;
    total: number;
}
export interface PokemonRepository {
    findAllPreview(limit: number, offset: number): Promise<PaginatedResult<PokemonPreview>>;
    findById(id: string): Promise<PokemonDetails | null>;
}
