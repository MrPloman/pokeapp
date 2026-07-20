import type { HTMLAttributes } from "react";

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {}

export function TableRow({ children, ...props }: TableRowProps) {
    return <tr {...props}>{children}</tr>;
}
