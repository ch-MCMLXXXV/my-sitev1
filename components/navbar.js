import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function Navbar() {
   return (
      <section className=' min-h-screen'>
         <nav className=' py-10 mb-12 flex justify-between '>
            <h1 className='text-2xl'>DevelopedbyCHarris</h1>
            <ul className=' flex items-center'>
               <li className=' pr-4'>
                  <BsFillMoonStarsFill className=' cursor-pointer  text-2xl' />
               </li>
               <li>
                  <a
                     className=' bg-cyan-300 text-white px-4 py-2 rounded-lg'
                     href='#'
                  >
                     Resume
                  </a>
               </li>
            </ul>
         </nav>
      </section>
   );
}
