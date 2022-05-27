import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./Hooks/AuthProvider";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import FourOFour from "./Pages/FourOFour/FourOFour";
import Search from "./Pages/Search/Search";
import CertificateVerify from "./Pages/CertificateVerify/CertificateVerify";

function App() {
  return (
    // Route Properties
    <BrowserRouter>
      {/* Context API */}
      <AuthProvider>
        <Routes>
          <Route path="*" element={<FourOFour></FourOFour>} />
          <Route path="/" exact={true} element={<Home></Home>} />
          <Route path="/user" exact={true} element={<Profile></Profile>} />
          <Route path="/search" exact={true} element={<Search></Search>} />
          <Route
            path="/certificate"
            exact={true}
            element={<CertificateVerify></CertificateVerify>}
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
