import styles from "./Card.module.scss";
import type { ImgHTMLAttributes } from "react";
import { Button, ButtonProps } from "../button/Button";
import { Badge, BadgeProps } from "../badge/Badge";

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
    img: ImgHTMLAttributes<HTMLImageElement> & { alt: string };
    id: string;
    title: string;
    badges: BadgeProps[];
    buttons: ButtonProps[];
}

export function Card({ img, id, title, badges, buttons, ...props }: CardProps) {
    return (
        <article className={styles.card} {...props}>
            <img {...img} />
            <h2>
                #{id}: {title[0].toUpperCase() + title.slice(1)}
            </h2>
            <div className={`${styles.badges} badges`}>
                {badges.map((badge) => (
                    <Badge key={badge.label} {...badge} />
                ))}
            </div>
            <div className={styles.content}>{props.children}</div>
            <footer className={styles.buttons}>
                {buttons.map((button) => (
                    <Button key={button.label} {...button} />
                ))}
            </footer>
        </article>
    );
}
