import { BsFillMoonStarsFill } from 'react-icons/bs';

const Header = () => {
   return (
      <section className=' top-0 bg-gradient-to-r from-teal-800 to-orange-100'>
         <nav className=' py-4  flex justify-between '>
            <h1 className=' text-lg font-Nabla animate-bounce'>
               BuiltbyCHarris
            </h1>
            <ul className=' flex items-center'>
               {/* <li className=' pr-4'>
                  <BsFillMoonStarsFill className=' cursor-pointer  text-2xl' />
               </li> */}
               <li>
                  <a
                     className=' bg-cyan-300 text-white px-4 py-2 rounded-lg'
                     href='https://drive.google.com/file/d/1yMX_XnWgzAWCVL3K-g-EBOPLYsXTiAWN/view?usp=share_link'
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
