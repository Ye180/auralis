import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(
    value: number,
    currency: string = 'FCFA'
): string {
    return (
        new Intl.NumberFormat('fr-FR', {
            style: 'decimal',
            maximumFractionDigits: 0
        }).format(value) +
        ' ' +
        currency
    );
}