export interface TableBodyProps {
  className?: string;
  children?: React.ReactNode;
}

export const TableBody = ({ children, className }: TableBodyProps) => (
  <tbody className={className}>{children}</tbody>
);
