import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { RxAvatar } from "react-icons/rx";
  import { MdBadge } from "react-icons/md";
  import { MdFormatListBulleted } from "react-icons/md";
  import { IoMdMailOpen } from "react-icons/io";
  import { FaPhoneAlt } from "react-icons/fa";
  import { FaGlobeAmericas } from "react-icons/fa";
  import { LiaChalkboardTeacherSolid } from "react-icons/lia";
  import { IoIosPaper } from "react-icons/io";

const ProfDetail = () => {
  return (
    <main className="flex-1 p-8 w-full space-y-6">
      {/* Profile Section */}
      <section id='profile' className="flex flex-col  w-full md:flex-row space-x-6 bg-white p-8 rounded-lg shadow-lg">
      {/* Profile Picture */}
      {/* <div className='flex max-sm:justify-center m-auto w-full'> */}
      <RxAvatar size={200} className="text-tColor max-sm:mx-auto" src="/path-to-avatar.jpg" alt="Professor's Profile Photo" />
      {/* </div> */}
      {/* Profile Details */}
      <div className="flex flex-col space-y-4  w-full">
        {/* Name and Title */}
        <div className='flex flex-row max-sm:flex-wrap max-sm:mx-auto justify-between w-full'>
        <div>
          <h3 className="text-3xl font-semibold text-accentOrange">Professor John Doe</h3>
          <p className="text-gray-500 text-lg">Department of Computer Science</p>
          
          <MdBadge className="mt-2 bg-accentYellow text-white">Senior Professor</MdBadge>
          
        </div>

        {/* Contact Information */}
        <div className="flex flex-col space-y-2 text-gray-700">
          <div className="flex items-center space-x-2">
          <IoMdMailOpen className="w-5 h-5 text-primaryGreen" />
            <p>johndoe@university.edu</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="w-5 h-5 text-primaryGreen" />
            <p>(123) 456-7890</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaGlobeAmericas className="w-5 h-5 text-primaryGreen" />
            <p>LinkedIn: linkedin.com/in/johndoe</p>
          </div>
        </div>
        </div>
        {/* Additional Information */}
        <div className="text-gray-700">
          <p><strong>Office Hours:</strong> Mon-Fri, 10 AM - 2 PM</p>
          <p><strong>Years of Experience:</strong> 15</p>
          <p><strong>Specialization:</strong> Artificial Intelligence, Machine Learning</p>
          <p><strong>Research Interests:</strong> Deep Learning, Natural Language Processing, Ethics in AI</p>
        </div>
      </div>
    </section>

      {/* Research Papers Section */}
      <section id="research">
        <Card className="p-6 bg-pColor rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-accentOrange flex items-center">
            <IoIosPaper className="w-10 h-10 text-white mr-2" /> Research Papers
          </h3>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• Paper 1: Title of Research Paper with a brief description</li>
            <li>• Paper 2: Title of Research Paper with a brief description</li>
            <li>• Paper 3: Title of Research Paper with a brief description</li>
            <li>• Paper 4: Title of Research Paper with a brief description</li>
          </ul>
        </Card>
      </section>

      {/* Seminars Section */}
      <section id="seminars">
        <Card className="p-6 bg-sColor rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-accentOrange flex items-center">
          <LiaChalkboardTeacherSolid  className="w-10 h-10 text-white mr-2" /> Seminars
          </h3>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• Seminar 1: Title and short description</li>
            <li>• Seminar 2: Title and short description</li>
            <li>• Seminar 3: Title and short description</li>
            <li>• Seminar 4: Title and short description</li>
          </ul>
        </Card>
      </section>

      {/* Rank Section */}
      <section id="rank">
        <Card className="p-6 bg-tColor rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-accentOrange flex items-center">
            <MdBadge className="w-10 h-10 text-white mr-2" /> Rank & Achievements
          </h3>
          <div className="mt-4 space-y-2">
            <p className="text-gray-700">Current Rank: Associate Professor</p>
            <p className="text-gray-700">Total Citations: 4500</p>
            <p className="text-gray-700">Papers with Highest Impact Factor: 3</p>
           
          </div>
        </Card>
      </section>
    </main>   
)
}

export default ProfDetail
