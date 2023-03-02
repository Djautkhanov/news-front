import { Route, Routes } from "react-router-dom";
import "./App.css";
import CategoryBar from "./components/categoryBar/CategoryBar";
import CurrentNews from "./components/CurrentNews/CurrentNews";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <CategoryBar />
      <Routes>
        <Route path="/news/current/:id" element={<CurrentNews/>}/>
        <Route path="/" element={<Main />} />
        <Route path="/news/category/:categoryId" element={<Main />} />
      </Routes>
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
