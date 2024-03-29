import { formatterDateDistance } from '@/utils/datefns';
import { generateFakePost, generateFakeUser } from '@/utils/faker'
import Image from 'next/image';
import { useEffect, useState } from 'react';

type PostProps = {
  children: React.ReactNode;
  addComment: (message: string) => void;
}

type FakeUser = {
  username: string;
  avatar: string;
}

type FakePost = {
  content: string;
  date: Date;
}

export function Post({ children, addComment }: PostProps) {
  const [user, setUser] = useState<FakeUser>({
    avatar: '',
    username: '',
  });
  const [post, setPost] = useState<FakePost>({
    content: '',
    date: new Date(),
  });

  const [message, setMessage] = useState('')

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setUser(generateFakeUser())
    setPost(generateFakePost())
    setLoading(false)
  }, [])

  function handleSubmitPost(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addComment(message)
    setMessage('')
  }

  if (loading) {
    return <PostSkeleton />
  }

  return (
    <section className='bg-[#202024] rounded-lg p-10 max-w-[832px]' >
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
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
        <p>{formatterDateDistance(post.date)}</p>
      </div>

      <p className='max-w-[752px] text-[#C4C4CC] text-base mt-7'>
        {post.content}
      </p>

      <div className='border mt-7 mb-6 border-[#323238]'></div>

      <form onSubmit={handleSubmitPost} className='flex flex-col'>
        <label htmlFor="comment">Deixe seu feedback</label>
        <textarea name="comment" id="comment" className='
        mt-4 min-h-24 rounded-lg border-[#00B37E] border
        bg-[#121214] text-[#C4C4CC] text-base font-normal pr-4 py-2 pl-4'
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        <button type='submit' className='self-start bg-[#00875F] pr-6 pl-6 pt-4 pb-[12px] mt-4 rounded-lg font-bold text-base'>Publicar</button>
      </form>

      <div className='flex flex-col gap-y-6 mt-8 max-h-96 overflow-auto'>
        {children}
      </div>
    </section>
  );
}

function PostSkeleton() {
  const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';
  return (<section className={`${shimmer} relative overflow-hidden rounded-lg p-10 min-w-[832px] bg-[#202024] shadow-sm`}>
    <div className='flex items-center'>
      <div className='mr-4 border-2 border-[#00B37E] p-[6px] rounded-lg'>
        <div className='w-10 h-10 bg-gray-300 rounded-md'></div>
      </div>
      <div>
        <div className='w-20 h-4 bg-gray-300 rounded-md'></div>
        <div className='w-10 h-3 bg-gray-300 rounded-md mt-2'></div>
      </div>
    </div>
    <div className='w-full h-4 bg-gray-300 rounded-md mt-7'></div>
    <div className='w-full h-4 bg-gray-300 rounded-md mt-4'></div>
    <div className='w-full h-4 bg-gray-300 rounded-md mt-4'></div>
    <div className='w-full h-4 bg-gray-300 rounded-md mt-4'></div>
    <div className='w-full h-4 bg-gray-300 rounded-md mt-4'></div>
  </section>)
}