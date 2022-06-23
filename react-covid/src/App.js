import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom"; 
import Indonesia from "./pages/covid/Indonesia";
import Provinsi from "./pages/covid/Provinsi";
import Layout from "./layout";
import About from "./pages/covid/About";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/indonesia" element={<Indonesia />} />
            <Route path="/provinsi" element={<Provinsi />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
    </>
  );
}

export default App;
