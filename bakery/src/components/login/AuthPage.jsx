

// src/pages/AuthPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast"; 
import { useAuth } from "../context/AuthContext";
import loginimg from '../../assets/images/loginimg.PNG'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { loginUser } = useAuth(); // ✅ get login function

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);
  const validateName = (name) => /^[A-Za-z\s]+$/.test(name);
  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);

  // --- Registration ---
  const handleRegister = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!validateEmail(form.email)) newErrors.email = "Invalid email format.";
    if (!validatePassword(form.password))
      newErrors.password =
        "Password must have 8+ chars, uppercase, lowercase, number, special char.";
    if (!validateName(form.firstName)) newErrors.firstName = "Invalid first name.";
    if (!validateName(form.lastName)) newErrors.lastName = "Invalid last name.";
    if (!form.terms) newErrors.terms = "You must agree to the terms.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((u) => u.email === form.email)) {
      setErrors({ email: "User already exists. Please log in." });
      return;
    }

    const newUser = {
      email: form.email,
      password: form.password,
      firstName: form.firstName,
      lastName: form.lastName,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // ✅ save logged-in user under correct key
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    loginUser({ email: newUser.email, name: newUser.firstName });

    toast.success("Registration successful!");
    navigate("/");
  };

  // --- Login ---
  const handleLogin = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!validateEmail(form.email)) newErrors.email = "Invalid email format.";
    if (!form.password) newErrors.password = "Password is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === form.email);

    if (!user) {
      setErrors({ email: "No account found. Please register." });
      setIsLogin(false);
      return;
    }

    if (user.password !== form.password) {
      setErrors({ password: "Incorrect password." });
      return;
    }

    // ✅ save logged-in user under correct key
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    loginUser({ email: user.email, name: user.firstName });

    toast.success("Login successful!");
    navigate("/");
  };

  // --- Render ---
  return (
    <div className="flex flex-col items-center py-10 bg-white">
      {/* Tabs */}
      <div className="flex w-full max-w-4xl border border-orange-300 rounded-t-lg overflow-hidden">
        <button
          onClick={() => setIsLogin(true)}
          className={`flex-1 py-5 font-bold flex items-center justify-center gap-2 ${
            isLogin ? "bg-orange-500 text-white text-xl" : "bg-white text-orange-500 text-2xl"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`flex-1 py-5 font-bold flex items-center justify-center gap-2 ${
            !isLogin ? "bg-orange-500 text-white text-xl" : "bg-white text-orange-500 text-2xl"
          }`}
        >
          Register
        </button>
      </div>

      <div className="flex flex-col md:flex-row bg-white  max-w-3xl w-full rounded-b-lg overflow-hidden py-6">
        {/* Image */}
        <motion.div
          key={isLogin ? "login-img" : "register-img"}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="flex-1 flex justify-center items-center p-6 bg-white"
        >
          <img
            src={loginimg}
            alt="Cake"
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Form */}
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.form
              key="login-form"
              onSubmit={handleLogin}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4 }}
              className="flex-1 p-6 space-y-4"
            >
              <div>
                <label>E-Mail</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter Your E-Mail"
                  className="w-full p-3 border border-red-200 rounded-md focus:outline-none"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                  className="w-full p-3 border border-red-200 rounded-md focus:outline-none"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>
              <button className="bg-yellow-400 px-6 py-2 rounded-full uppercase font-bold hover:bg-yellow-500 transition w-full">
                Login
              </button>
            </motion.form>
          ) : (
            <motion.form
              key="register-form"
              onSubmit={handleRegister}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4 }}
              className="flex-1 p-6 space-y-4"
            >
              <div>
                <label>E-Mail</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter Your E-Mail"
                  className="w-full p-3 border border-red-200 rounded-md focus:outline-none"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                  className="w-full p-3 border border-red-200 rounded-md focus:outline-none"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full p-3 border border-red-200 rounded-md focus:outline-none"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>
                <div className="flex-1">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full p-3 border border-red-200 rounded-md focus:outline-none"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange} />
                <span className="text-sm">
                  I Agree to the <span className="text-orange-500">Terms</span> &{" "}
                  <span className="text-orange-500">Privacy Policy</span>
                </span>
              </div>
              {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}
              <button className="bg-yellow-400 px-6 py-2 rounded-full uppercase font-bold hover:bg-yellow-500 transition w-full">
                Register
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}



