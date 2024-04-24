import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoutesConfig } from "config";
import { IRoute } from "utils/types";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {RoutesConfig.map((route: IRoute, index: number) => (
          <Route key={index} path={route.path} Component={route.component} />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRouter;
