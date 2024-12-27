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
    onBodyCopy?: (value?: string) => void;
}
export declare const InfoCard: ({ icon, title, date, table, children, className, onBodyCopy, }: InfoCardProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
