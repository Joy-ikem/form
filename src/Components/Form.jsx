import React, { useState } from 'react';
import Smileface from "./Animation/Smileface.json";
import Lottie from 'lottie-react';
import { Typewriter } from "react-simple-typewriter";

const Form = () => {
  // Form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setError('');
    setSuccess('');

    // Validation
    if (!username || !password || !confirmPassword || !mobile) {
      setError('All fields are required!');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (!/^\d{10,}$/.test(mobile)) {
      setError('Enter a valid mobile number!');
      return;
    }

    // Simulate success
    setSuccess('Form submitted successfully!');
  };

  return (
    <section className='h-[100vh] w-[100vw] flex items-center justify-center bg-blue-50'>
      <div className="col-1 w-full max-w-md p-6 rounded-xl shadow-2xl bg-white h-100 flex flex-col justify-around items-center">
        <p className='text-center text-4xl mb-4' style={{ fontFamily: 'Sofia, cursive' }}>
          <Typewriter
            words={['Welcome']}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={150}
            deleteSpeed={10}
            delaySpeed={1000}
          />
          <Lottie className='w-10 h-10 inline-block ml-2' animationData={Smileface} />
        </p>

        {/* Error and Success Messages */}
        {error && <div className="text-red-600 text-center mb-2">{error}</div>}
        {success && <div className="text-green-600 text-center mb-2">{success}</div>}

        {/* Form */}
        <form onSubmit={handleSubmit} className='flex flex-col gap-4  h-75 w-70'>
          <input
            type="text"
            placeholder='Username'
            className='border h-10 px-3 rounded '
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder='Password'
            className='border h-10 px-3 rounded'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder='Confirm password'
            className='border h-10 px-3 rounded'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder='Mobile number'
            className='border h-10 px-3 rounded '
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <button
              type="submit"
              className="appearance-none border-none bg-blue-900 text-white rounded h-10 hover:bg-gray-900 flex justify-center items-center w-60">
               Sign In
          </button>

        </form>
      </div>
    </section>
  );
};

export default Form;

