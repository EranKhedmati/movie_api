import { Route, Routes } from "react-router-dom";

// Layout
import MainLayout from "../layouts/MainLayout";

// Components
import Home from "../components/Home";

function MainRoute() {
  return (
  <Routes>
    <Route element={<MainLayout />}>
    <Route path="/" element={<Home />} />
    </Route>
  </Routes>)
  ;
}

export default MainRoute;
