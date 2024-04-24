// Agent
import CreateAgent from "pages/Agent/Create";
import AgentList from "pages/Agent/List";

import { IRoute } from "utils/types";

export const RoutesConfig: IRoute[] = [
  {
    path: "/agents/create",
    component: <CreateAgent />,
  },
  {
    path: "/agents",
    component: <AgentList />,
  },
];
