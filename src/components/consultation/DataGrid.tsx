import { ReactNode } from "react";

interface DataGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
}

export const DataGrid = ({ children, columns = 3 }: DataGridProps) => {
  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <dl className={`grid ${gridCols[columns]} gap-4`}>
      {children}
    </dl>
  );
};
