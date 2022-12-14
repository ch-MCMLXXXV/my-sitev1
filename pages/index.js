import Head from 'next/head';
import Image from 'next/image';
import Arcade from '../public/Arcade.gif';
import artcollector from '../public/artcollector.gif';
import StrangersThings from '../public/StrangersThings.gif';
import pixelme from '../public/pixelme.png';
import coming from '../public/coming.jpg';
import BlogPost from '../components/Blogposts';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
   const [posts, setPosts] = useState([]);

   const getPosts = async () => {
      try {
         const res = await fetch(
            'https://dev.to/api/articles?username=chmcmlxxxv&per_page=5'
         );
         const json = await res.json();
         console.log(json);
         setPosts(json);
      } catch (error) {
         console.log('error', error);
      }
   };

   useEffect(() => {
      getPosts();
   }, []);

   return (
      <div className=' bg-gradient-to-r from-teal-800 to-orange-100 min-h-screen'>
         <Head>
            <title>C.Harris Portfolio</title>
            <meta
               name='description'
               content='Generated by create next app'
            />
         </Head>
         <main className=' px-20'>
            <section className=' py-20'>
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
            <section className='py-20'>
               <div>
                  <h2 className=' text-3xl underline font-medium font-ChakraPetch pb-10'>
                     Projects
                  </h2>
                  <div>
                     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full pb-10'>
                        <div className=' shadow-2xl  shadow-orange-700/50 w-full bg-white rounded-xl overflow-hidden cursor-pointer'>
                           <Image
                              src={artcollector}
                              alt='Art Collector Project'
                              height={400}
                              unoptimized={true}
                              className=' object-cover w-full h-48'
                           />

                           <div className='relative p-4'>
                              <h3 className='text-base md:text-xl font-medium text-gray-800 font-ChakraPetch'>
                                 Art Collector
                              </h3>

                              <p className='mt-4 text-sm md:text-md text-gray-600 pb-3 font-ChakraPetch'>
                                 React web app built using Harvard
                                 University???s art collection API Built
                                 front-end allowing the user to search
                                 the art collection, showcasing all
                                 art relevant to the search item
                                 Developed with React and Javascript
                              </p>
                              <a
                                 className='  text-gray-600 hover:text-orange-500 font-ChakraPetch'
                                 href='https://github.com/ch-MCMLXXXV/UNIV_Art_Collector_React_Starter'
                              >
                                 Source Code...
                              </a>
                           </div>
                        </div>

                        <div className=' shadow-2xl  shadow-orange-700/50 w-full bg-white rounded-xl overflow-hidden cursor-pointer'>
                           <Image
                              src={StrangersThings}
                              alt='StrangersThings Project'
                              height={400}
                              unoptimized={true}
                              className=' object-cover w-full h-48'
                           />

                           <div className='relative p-4'>
                              <h3 className='text-base md:text-xl font-medium text-gray-800 font-ChakraPetch'>
                                 Strangers Things
                              </h3>

                              <p className='mt-4 text-sm md:text-md text-gray-600 pb-3 font-ChakraPetch'>
                                 Full-stack application is similar to
                                 Craigslist, allowing users to
                                 register/log in and list items for
                                 sale Utilizes API fetches and calls
                                 to show the items for sale as well as
                                 all the users items and messages
                                 Developed with the React Javascrip
                              </p>
                              <a
                                 className='  text-gray-600 hover:text-orange-500 font-ChakraPetch'
                                 href='https://github.com/ch-MCMLXXXV/Stranger_Things'
                              >
                                 Source Code...
                              </a>
                           </div>
                        </div>

                        <div className=' shadow-2xl  shadow-orange-700/50 w-full bg-white rounded-xl overflow-hidden cursor-pointer'>
                           <Image
                              src={Arcade}
                              alt='Arcade Project'
                              height={400}
                              unoptimized={true}
                              className=' object-cover w-full h-48'
                           />

                           <div className='relative p-4'>
                              <h3 className='text-base md:text-xl font-medium text-gray-800 font-ChakraPetch'>
                                 Tic Tac Toe
                              </h3>

                              <p className='mt-4 text-sm md:text-md text-gray-600 pb-3 font-ChakraPetch'>
                                 A simple tic tac toe game built using
                                 React and Javascript
                              </p>
                              <a
                                 className='  text-gray-600 hover:text-orange-500'
                                 href='https://github.com/ch-MCMLXXXV/Arcade'
                              >
                                 Source Code...
                              </a>
                           </div>
                        </div>
                        <div className=' shadow-2xl  shadow-orange-700/50 w-full bg-white rounded-xl overflow-hidden cursor-pointer'>
                           <Image
                              src={coming}
                              alt='Coming Soon'
                              height={400}
                              className=' object-cover w-full h-48'
                           />

                           <div className='relative p-4'>
                              <h3 className='text-base md:text-xl font-medium text-gray-800 font-ChakraPetch'>
                                 Coming Soon...
                              </h3>

                              <p className='mt-4 text-sm md:text-md text-gray-600 pb-3 font-ChakraPetch'>
                                 Working on a new project. Stay Tuned!
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className='py-20'>
               <div>
                  <h2 className=' text-3xl underline  font-medium font-ChakraPetch pb-10'>
                     Blog Posts
                  </h2>
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full pb-10 '>
                     {posts.map((post) => (
                        <BlogPost key={post.id} post={post} />
                     ))}
                  </div>
               </div>
            </section>
         </main>
      </div>
   );
}
