import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateStateOnToken } from "./store/actions/Auth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateStateOnToken());
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
