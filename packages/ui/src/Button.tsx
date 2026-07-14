import styles from "./Button.module.scss";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
    return (
        <button className={`${styles.button} ${styles[variant]} ${className ?? ""}`} {...props} />
    );
}
