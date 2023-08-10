import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components";
import Home from "./pages/Home";

function RoutesApp(){
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;