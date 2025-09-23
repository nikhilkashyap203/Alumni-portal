import React, { useState } from "react";

const AuthTabs = () => {
  const [tab, setTab] = useState("login");
  const [login, setLogin] = useState({ userId: "", password: "" });
  const [register, setRegister] = useState({
    state: "",
    college: "",
    userId: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginChange = (e) => setLogin({ ...login, [e.target.name]: e.target.value });
  const handleRegisterChange = (e) => setRegister({ ...register, [e.target.name]: e.target.value });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Handle register logic
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
      <div className="flex mb-6">
        <button
          className={`flex-1 py-2 font-semibold rounded-l ${tab === "login" ? "bg-blue-600 text-white" : "bg-gray-100 text-blue-600"}`}
          onClick={() => setTab("login")}
        >
          Login
        </button>
        <button
          className={`flex-1 py-2 font-semibold rounded-r ${tab === "register" ? "bg-blue-600 text-white" : "bg-gray-100 text-blue-600"}`}
          onClick={() => setTab("register")}
        >
          Register
        </button>
      </div>
      {tab === "login" ? (
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="userId">
              User ID
            </label>
            <input
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="userId"
              name="userId"
              value={login.userId}
              onChange={handleLoginChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="password"
              name="password"
              value={login.password}
              onChange={handleLoginChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold shadow w-full"
          >
            Login
          </button>
        </form>
      ) : (
        <form onSubmit={handleRegisterSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="state">
              State
            </label>
            <input
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="state"
              name="state"
              value={register.state}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="college">
              College Name
            </label>
            <input
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="college"
              name="college"
              value={register.college}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="userId">
              User ID
            </label>
            <input
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="userId"
              name="userId"
              value={register.userId}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="password"
              name="password"
              value={register.password}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={register.confirmPassword}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold shadow w-full"
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
};

const CollegeAuth = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <AuthTabs />
  </div>
);

export default CollegeAuth;