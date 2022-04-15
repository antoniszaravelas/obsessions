import Header from "./components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import About from "./components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header/>
          <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
