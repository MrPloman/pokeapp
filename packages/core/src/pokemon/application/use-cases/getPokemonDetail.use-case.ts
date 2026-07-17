import { PokemonDetails } from "../../domain/Pokemon";
import { PokemonRepository } from "../ports/PokemonRepository";
export class GetPokemonDetailUseCase {
    constructor(private readonly pokemonRepository: PokemonRepository) {}
    async execute(id: string): Promise<PokemonDetails | null> {
        return await this.pokemonRepository.findById(id);
    }
}
