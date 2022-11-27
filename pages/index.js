import Head from 'next/head';
import Image from 'next/image';
import me3 from '../public/me3.PNG';
import pixelme from '../public/pixelme.PNG';
import styles from '../styles/Home.module.css';

export default function Home() {
   return (
      <div className=' bg-gradient-to-r from-teal-800 to-orange-300 min-h-screen'>
         <Head>
            <title>C.Harris Portfolio</title>
            <meta
               name='description'
               content='Generated by create next app'
            />
         </Head>
         <main className=' px-20'>
            <section>
               <div className=' text-center px-4'>
                  <h2 className=' text-5xl py-7 font-medium font-ChakraPetch'>
                     Courtney Harris
                  </h2>
                  <h3 className=' text-2xl py-2 font-ChakraPetch'>
                     Full-stack developer and photographer
                  </h3>
                  <p className=' leading-8 py-5 text-lg font-ChakraPetch'>
                     Banker turned dev who loves learning, creating
                     and building!
                     <br /> Look around and if something peaks your
                     interest, do not hesitate to reach out via the
                     links at the bottom.
                     <br /> Enjoy!
                  </p>
                  <div className='  relative mx-auto rounded-full '>
                     <Image
                        src={pixelme}
                        alt='profile image'
                        width={300}
                        className=' mx-auto'
                     />
                  </div>
               </div>
            </section>
            <section>
               <div>
                  <h2 className=' text-3xl  font-medium font-ChakraPetch'>
                     Latest Projects
                  </h2>
                  <div>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                     </p>
                  </div>
               </div>
            </section>
            <section>
               <div>
                  <h2 className=' text-3xl  font-medium font-ChakraPetch'>
                     Blog Posts
                  </h2>
                  <div>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                     </p>
                  </div>
               </div>
            </section>
         </main>
      </div>
   );
}
