import Image from 'next/image';

const BlogPost = ({ post }) => {
   return (
      <div className=' '>
         <div className=' rounded-lg shadow-2xl shadow-orange-700/50 p-3 m-auto bg-white'>
            <div>
               <h2 className=' text-2xl pb-3 text-gray-800 font-ChakraPetch'>
                  {post.title}
               </h2>
               <p className=' text-lg   text-gray-600 font-ChakraPetch'>
                  {post.description}
               </p>
               <h4 className=' text-gray-600 pb-3 font-ChakraPetch'>
                  {post.readable_publish_date}
               </h4>
               <a
                  className='  text-gray-600 hover:text-orange-500 font-ChakraPetch'
                  href={post.url}
               >
                  Full post...
               </a>
            </div>
         </div>
      </div>
   );
};

export default BlogPost;
