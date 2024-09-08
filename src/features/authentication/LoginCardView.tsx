import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginCardView = () => {
  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const navigate = useNavigate();
  const handleLoginEmailPwd = async (e: React.FormEvent) => {
        e.preventDefault()
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
            email,
            password
        }) 

        if (response.status === 401) {
            alert("Wrong password/email")
        } else if (response.status === 200) {
            alert("Sucessfully logged in!")
            // Reloads current page to update auth context
            navigate(0)
        }
  }
  return (
    <div className="mt-5 mb-4">
      <div className="flex flex-col items-center justify-center">
        <form onSubmit={handleLoginEmailPwd} className="max-w-md w-full">
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

          <div className="space-x-6 flex justify-center mt-8">
            <button type="button" className="border-none outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="32px" viewBox="0 0 512 512">
                <path fill="#fbbd00" d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z" />
                <path fill="#0f9d58" d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z" />
                <path fill="#31aa52" d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z" />
                <path fill="#3c79e6" d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z" />
                <path fill="#cf2d48" d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z" />
                <path fill="#eb4132" d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginCardView;
