import { ComponentType } from "react";

export type IRoute = {
  path: string;
  component: ComponentType<object>;
};
