import {
   AiFillGithub,
   AiFillLinkedin,
   AiOutlineTwitter,
   AiOutlineInstagram,
} from 'react-icons/ai';

const Footer = () => {
   return (
      <div className=' bottom-0 w-screen'>
         <div className=' flex justify-evenly py-3  text-3xl bg-gradient-to-r from-teal-800 to-orange-100'>
            <a href='https://twitter.com/CHarris_SWE'>
               <AiOutlineTwitter />
            </a>
            <a href='https://github.com/ch-MCMLXXXV'>
               <AiFillGithub />
            </a>
            <a href='https://www.linkedin.com/in/c-harris-swe/'>
               <AiFillLinkedin />
            </a>
            <a href='https://www.instagram.com/c_harrisswe/'>
               <AiOutlineInstagram />
            </a>
         </div>
         <div className='  flex justify-center bg-gradient-to-r from-teal-800 to-orange-100 py-3 text-lg '>
            ©2022:
            <span className=' pl-1'>Designed by C.Harris</span>
         </div>
      </div>
   );
};
export default Footer;
