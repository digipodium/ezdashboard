export interface ButtonProps {
    children: React.ReactNode; // Content of the button
    color: "primary" | "secondary" | "default" | string; // Required color prop
    variant?: "filled" | "outline" | string; // Optional variant prop
    className?: string; // Optional additional class names
  }