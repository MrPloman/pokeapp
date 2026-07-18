import Image from "next/image";
import { Button, Card, Badge, Skeleton, Layout } from "@repo/ui";
import { getTypeColor } from "@/src/presentation/pokemon/pokemonColors";
export default function Home() {
    return (
        <div>
            <main>
                <Layout
                    children={<p>Contenido principal</p>}
                    header={<h1>Header</h1>}
                    footer={<p>Footer</p>}
                />

                <Badge label="Nuevo" color="green" selected={true} />
                <Image
                    className="dark:invert"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={100}
                    height={20}
                    priority
                />
                <Button variant="secondary" label="Secundario" />
                <Button disabled label="Deshabilitado" />
                <Card
                    badges={[
                        { label: "Fuego", color: "red", selected: false },
                        { label: "Agua", color: "blue", selected: false },
                    ]}
                    buttons={[
                        { variant: "primary", label: "Ver detalles" },
                        { variant: "secondary", label: "Compartir" },
                    ]}
                    img={{
                        src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                        alt: "Pokemon",
                    }}
                    id={"1"}
                    title="Bulbasaur"
                />

                <Skeleton variant="rect" width={200} height={100} />
            </main>
        </div>
    );
}
