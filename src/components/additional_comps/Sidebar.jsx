import React from 'react'
import { Button } from "@/components/ui/button"


const Sidebar = () => {
  return (
    <aside className="bg-primaryGreen w-64 p-6 sticky top-16 text-black flex flex-col">
      <h2 className="text-2xl font-bold mb-8">Professor Dashboard</h2>
      <nav className="flex flex-col space-y-4">
        <a href="#profile" className="hover:text-accentYellow hover:bg-yellow-200 p-3 rounded-xl text-lg">Profile</a>
        <a href="#research" className="hover:text-accentYellow hover:bg-pColor p-3 rounded-xl text-lg">Research Papers</a>
        <a href="#seminars" className="hover:text-accentYellow hover:bg-sColor p-3 rounded-xl text-lg">Seminars</a>
        <a href="#rank" className="hover:text-accentYellow hover:bg-tColor p-3 rounded-xl text-lg">Rank</a>
      </nav>
    
    </aside>
  )
}

export default Sidebar
