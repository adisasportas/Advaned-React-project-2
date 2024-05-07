import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Pixxa from "./components/Pixxa";
import Page404 from "./components/Page404";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Pixxa />} />
    <Route path="/Pixxa" element={<Pixxa />} />
    <Route path="*" element={<Page404 />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
