import "./App.css";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about";
import ContactUs from "./components/contactUs";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="aboutUs" element={<About />} />
            <Route path="contactUs" element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
