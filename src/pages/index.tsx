import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import ContactMe from '@/components/Contactme'
import Projects from '@/components/Projects'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='bg-[rgb(36,36,36)] scale-100 m-auto text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 object-fit scrollbar-thumb-[#f7ab0a]/80'>
    <Head>
        <title>Noman Ahmed</title>
      
      </Head>
    {/* Header */}
<Header/>
    {/* Hero */}
<section id='hero' className='snap-center'>
  <Hero/>
  </section>   
  
  
   {/* About */}
<section className='snap-center' id='about'><About/></section>


    {/* Experience */}
<section className='snap-center' id='experience'><WorkExperience/></section>
    {/* Skills */}
    {/* Projects */}
    {/* Contact Me */}
    <section className='snap-center ' id='skills'>

      <Skills/>
    </section>
    <section className='snap-center' id='projects'>

      <Projects/>
    </section>
    <section className='snap-center' id='contact'>
<ContactMe/>
    </section>
    </div>
    </>
  )
}
