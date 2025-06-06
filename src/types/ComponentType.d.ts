export interface ButtonProps {
    children: React.ReactNode;
    color: "primary" | "secondary" | "default" | string;
    variant?: "filled" | "outline" | string;
    className?: string;
}
