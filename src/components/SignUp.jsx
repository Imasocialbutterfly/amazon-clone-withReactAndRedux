import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [isEmailValid, setIsEmailValid] = useState(true)

  const handleSignup = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
      console.error("Invalid email format")
      setIsEmailValid(false)
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      dispatch(setUser({ uid: user.uid, email, name }));

      navigate("/")
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Amazon Account
        </h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setIsEmailValid(true)
              }}
              className={`mt-1 p-2 w-full border ${
                isEmailValid ? "border-gray-300": "border-red-500"} rounded-md`}
              required
            />
            {!isEmailValid && (
              <p className="text-red-500 text-sm mt-1">Invalid email</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amazonclone text-white py-2 rounded-md hover:bg-opacity-80"
          >
            Create your Amazon account
          </button>
        </form>
        <div className="mt-4 text-sm text-center">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-amazonclone font-semibold">
              Sign in to your account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
