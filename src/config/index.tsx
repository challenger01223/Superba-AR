// Agent
import CreateAgent from "pages/Agent/Create";

import { IRoute } from "utils/types";

export const RoutesConfig: IRoute[] = [
  {
    path: "/agents/create",
    component: CreateAgent,
  },
];
