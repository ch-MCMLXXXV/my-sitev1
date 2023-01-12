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
                     href='https://docs.google.com/document/d/1lI6mssxksm2e8jCNOFaGSCuZwK-YKAnG/edit?usp=sharing&ouid=102613210394200483698&rtpof=true&sd=true'
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
