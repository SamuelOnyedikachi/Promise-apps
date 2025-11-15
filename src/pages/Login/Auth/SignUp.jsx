import React, { useState } from 'react';
import Img from '../../../assets/firstbg.png';
import Logo from '../../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allFieldsFilled = Object.values(formData).every(
      (val) => val.trim() !== ''
    );

    if (!allFieldsFilled) {
      toast.error('Please fill all field', {
        position: 'top-right',
        style: {
          background: '#123',
          color: '#fff',
          fontSize: '12px',
          padding: '5px',
          borderRadius: '5px',
        },
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match', {
        position: 'top-right',
        style: {
          background: '#123',
          color: '#fff',
          fontSize: '12px',
          padding: '5px',
          borderRadius: '5px',
        },
      });
      return;
    }

    toast.success('Signup successful! Please login...', {
      position: 'top-right',
      style: {
        background: '#123',
        color: '#fff',
        fontSize: '12px',
        padding: '5px',
        borderRadius: '5px',
      },
      autoClose: 2000,
      onClose: () => navigate('/Login'),
    });
  };

  return (
    <div className="h-[90vh] py-20 max-w-6xl mx-auto bg-cover bg-center grid grid-cols-1 md:grid-cols-2 items-center justify-center px-6 gap-10">
      {/* Left Image */}
      <div className="hidden md:flex items-center justify-center">
        <img
          src={Img}
          className="w-full object-contain rounded-lg"
          alt="SignUp visual"
        />
      </div>

      {/* Right Form */}
      <div className="w-full flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md"
        >
          {/* Logo */}
          <div className="flex  items-center justify-center">
            <img src={Logo} onClick={() => navigate('/')} alt="logo" />
          </div>

          {/* Title */}
          <h1 className="text-xl font-medium text-[#daa81f71] mb-6 text-center">
            Sign Up
          </h1>

          {/* First & Last Name */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label
                htmlFor="firstname"
                className="block text-sm text-gray-200 mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="First name"
                className="w-full border text-sm border-[#daa81f81] rounded-xl px-4 py-2 bg-transparent text-gray-300 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#DAA71F]"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="lastname"
                className="block text-sm text-gray-200 mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last name"
                className="w-full border text-sm border-[#daa81f81] rounded-xl px-4 py-2 bg-transparent text-gray-300 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#DAA71F]"
              />
            </div>
          </div>

          {/* Username */}
          <div className="mt-4">
            <label
              htmlFor="username"
              className="block text-sm text-gray-200 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your Username"
              className="w-full border text-sm border-[#daa81f81] rounded-xl px-4 py-2 bg-transparent text-gray-300 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#DAA71F]"
            />
          </div>

          {/* Email */}
          <div className="mt-4">
            <label htmlFor="email" className="block text-sm text-gray-200 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full border text-sm border-[#daa81f81] rounded-xl px-4 py-2 bg-transparent text-gray-300 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#DAA71F]"
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <label
              htmlFor="password"
              className="block text-sm text-gray-200 mb-2"
            >
              Create Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border text-sm border-[#daa81f81] rounded-xl px-4 py-2 bg-transparent text-gray-300 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#DAA71F]"
            />
          </div>

          {/* Confirm Password */}
          <div className="mt-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm text-gray-200 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full border text-sm border-[#daa81f81] rounded-xl px-4 py-2 bg-transparent text-gray-300 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#DAA71F]"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-[#DAA71F] text-black font-medium py-2 rounded-xl hover:bg-[#b98c19] transition"
          >
            Sign Up
          </button>

          {/* Extra */}
          <p className="mt-4 text-sm text-gray-400 text-center">
            Already have an account?{' '}
            <span
              onClick={() => navigate('/Login')}
              className="text-[#DAA71F] hover:underline cursor-pointer"
            >
              Login
            </span>
          </p>
        </form>
      </div>

      {/* Toastify Container */}
      <ToastContainer />
    </div>
  );
};

export default SignUp;
