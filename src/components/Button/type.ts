export interface ButtonType {
    Text: string;
    onClick?: () => void;
    Type?: "button" | "submit" | "reset" | undefined;
}