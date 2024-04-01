import React from 'react'
import disney from './../assets/images/disney.png'
import marvel from './../assets/images/marvel.png'
import nat_geo from './../assets/images/nationalG.png'
import pixar from './../assets/images/pixar.png'
import starwars from './../assets/images/starwar.png'

import disneyV from './../assets/videos/Disney.mp4'
import marvelV from './../assets/videos/Marvel.mp4'
import natgeoV from './../assets/videos/national-geographic.mp4'
import pixarV from './../assets/videos/pixar.mp4'
import starwarsV from './../assets/videos/star-wars.mp4'


function ProductionHouse() {
  const production = [
    {
      id:1,
      image: disney,
      video: disneyV,
    },
    {
      id:2,
      image: marvel,
      video: marvelV,
    },
    {
      id:3,
      image: nat_geo,
      video: natgeoV,
    },
    {
      id:4,
      image: pixar,
      video: pixarV,
    },
    {
      id:5,
      image: starwars,
      video: starwarsV,
    },
  ]

  return (
    <div className='flex gap-2 md:gap-5  p-2 px-5 md:px-16'>
      {production.map((item)=>(
        <div className='border-[2px] border-gray-600 rounded-md transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-black relative' key={item.id}>
          <video src={item.video} autoPlay loop playsInline muted className='absolute rounded-md z-0 opacity-0 hover:opacity-50' />
          <img src={item.image} className='w-full z-[1]' />
        </div>
      ))}
    </div>
  )
}

export default ProductionHouse