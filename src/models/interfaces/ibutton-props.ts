import { MouseEventHandler, ReactElement, ReactNode } from "react";

export default interface IButtonProps {
  children: ReactNode | ReactElement | JSX.Element;
type: "link" | "text" | "default" | "primary" | "ghost" | "dashed";
  onClick: MouseEventHandler<HTMLElement>;
}
