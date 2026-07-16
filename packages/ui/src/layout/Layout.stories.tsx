import type { Meta, StoryObj } from "@storybook/react-vite";
import { Layout } from "./Layout";

const meta: Meta<typeof Layout> = {
    title: "Components/Layout",
    component: Layout,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const LayoutCustom: Story = {
    args: {
        header: <span>Header Custom</span>,
        footer: <span>Footer Custom</span>,
        children: <p>Main content Custom</p>,
    },
};

export const LayoutDefault: Story = {
    args: {
        children: <p>Main content Default</p>,
    },
};
