import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
    title: "Components/Skeleton",
    component: Skeleton,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;
export const SkeletonRect: Story = {
    args: {
        variant: "rect",
        width: "100px",
        height: "100px",
    },
};
export const SkeletonText: Story = {
    args: {
        variant: "text",
        width: "400px",
    },
};
export const SkeletonCircle: Story = {
    args: {
        variant: "circle",
        width: "100px",
        height: "100px",
    },
};
export const SkeletonDefault: Story = {
    args: {},
};
