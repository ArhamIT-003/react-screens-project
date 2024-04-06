import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../providers/AuthProvider";

const SignUp = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { signup, error } = useAuth();

  const navigate = useNavigate();

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // Email validation
    if (!data.email) {
      isValid = false;
      tempErrors["email"] = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      isValid = false;
      tempErrors["email"] = "Email is not valid";
    }

    // Password validations
    if (!data.password) {
      isValid = false;
      tempErrors["password"] = "Password is required";
    } else if (data.password.length < 8) {
      isValid = false;
      tempErrors["password"] = "Password must be at least 8 characters long";
    }

    // Confirm Password validation
    if (data.password !== data.confirmPassword) {
      isValid = false;
      tempErrors["confirmPassword"] = "Passwords do not match";
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        if (await signup(data.email, data.password, data.firstName, data.lastName)) {
          navigate("/");
        }
        console.log("error: ", error)
      } catch (err) {
        console.error("Signup failed: ", err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data.password}
                onChange={handleChange}
                required
              />
              {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword}</p>}
              {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message in red */}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md focus:bg-blue-700 focus:outline-none"
              >
                {loading ? "Loading..." : "Signup"}
              </button>
            </form>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
