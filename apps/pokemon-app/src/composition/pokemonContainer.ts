// src/composition/pokemonContainer.ts
import { GetPokemonDetailUseCase, GetPokemonListUseCase } from "@repo/core";
import { PokeApiPokemonRepository } from "../infrastructure/PokeApiPokemonRepository";

const pokemonRepository = new PokeApiPokemonRepository();

export const getPokemonListUseCase = new GetPokemonListUseCase(pokemonRepository);
export const getPokemonDetailUseCase = new GetPokemonDetailUseCase(pokemonRepository);
