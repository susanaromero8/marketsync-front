import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import CalculosPage from "./pages/CalculosPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import RedirectLoggedUser from "./components/RedirectLoggedUser";
import RedirectUnloggedUser from "./components/RedirectUnloggedUser";
import PageNotFound from "./pages/PageNotFound";
import CreateAccountPage from "./pages/CreateAccountPage";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<RedirectLoggedUser />}>
              <Route path="/" element={<LoginPage />} />
              <Route path="/register" element={<CreateAccountPage />} />
            </Route>
            <Route path="/" element={<RedirectUnloggedUser />}>
              <Route path="/" element={<MainLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/calculos" element={<CalculosPage />} />
              </Route>
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
