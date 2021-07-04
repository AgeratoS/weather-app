import { ChangeEventHandler } from "react";

export interface SearchProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>
}