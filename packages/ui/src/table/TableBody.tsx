import type { HTMLAttributes } from "react";

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}

export function TableBody({ children, ...props }: TableBodyProps) {
    return <tbody {...props}>{children}</tbody>;
}
