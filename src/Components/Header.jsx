import React, { useState } from 'react'
import HeaderItem from './HeaderItem'
import disney_logo from './../assets/images/disney_logo.png'
import user from './../assets/images/user.jpg'
// import { FaRegUserCircle } from "react-icons/fa";
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from 'react-icons/hi2'

import {
    HiPlus,HiDotsVertical
} from 'react-icons/hi'

function Header ()  {

    const [toggle,setToggle] = useState(false)

   

    const menu = [
        {
            name:'HOME',
            icon: HiHome
        },
        {
            name:'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon: HiPlus
        },
        {
            name:'ORIGINALS',
            icon: HiStar
        },
        {
            name:'MOVIES',
            icon: HiPlayCircle
        },
        {
            name:'SERIES',
            icon: HiTv
        },
    ]


  return (
    <div className='flex items-center justify-between p-5 '>
       <div className='flex gap-8 items-center'>
       <img src={disney_logo} className=' w-[80px] md:w-[115px] object-cover'/>
          <div className='hidden md:flex gap-8'>
          {menu.map((item)=>(
            <HeaderItem name = {item.name} Icon = {item.icon}/>
        ))}
          </div>
          <div className='flex gap-5 md:hidden'>
          {menu.map((item,index)=>index<3&&(
            <HeaderItem name = {''} Icon = {item.icon}/>
        ))}
          </div>
          <div className=' md:hidden' onClick={()=>setToggle(!toggle)}>
         
        <HeaderItem name = {''} Icon = {HiDotsVertical}/>
        { toggle?
        <div className='absolute mt-3 bg-[#121212] border-[1px] p-3 px-5 py-4' >
        {menu.map((item,index)=>index>2&&(
            <HeaderItem  name = {item.name} Icon = {item.icon}/>
        ))}
        </div> :null
        }
          </div>
       </div>
       <img className='w-[40px] rounded-full ' src= {user} />
       {/* <FaRegUserCircle className='h-10 w-10 cursor-pointer ' /> */}
    </div>
  )
}

export default Header