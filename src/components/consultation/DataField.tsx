interface DataFieldProps {
  label: string;
  value?: string | number | null;
  className?: string;
  highlight?: boolean;
}

export const DataField = ({ label, value, className = "", highlight = false }: DataFieldProps) => {
  const displayValue = value ?? "—";
  const isEmpty = !value;

  return (
    <div className={`${className}`}>
      <dt className="text-xs font-medium text-data-label uppercase tracking-wide mb-1">
        {label}
      </dt>
      <dd
        className={`text-sm font-medium ${
          isEmpty
            ? "text-empty-state"
            : highlight
            ? "text-primary font-semibold"
            : "text-data-value"
        }`}
      >
        {displayValue}
      </dd>
    </div>
  );
};
