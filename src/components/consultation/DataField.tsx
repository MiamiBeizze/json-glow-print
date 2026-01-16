interface DataFieldProps {
  label: string;
  value?: string | number | null;
  className?: string;
  highlight?: boolean;
  size?: "sm" | "md" | "lg";
}

export const DataField = ({ label, value, className = "", highlight = false, size = "md" }: DataFieldProps) => {
  const displayValue = value ?? "—";
  const isEmpty = !value;

  const sizeStyles = {
    sm: { label: "text-xs", value: "text-sm" },
    md: { label: "text-xs", value: "text-base" },
    lg: { label: "text-sm", value: "text-lg" },
  };

  return (
    <div className={`${className}`}>
      <dt className={`${sizeStyles[size].label} font-medium text-data-label uppercase tracking-wide mb-0.5`}>
        {label}
      </dt>
      <dd
        className={`${sizeStyles[size].value} font-medium ${
          isEmpty
            ? "text-empty-state"
            : highlight
            ? "text-primary font-bold"
            : "text-data-value"
        }`}
      >
        {displayValue}
      </dd>
    </div>
  );
};
