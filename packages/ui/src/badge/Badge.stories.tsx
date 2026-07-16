import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
    title: "Components/Badge",
    component: Badge,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Water: Story = {
    args: {
        label: "Water",
        color: "#6390F0",
        selected: false,
    },
};

export const Fire: Story = {
    args: {
        label: "Fire",
        color: "#EE8130",
        selected: false,
    },
};
