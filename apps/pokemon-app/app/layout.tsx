import type { Metadata } from "next";
import "./globals.scss";
import "@repo/ui/dist/index.css";
import { Layout } from "@repo/ui";
import { QueryProvider } from "../src/providers/QueryProvider";

export const metadata: Metadata = {
    title: "Pokedex — Technical Test",
    description: "Technical Test Frontend Developer — Ediversa",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body>
                <QueryProvider>
                    <Layout
                        header={<span>Pokedex</span>}
                        footer={<span>{metadata.description}</span>}
                    >
                        {children}
                    </Layout>
                </QueryProvider>
            </body>
        </html>
    );
}
