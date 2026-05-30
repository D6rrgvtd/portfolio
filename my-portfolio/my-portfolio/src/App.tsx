import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import { useTheme } from "./hooks/useTheme";
import Footer from "./components/Footer";

function HomePage() {
  return <></>;
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <ScrollToTop />

      <Header
        theme={theme}
        OnToggleTheme={toggleTheme}
      />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>

     <Footer />
    </>
  );
}