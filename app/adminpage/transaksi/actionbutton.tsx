import * as React from "react";

interface ActionButtonProps {
  children: React.ReactNode;
  variant?: "add" | "edit" | "delete";
  size?: "normal" | "small";
  onClick: () => void;
}

const variantStyles = {
  add: "bg-lime-800",
  edit: "bg-yellow-500",
  delete: "bg-red-600",
};

const sizeStyles = {
  normal: "px-8 py-2.5 text-base",
  small: "px-5 py-1.5 text-xs max-sm:px-2.5 max-sm:py-1",
};

export function ActionButton({
  children,
  variant = "add",
  size = "normal",
  onClick,
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${variantStyles[variant]} ${sizeStyles[size]} rounded-md cursor-pointer border-[none] text-[white]`}
    >
      {children}
    </button>
  );
}
