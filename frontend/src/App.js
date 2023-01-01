import Data from "./components/Data";
import Login from "./components/Login";
import NoPage from "./components/NoPage";
import Inscription from "./components/Inscription";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="login" element={<Login />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
