import Header from "./components/Header";
import Main from "./components/Main";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import { useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            element={
              <HomePage countries={countries} setCountries={setCountries} />
            }
            path="/"
          />
          <Route element={<Details />} path="/country/:name" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </Main>
    </>
  );
}

export default App;
