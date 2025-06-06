import { Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:code" element={<CountryDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </DarkModeProvider>
  );
}

export default App;
