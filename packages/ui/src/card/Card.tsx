import styles from "./Button.module.scss";
import type { ImgHTMLAttributes } from "react";

interface CardProps {
    title: string;
    img: ImgHTMLAttributes<HTMLImageElement>;
    description: string;
}

export function Card({ ...props }: CardProps) {
    return (
        <div className={styles.card}>
            <img {...props.img} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}
