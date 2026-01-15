import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "success" | "warning" | "danger" | "info" | "neutral";
  size?: "sm" | "md";
}

export const Badge = ({ children, variant = "neutral", size = "md" }: BadgeProps) => {
  const sizeStyles = {
    sm: "text-[10px] px-1.5 py-0.5",
    md: "text-xs px-2 py-0.5",
  };

  return (
    <span className={`badge-${variant} font-semibold rounded-full inline-flex items-center ${sizeStyles[size]}`}>
      {children}
    </span>
  );
};
