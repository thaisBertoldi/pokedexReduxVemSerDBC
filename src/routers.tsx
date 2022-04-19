import { Route, Routes, BrowserRouter } from "react-router-dom";
import Detail from "./pages/detail/Detail";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />}>
          <Route path=":id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
