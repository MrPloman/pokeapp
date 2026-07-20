export function SortIcon({ direction }: { direction: "ascending" | "descending" | "none" }) {
    if (direction === "none") return null;

    return direction === "ascending" ? (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="m3 8 4-4 4 4" />
            <path d="M7 4v16" />
            <path d="M11 12h4" />
            <path d="M11 16h6" />
            <path d="M11 20h8" />
        </svg>
    ) : (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="m11 16-4 4-4-4" />
            <path d="M7 20V4" />
            <path d="M11 12h8" />
            <path d="M11 16h6" />
            <path d="M11 20h4" />
        </svg>
    );
}
