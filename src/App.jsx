import "./index.css";
import ContactUs from "./pages/ContactUs";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/contactUs" element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
