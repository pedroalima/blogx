export interface ButtonType {
    Text: string;
    onClick?: (id: number) => void;
    Type?: "button" | "submit" | "reset" | undefined;
}