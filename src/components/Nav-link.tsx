import { ComponentProps } from "react";

// Permite que o componente NavLink receba as propriedades de um elemento <a>
interface NavLinkProps extends ComponentProps<"a"> {
  children: string;
}

export function NavLink(props: NavLinkProps) {
  return (
    <a {...props} className="font-medium text-sm">
      {props.children}
    </a>
  );
}
