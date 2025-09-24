import React, { useState } from "react";

const AuthTabs = () => {
  const [tab, setTab] = useState("login");
  const [login, setLogin] = useState({ email: "", password: "" });
  const [register, setRegister] = useState({
    state: "",
    college: "",
    email: "",
    enteredOtp: "",
    password: "",
    confirmPassword: "",
  });
  const [registerOtpSent, setRegisterOtpSent] = useState(false);
  const [mockOtp] = useState("123456"); // Mock OTP for demo (fixed; in real app, generate dynamically via backend)

  const handleLoginChange = (e) => setLogin({ ...login, [e.target.name]: e.target.value });
  const handleRegisterChange = (e) => setRegister({ ...register, [e.target.name]: e.target.value });

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!register.email) {
      alert("Please enter your college email ID first.");
      return;
    }
    console.log(`OTP (${mockOtp}) sent to: ${register.email} for verification`); // Simulate sending OTP
    setRegisterOtpSent(true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!login.email || !login.password) {
      alert("Please fill in all fields.");
      return;
    }
    // Handle login logic (e.g., API call with email and password)
    console.log("Login successful with email:", login.email);
    alert("Login successful! (Demo)");
    // Reset form or redirect
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!registerOtpSent) {
      alert("Please send and enter the OTP to verify your email first.");
      return;
    }
    if (register.enteredOtp !== mockOtp) {
      alert("Invalid OTP. Please check your email and try again.");
      return;
    }
    if (!register.password || !register.confirmPassword) {
      alert("Please enter password and confirm password.");
      return;
    }
    if (register.password !== register.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    // Handle register logic (e.g., API call with all fields, including verified email)
    console.log("Registration successful with email:", register.email);
    alert("Registration successful! Email verified. (Demo)");
    // Reset form or redirect
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
      <div className="flex mb-6">
        <button
          className={`flex-1 py-2 font-semibold rounded-l ${
            tab === "login" ? "bg-blue-600 text-white" : "bg-gray-100 text-blue-600"
          }`}
          onClick={() => setTab("login")}
        >
          Login
        </button>
        <button
          className={`flex-1 py-2 font-semibold rounded-r ${
            tab === "register" ? "bg-blue-600 text-white" : "bg-gray-100 text-blue-600"
          }`}
          onClick={() => setTab("register")}
        >
          Register
        </button>
      </div>
      {tab === "login" ? (
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
              College Email ID
            </label>
            <input
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              name="email"
              value={login.email}
              onChange={handleLoginChange}
              placeholder="e.g., student@college.edu"
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
              placeholder="e.g., Maharashtra"
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
              placeholder="e.g., XYZ College"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
              College Email ID
            </label>
            <input
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              name="email"
              value={register.email}
              onChange={handleRegisterChange}
              placeholder="e.g., student@college.edu"
              required
            />
          </div>
          {!registerOtpSent && (
            <button
              type="button"
              onClick={handleSendOtp}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold w-full mb-4"
            >
              Send OTP for Email Verification
            </button>
          )}
          {registerOtpSent && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="enteredOtp">
                Enter OTP (sent to your email)
              </label>
              <input
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="enteredOtp"
                name="enteredOtp"
                value={register.enteredOtp}
                onChange={handleRegisterChange}
                placeholder="Enter 6-digit OTP"
                maxLength={6}
                required
              />
            </div>
          )}
          {registerOtpSent && (
            <>
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
                  placeholder="Enter your password"
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
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </>
          )}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold shadow w-full"
            disabled={!registerOtpSent || register.enteredOtp.length < 6 || !register.password || register.password !== register.confirmPassword}
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
};

const StudentsAuth = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <AuthTabs />
  </div>
);

export default StudentsAuth;
