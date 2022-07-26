import "../styles/App.css";
import Layout from "./Layout";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Result from "./pages/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "context/AuthContext";
import PrivateOutLate from "./PrivateOutLate";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route index element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<PrivateOutLate />}>
              <Route path="quiz/:id" element={<Quiz />} />
              <Route path="result/:id" element={<Result />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
