import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./Hooks/AuthProvider";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    // Route Properties
    <BrowserRouter>
      {/* Context API */}
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/user" element={<Profile></Profile>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
