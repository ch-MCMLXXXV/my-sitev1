import {
   AiFillGithub,
   AiFillLinkedin,
   AiOutlineTwitter,
   AiOutlineInstagram,
} from 'react-icons/ai';

const Footer = () => {
   return (
      <div className=' fixed bottom-0 w-screen bg-slate-300'>
         <div className=' flex justify-evenly py-3  text-3xl'>
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
         <div className='  flex justify-center bg-slate-400 py-3'>
            ©2022
         </div>
      </div>
   );
};
export default Footer;
