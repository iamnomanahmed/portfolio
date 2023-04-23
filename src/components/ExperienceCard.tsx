import React from "react";
import {motion} from 'framer-motion'
type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        alt="Work Experience Image 1"
        src="https://w7.pngwing.com/pngs/75/635/png-transparent-circle-fiverr-round-icon-popular-services-brands-vol-2-icon.png"
      />
   
      
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Freelancer as a Graphic Designer</h4>
        <p className="font-bold text-2xl mt-1">Fiverr</p>
       <div className="flex space-x-2 my-2">
        <img 
        className="h-19 w-10 rounded-full"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
        <img 
        className="h-19 w-10 rounded-full"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
         <img 
        className="h-19 w-10 rounded-full"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
         <img 
        className="h-19 w-10 rounded-full"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
       </div>
       
       
        <p className="uppercase py-5 text-gray-300">Started in 2019</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
        </ul>
      </div>
    </article>
  );
}
