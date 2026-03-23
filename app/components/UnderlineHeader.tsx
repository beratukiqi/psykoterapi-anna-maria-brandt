import React, { ElementType, ReactNode } from "react";

type UnderlineHeaderProps<T extends ElementType = "h2"> = {
  text: string;
  as?: T;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

export default function UnderlineHeader<T extends ElementType = "h2">({
  text,
  as,
  className,
  ...props
}: UnderlineHeaderProps<T>) {
  const Component = as || "h2";

  return (
    <Component
      className={`${className ? className : 'text-[#434343] text-4xl md:text-6xl font-medium'}`}
      {...props}
    >
      <span className="fancy-underline">{text}</span>
    </Component>
  );
}