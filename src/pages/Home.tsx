import ProtectedRoute from "../wrapper/ProtectedRoute"

const Home = () => {
  return (
    <ProtectedRoute>
        <div className="flex text-red-500 justify-center items-center h-screen">
            Home
        </div>
    </ProtectedRoute>

  )
}

export default Home