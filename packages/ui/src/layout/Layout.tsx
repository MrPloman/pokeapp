import type { ReactNode } from "react";
import styles from "./Layout.module.scss";

interface LayoutProps {
    header?: ReactNode;
    footer?: ReactNode;
    children: ReactNode;
}

export function Layout({ header, footer, children }: LayoutProps) {
    return (
        <div className={styles.layout}>
            <a href="#main-content" className={styles.skipLink}>
                Saltar al contenido principal
            </a>

            {header && <header className={styles.header}>{header}</header>}

            <main id="main-content" className={styles.main}>
                {children}
            </main>

            {footer && <footer className={styles.footer}>{footer}</footer>}
        </div>
    );
}
