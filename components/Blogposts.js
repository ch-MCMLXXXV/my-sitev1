import Image from 'next/image';

const BlogPost = ({ post }) => {
   return (
      <div className=' '>
         <div className=' rounded-lg shadow-2xl shadow-orange-600/50 p-3 m-auto '>
            <h2 className=' text-2xl pb-3 '>{post.title}</h2>
            <p className='text-sm '>{post.description}</p>
            <h4>{post.readable_publish_date}</h4>
            <a href={post.url}>Full post...</a>
         </div>
         <div></div>
      </div>
   );
};

export default BlogPost;
