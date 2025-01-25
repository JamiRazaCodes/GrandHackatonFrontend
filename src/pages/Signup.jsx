import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
  
    try {
      const response = await axios.post('https://grand-hackathon-smit-backend.vercel.app/api/auth/signup', {
        username,
        email,
        password,
      });
  
      if (response.status === 200) {
        console.log('Signup successful');
        setUsername('');
        setEmail('');
        setPassword('');
        navigate('/login');
      } else {
        setError('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setError(error.response?.data?.message || 'Error signing up');
    } finally {
      setIsLoading(false); // Always reset loading state
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-10 rounded-lg shadow-md w-1/2">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm mb-4" aria-live="polite">
              {error}
            </p>
          )}
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Signing up...' : 'Signup'}
          </button>
        </form>
        <div className="mt-4 text-center">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <Link to="/" className="text-blue-500 hover:underline">
                    Click Here
                  </Link>
                </p>
              </div>
      </div>
    </div>
  );
}

export default SignupPage;