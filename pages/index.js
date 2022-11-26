import Head from 'next/head';
import Image from 'next/image';
import me from '../public/me.jpeg';
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
         <main>
            <section>
               <div className=' text-center p-10'>
                  <h2 className=' text-5xl py-2 font-medium text-red-600'>
                     Courtney Harris
                  </h2>
                  <h3 className=' text-2xl py-2'>
                     Full-stack developer and photographer
                  </h3>
                  <p className=' leading-8'>
                     Banker turned dev who loves learning, creating
                     and building!
                     <br /> Look around and if something peaks your
                     interest, do not hesitate to reach out via the
                     links at the bottom.
                     <br /> Enjoy!
                  </p>
                  <div className=' relative rounded-full w-80 h-80 flex items-center'>
                     <Image src={me} />
                  </div>
               </div>
            </section>
         </main>
      </div>
   );
}
