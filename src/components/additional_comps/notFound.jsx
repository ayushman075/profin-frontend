import React from 'react'
import { Link } from 'react-router-dom'
import { FaExclamationCircle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div>
       <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-primaryGreen to-accentYellow text-white">
      <div className="text-center p-8 space-y-6 max-w-md bg-white bg-opacity-90 rounded-lg shadow-lg">
        <FaExclamationCircle className="w-24 h-24 text-red-500 mx-auto" />
        
        <h1 className="text-5xl font-bold text-gray-800">404</h1>
        <p className="text-2xl font-semibold text-gray-600">Oops! Page Not Found</p>
        
        <p className="text-gray-500">The page you're looking for doesn't exist or has been moved.</p>
        
        <Link to="/" className="inline-block bg-primaryGreen hover:bg-accentYellow text-black font-semibold px-6 py-3 rounded-lg shadow transition-colors duration-200 ease-in-out">
          Go Back Home
        </Link>
      </div>
    </div>
    </div>
  )
}

export default NotFound
