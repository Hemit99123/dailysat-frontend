import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import httpService from '../../libs/httpService';

const LoginCardView = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLoginEmailPwd = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await httpService.post("/auth/login", { email, password });

      if (response.status === 200) {
        alert("Successfully logged in!");
        navigate('/'); 
      } else {
        throw new Error(response.data.error);
      }
    } catch (error: any) {
      alert(error.response?.data.message || 'An unexpected error occurred');
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="mt-5 mb-4 w-96"> {/* Adjust the width here */}
        <div className="flex flex-col items-center justify-center">
          <form onSubmit={handleLoginEmailPwd}>
            <h3 className="text-gray-800 text-3xl font-extrabold mb-8">
              Sign in
            </h3>

            <div className="space-y-4">
              <div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
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
                  className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="Password"
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
                    href="javascript:void(0);"
                    className="text-blue-600 hover:text-blue-500 font-semibold"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>

            <div className="!mt-8">
              <button
                type="submit"
                className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Log in
              </button>
            </div>
          </form>
        </div>

        <button 
          className="mt-5 w-full py-1.5 text-sm font-semibold rounded text-white bg-black"
          onClick={() => navigate("/verify-email")}
        >
          Verify your email
        </button>
      
      </div>
    </div>
  );
};

export default LoginCardView;
