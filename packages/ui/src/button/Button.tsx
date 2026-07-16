import styles from "./Button.module.scss";
import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    variant?: "primary" | "secondary";
    label: string;
}
export function Button({ variant = "primary", className, label, ...props }: ButtonProps) {
    return (
        <button className={`${styles.button} ${styles[variant]} ${className ?? ""}`} {...props}>
            {label}
        </button>
    );
}
