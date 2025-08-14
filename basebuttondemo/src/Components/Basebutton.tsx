import { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/untils/cn";

export type VariantHierarchy = "primary" | "secondary" | "tertiary";
export type VariantSize = "lg" | "md" | "sm" | "xs";
export type VariantRadius = "square" | "rounded" | "circle";
export type IconPosition = "left" | "right";

interface BaseButtonProps {
  text: string;
  hierarchy?: VariantHierarchy;
  size?: VariantSize;
  radius?: VariantRadius;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  isLoading?: boolean;
  buttonType?: "button" | "submit" | "reset";
  className?: string;
}

export default function BaseButton({
  text,
  hierarchy = "primary",
  icon,
  iconPosition = "left",
  onClick,
  size = "lg",
  radius = "square",
  disabled,
  isLoading,
  buttonType = "button",
  className,
}: BaseButtonProps) {
  const isDisabled = Boolean(disabled || isLoading);
  const hasIcon = Boolean(icon);

  const base =
    "inline-flex items-center justify-center gap-2 font-semibold text-center " +
    "transition-colors duration-150 select-none " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700/60 focus-visible:ring-offset-2";


    
  // radius
  const RAD: Record<VariantRadius, string> = {
    square: "rounded-none",
    rounded: "rounded-md",
    circle: "rounded-full",
  };

  // 🔷 Blue hir theme
  const HIER: Record<VariantHierarchy, string> = {
    primary:
      "text-white bg-blue-600 hover:bg-blue-800 /90 active:bg-[#1D4ED8]",
    secondary:
      "text-[#2563EB] border-2 border-[#2563EB] bg-transparent " +
      "hover:bg-[#2563EB]/10 active:bg-[#2563EB]/20",
    tertiary:
      "text-[#2563EB] bg-transparent " +
      "hover:bg-[#2563EB]/10 active:bg-[#2563EB]/20",
  };

  // ❄️ Disabled 覆寫
  const DISABLED: Record<VariantHierarchy, string> = {
    primary: "bg-blue-300 text-white cursor-not-allowed",
    secondary: "text-[#93C5FD] border-[#93C5FD] cursor-not-allowed",
    tertiary: "text-[#93C5FD] cursor-not-allowed",
  };

  // 📏 尺寸：固定寬高（來自 Figma）
  // Large: with icon 122x62, no icon 90x62
  // Medium: with icon 123x54, no icon 91x54
  // sm/xs 暫時沿用 hug（可之後再定）
  const sizeClass =
    size === "lg"
      ? hasIcon
        ? "w-[122px] h-[62px] text-[16px]"
        : "w-[90px]  h-[62px] text-[16px]"
      : size === "md"
      ? hasIcon
        ? "w-[123px] h-[54px] text-[15px]"
        : "w-[91px]  h-[54px] text-[15px]"
      : size === "sm"
      ? "py-2.5 px-4 text-[14px]"
      : "py-2 px-3 text-[12px]"; // xs

  const classes = cn(
    base,
    sizeClass,
    RAD[radius],
    HIER[hierarchy],
    isDisabled && DISABLED[hierarchy],
    className
  );

  return (
    <button
      type={buttonType}
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={isLoading || undefined}
      className={classes}
    >
      {icon && iconPosition === "left" && (
        <span className="text-lg" aria-hidden>
          {icon}
        </span>
      )}
      <span>{text}</span>
      {icon && iconPosition === "right" && (
        <span className="text-lg" aria-hidden>
          {icon}
        </span>
      )}
    </button>
  );
}
