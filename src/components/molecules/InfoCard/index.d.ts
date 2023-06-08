/// <reference types="react" />
export interface InfoCardProps {
    icon?: React.ReactNode;
    title?: string;
    date?: string;
    table?: {
        [name: string]: string;
    };
    children?: React.ReactNode;
    className?: string;
}
export declare const InfoCard: ({ icon, title, date, table, children, className, }: InfoCardProps) => JSX.Element;
