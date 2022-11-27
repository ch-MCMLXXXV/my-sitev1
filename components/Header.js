import { BsFillMoonStarsFill } from 'react-icons/bs';

const Header = () => {
   return (
      <section className=' top-0'>
         <nav className=' py-4 mb-2 flex justify-between '>
            <h1 className=' text-lg font-Nabla animate-bounce'>
               DevelopedbyCHarris
            </h1>
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
};

export default Header;
