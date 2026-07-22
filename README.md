# Pokédex — Prueba Técnica Frontend (Ediversa)

Esto es una Pokédex (bastante básica) hecha con Next.js que consume la [PokeAPI](https://pokeapi.co). La hice como prueba técnica, pero también la usé como motivo para aprender Next.js en serio (venía de Angular/React/Vue, no tenia experiencia explícita en Next.js aún) y montar un monorepo desde cero.

Repo: <URL_DEL_REPOSITORIO>

## Con qué está hecho?

- **Next.js 15** (App Router) + TypeScript
- **Turborepo + pnpm workspaces** para el monorepo
- **CSS Modules con Sass** para los estilos.
- **TanStack Query** para el listado infinito y la hidratación servidor→cliente
- **TanStack Table** para la vista de tabla
- **Storybook** para documentar los componentes (con el addon de accesibilidad activado)
- **Vitest + React Testing Library** para los tests
- **Biome** para lint y formato (todo en uno, sin ESLint, aunque sé que con React es mas efectivo eslint.)
- **GitHub Actions** para el CI

## La Arquitectura: Cómo está organizado?

Lo he hecho con arquitectura hexagonal: DDD.

pokemon-monorepo/
├── apps/
│ └── pokemon-app/ # la app de Next.js en sí
│ ├── app/ # todas las rutas: solo 2, lista y detalle
│ └── src/
│ ├── actions/ # server actions
│ ├── composition/ # aquí se "conectan" el repositorio con los casos de uso
│ ├── infrastructure/ # el adaptador que habla con la PokeAPI
│ ├── presentation/ # componentes de cliente, colores por tipo
│ └── queries/ # config de TanStack Query
├── packages/
│ ├── core/ # dominio y lógica de negocio, sin nada de React ni Next
│ └── ui/ # la librería de componentes (Button, Card, Badge, Table...)
