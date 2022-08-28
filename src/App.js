import "./App.css";

import ArchivePage from "./pages/archive-page/ArchivePage";
import HomePage from "./pages/home-page/HomePage";
import LabelPage from "./pages/label-page/LabelPage";
import LandingPage from "./pages/ladnding-page/LandingPage";
import LoginPage from "./pages/login-page/LoginPage";
import SignupPage from "./pages/signup-page/SignupPage";
import { Route, Routes } from "react-router-dom";
import TrashPage from "./pages/trash-page/TrashPage";
import PrivateRoute from "./common/PrivateRoute";
import { useEffect } from "react";
import Mockman from "mockman-js";
import { useAuth } from "./auth-context";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import LayoutComponent from "./pages/layout-component/LayoutComponent";

function App() {
  const { state, dispatch } = useAuth();
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      dispatch({ type: "SET_AUTH", payload: true });
    } else {
      dispatch({ type: "SET_AUTH", payload: false });
    }
  }, []);

  return (
    <div className="App">
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="/label"
            element={
              <PrivateRoute>
                <LabelPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/archive"
            element={
              <PrivateRoute>
                <ArchivePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/trash"
            element={
              <PrivateRoute>
                <TrashPage />
              </PrivateRoute>
            }
          />

          <Route path="/mockman" element={<Mockman />} />
        </Routes>
      </LayoutComponent>
    </div>
  );
}

export default App;
