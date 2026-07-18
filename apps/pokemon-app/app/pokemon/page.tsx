// app/pokemon/page.tsx
import { getPokemonListUseCase } from "@/src/composition/pokemonContainer";
import { Card, Badge } from "@repo/ui";
import { getTypeColor } from "@/src/presentation/pokemon/pokemonColors";
import { PokeApiPokemonRepository } from "@/src/infrastructure/PokeApiPokemonRepository";

export default async function PokemonListPage() {
    const pokemonPage = await getPokemonListUseCase.execute({ limit: 10, offset: 0 });

    return (
        <div>
            {pokemonPage.items.map((pokemon: any) => (
                <Card
                    key={pokemon.id}
                    id={String(pokemon.id)}
                    title={pokemon.name}
                    badges={pokemon.types.map((type: string) => ({
                        label: type,
                        color: getTypeColor(type),
                        selected: false,
                    }))}
                    img={{ src: pokemon.imageUrl, alt: pokemon.name }}
                    buttons={[{ variant: "primary", label: "Ver detalle" }]}
                />
            ))}
        </div>
    );
}
