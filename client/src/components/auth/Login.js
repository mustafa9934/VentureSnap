import React, { useEffect, useState } from "react";
import styles from "./auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../store/actions/Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const onUserLogin = (e) => {
    e.preventDefault();
    dispatch(loginUserAction(user));
  };

  const { errors, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (errors) {
      errors.map((error) => toast(error));
    }
  }, [errors]);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  return (
    <div className={styles.auth}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className={styles.auth_wrapper}>
        <div className={styles.auth_img}>
          <img src="./images/auth.jpg" />
        </div>
        <div className={styles.auth_form}>
          <form onSubmit={(e) => onUserLogin(e)}>
            <div>
              <Link to="/" className={styles.back}>
                &larr; Home
              </Link>
              <h1>Login</h1>
              <div className={styles.form_group}>
                <label htmlFor="Email" className={styles.auth_label}>
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className={styles.auth_input}
                  placeholder="Email here"
                  id="Email"
                  value={user.email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="Password" className={styles.auth_label}>
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className={styles.auth_input}
                  placeholder="Password here"
                  id="Password"
                  value={user.password}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className={styles.form_group}>
                <input
                  type="submit"
                  value="Login"
                  className={styles.auth_btn}
                />
              </div>
              <p>
                Doesn't have an account?{" "}
                <Link to="/register">Register here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
