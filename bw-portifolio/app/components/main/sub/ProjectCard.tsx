import Image from 'next/image';
import React from 'react'
interface Props {
    src: string;
    title: string;
    description: String;
}
const ProjectCard = ({src, title, description} : Props) => {
  return (
    <div className='relative overFlow-hidden rounded-lg shadow-lg border-[#2a0e61]'>
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className='w-full object-contain' 
          />  
          <div className='relative p-4'>
            <h1 className='text-2xl font-semibold text-white'>{title}</h1>
            <p className='mt-2 text-gray-300'>{description}</p>
          </div>    
    </div>
  )
}

export default ProjectCard