import { cn } from "@heroui/react";
import { Icon } from "@iconify/react";

type IconSize = "sm" | "md" | "lg" | "xl" | number;

type AppIconProps = {
  name: string;
  size?: IconSize;
  className?: string;
};

const sizeMap: Record<Exclude<IconSize, number>, number> = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
};


/* 'WarpIcon' is just a cool name, it does not have anything to do with the meaning or abbreviation. */

export default function WarpIcon({ name, size = "md", className }: AppIconProps) {
  const pixelSize = typeof size === "number" ? size : sizeMap[size];

  return (
    <Icon
      icon={name}
      width={pixelSize}
      height={pixelSize}
      className={cn(`inline-block align-middle text-current`, className)}
    />
  );
};
