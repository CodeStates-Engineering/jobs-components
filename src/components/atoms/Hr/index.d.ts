/// <reference types="react" />
export interface HrProps {
    color?: 'purple-550' | 'bluish-gray-100';
    weight?: 'thin' | 'medium' | 'thick';
    className?: string;
}
export declare const Hr: ({ color, weight, className, }: HrProps) => JSX.Element;
