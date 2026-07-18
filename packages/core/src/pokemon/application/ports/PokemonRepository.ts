import type { PokemonDetails, PokemonPreview, PokemonType } from "../../domain/Pokemon";
export interface PaginatedResult<T> {
    items: T[];
    hasMore: boolean;
    total: number;
}
export interface PokemonRepository {
    findAllPreview(limit: number, offset: number): Promise<PaginatedResult<PokemonPreview>>;
    findAllNames(): Promise<{ id: number; name: string }[]>;
    findById(id: string): Promise<PokemonDetails | null>;
    findByType(types: PokemonType[]): Promise<PokemonPreview[]>;
}
