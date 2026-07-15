import styles from "./Card.module.scss";
import type { ImgHTMLAttributes } from "react";
import { Button, ButtonProps } from "../button/Button";

export interface CardProps {
    img: ImgHTMLAttributes<HTMLImageElement>;
    id: number;
    title: string;
    buttons: ButtonProps[];
}

export function Card({ ...props }: CardProps) {
    return (
        <div className={styles.card}>
            <img {...props.img} />
            <h2>
                #{props.id}: {props.title}
            </h2>
            <div className={styles.buttons}>
                {props.buttons.map((button, index) => (
                    <Button key={index} {...button} />
                ))}
            </div>
        </div>
    );
}
