import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./Hooks/AuthProvider";
import Home from "./Pages/Home/Home";
import User from "./Pages/User/User";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/user" element={<User></User>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
