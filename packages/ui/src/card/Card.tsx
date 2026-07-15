import styles from "./Card.module.scss";
import type { ImgHTMLAttributes } from "react";
import { Button, ButtonProps } from "../button/Button";

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
    img: ImgHTMLAttributes<HTMLImageElement> & { alt: string };
    id: string;
    title: string;
    buttons: ButtonProps[];
}

export function Card({ img, id, title, buttons, ...props }: CardProps) {
    return (
        <article className={styles.card} {...props}>
            <img {...img} />
            <h2>
                #{id}: {title}
            </h2>
            <footer className={styles.buttons}>
                {buttons.map((button) => (
                    <Button key={button.label} {...button} />
                ))}
            </footer>
        </article>
    );
}
