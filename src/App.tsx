import { FC } from "react";

import { Route, Routes } from "react-router-dom";

import Main from "./pages/main/Main";
import Price from "./pages/price/Price";
import Work from "./pages/work/Work";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<Main />} />
      <Route path="/price" element={<Price />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  );
};

export default App;
