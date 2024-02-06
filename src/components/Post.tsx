import { generateFakePost, generateFakeUser } from '@/utils/faker'
import Image from 'next/image';
import { useEffect, useState } from 'react';

type FakeUser = {
  username: string;
  avatar: string;
}

type FakePost = {
  content: string;
  date: string;
}

export function Post() {
  const [user, setUser] = useState<FakeUser>({
    avatar: '',
    username: '',
  });
  const [post, setPost] = useState<FakePost>({
    content: '',
    date: '',
  });

  useEffect(() => {
    setUser(generateFakeUser())
    setPost(generateFakePost())
  }, [])

  return (
    <section className='bg-[#323238] rounded-lg p-10 max-w-[832px]' >
      <div className='flex items-center justify-between'>
        <div className='flex items-center '>
          <div className='mr-4 border-2 border-[#00B37E] p-[6px] rounded-lg'>
            <Image
              alt='User avatar'
              height={50}
              width={50}
              src={user.avatar}
              className='rounded-md'
            />
          </div>
          <div>
            <h2 className='text-base font-bold text-[#E1E1E6]'>{user.username}</h2>
            <p className='text-sm text-[#8D8D99] font-normal'>Dev</p>
          </div>
        </div>
        <p>{post.date}</p>
      </div>
      
      <p className='max-w-[752px] text-[#C4C4CC] text-base mt-7'>
        {post.content}
      </p>
    </section>
  );
}

