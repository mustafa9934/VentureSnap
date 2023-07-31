import React, { useEffect, useState } from "react";
import styles from "./auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAction } from "../../store/actions/Auth";
import storage from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    country: "",
    profileImage: "",
    bio: "",
    socialMediaLinks: {
      Instagram: "",
      Facebook: "",
      Twitter: "",
    },
  });

  const { errors, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
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

  const onInputChange = (e) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };
  const onSocialLinksInputChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      socialMediaLinks: {
        ...prevUser.socialMediaLinks,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const onImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const storageRef = ref(storage, `images/${file.name}`);
      await uploadBytes(storageRef, file);
      const imageUrl = await getDownloadURL(storageRef);
      setUser({ ...user, profileImage: imageUrl });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const registerUser = (e) => {
    e.preventDefault();
    dispatch(registerUserAction(user));
  };
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
          <img src="./images/auth.jpg" alt="register" />
        </div>
        <div className={styles.auth_form}>
          <form onSubmit={(e) => registerUser(e)}>
            <div>
              <Link to="/" className={styles.back}>
                &larr; Home
              </Link>
              <h1>Register</h1>
              <div className={styles.form_group}>
                <label htmlFor="FullName" className={styles.auth_label}>
                  Full Name
                </label>
                <input
                  name="fullName"
                  type="text"
                  className={styles.auth_input}
                  placeholder="Full Name here"
                  id="FullName"
                  value={user.fullName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
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
                <label htmlFor="DOB" className={styles.auth_label}>
                  Date of Birth
                </label>
                <input
                  name="dateOfBirth"
                  type="date"
                  className={styles.auth_input}
                  id="DOB"
                  value={user.dateOfBirth}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="Gender" className={styles.auth_label}>
                  Gender
                </label>
                <select
                  name="gender"
                  className={styles.auth_input}
                  id="Gender"
                  value={user.gender}
                  onChange={(e) => onInputChange(e)}>
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
              <div className={styles.form_group}>
                <label htmlFor="Country" className={styles.auth_label}>
                  Country
                </label>
                <input
                  name="country"
                  type="text"
                  className={styles.auth_input}
                  placeholder="Country here"
                  id="Country"
                  value={user.country}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
            <div>
              <div className={styles.form_group}>
                <label htmlFor="Profile" className={styles.auth_label}>
                  Profile
                </label>
                <input
                  name="profileImage"
                  type="file"
                  className={styles.auth_input}
                  id="Profile"
                  onChange={(e) => onImageChange(e)}
                />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="Bio" className={styles.auth_label}>
                  About you
                </label>
                <textarea
                  name="bio"
                  className={styles.auth_textarea}
                  id="Bio"
                  placeholder="Write about yourself"
                  value={user.bio}
                  onChange={(e) => onInputChange(e)}></textarea>
              </div>
              <div className={styles.form_group}>
                <label htmlFor="Instagram" className={styles.auth_label}>
                  Instagram
                </label>
                <input
                  name="Instagram"
                  type="text"
                  className={styles.auth_input}
                  id="Instagram"
                  placeholder="Instagram link"
                  value={user.socialMediaLinks.Instagram}
                  onChange={(e) => onSocialLinksInputChange(e)}
                />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="Facebook" className={styles.auth_label}>
                  Facebook
                </label>
                <input
                  name="Facebook"
                  type="text"
                  className={styles.auth_input}
                  id="Facebook"
                  placeholder="Facebook link"
                  value={user.socialMediaLinks.Facebook}
                  onChange={(e) => onSocialLinksInputChange(e)}
                />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="Twitter" className={styles.auth_label}>
                  Twitter
                </label>
                <input
                  name="Twitter"
                  type="text"
                  className={styles.auth_input}
                  id="Twitter"
                  placeholder="Twitter link"
                  value={user.socialMediaLinks.Twitter}
                  onChange={(e) => onSocialLinksInputChange(e)}
                />
              </div>
              <div className={styles.form_group}>
                <input
                  type="submit"
                  value="Register"
                  className={styles.auth_btn}
                />
              </div>
              <p>
                Already have an account? <Link to="/login">Login here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
