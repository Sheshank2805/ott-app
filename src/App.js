import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import SignInScreen from "./pages/SignInScreen";
import RegistrationScreen from "./pages/RegistrationScreen";
import { UserProvider } from "./pages/UserContext";
import MovieDetailsPage from "./MovieDetailsPage";
function App() {
  const user = null;
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signin" element={<SignInScreen />} />
            <Route path="/signup" element={<RegistrationScreen />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/movie/:id" element={<MovieDetailsPage />} />
            <Route path="/" element={user ? <HomeScreen /> : <LoginScreen />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
