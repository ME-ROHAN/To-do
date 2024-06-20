import React from 'react'

const Navbar = () => {
  return (
    <nav className= 'flex justify-between bg-slate-900 text-white py-4'>
     <div className='logo'>
        <span className='font-bold text-xl mx-8'>
           MyTask 
        </span>
        
      </div>
        <ul className='flex gap-9 mx-9'>
            <li  className='cursor-pointer hover:font-bold transition-all duration-50'>Home</li>
            <li className='cursor-pointer hover:font-bold  transition-all duration-50'>My Tasks</li>
        </ul>
     
      
    </nav>
  )
}

export default Navbar
