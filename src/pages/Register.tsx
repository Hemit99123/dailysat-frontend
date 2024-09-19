import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import httpService from '../utils/httpService';

const Register = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await httpService.post("/auth/register", { email, password, name });

      if (response.status === 200) {
        alert("Successfully registered your account! You may log in now!");
        navigate('/login');
      } else {
        throw new Error(response.data.error);
      }
    } catch (error: any) {
      alert(error.response?.data.message || 'An unexpected error occurred');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <div className="flex flex-col items-center justify-center">
          <form onSubmit={handleRegister}>
            <h3 className="text-gray-800 text-3xl font-extrabold mb-8 text-center">
              Register
            </h3>

            <div className="space-y-4">
              <div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  type="text"
                  required
                  className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                  placeholder="Name"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm text-gray-800"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-500 font-semibold"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full shadow-xl py-3 text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Register
              </button>
            </div>
          </form>

          {/* Verify email button */}
          <button 
            className="mt-5 w-full py-1.5 text-sm font-semibold rounded text-white bg-black hover:bg-gray-800"
            onClick={() => navigate("/verify-email")}
          >
            Verify your email
          </button>
          
          {/* "Already have an account? Log in" section */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a
                href="/login"
                className="text-blue-600 hover:text-blue-500 font-semibold"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
