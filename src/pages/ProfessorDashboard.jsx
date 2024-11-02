import ProfDetail from '@/components/additional_comps/ProfDetail'
import Sidebar from '@/components/additional_comps/sidebar'
import React from 'react'

const ProfessorDashboard = () => {
  return (
    <div className='mt-16 flex flex-row'>
        <div className='max-sm:hidden'>
      <Sidebar/>
      </div>
      <ProfDetail/>
    </div>
  )
}

export default ProfessorDashboard
