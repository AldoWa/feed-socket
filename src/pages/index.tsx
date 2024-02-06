import { Comment } from "@/components/Comment";
import { Post } from "@/components/Post";
import { formatterDateDistance } from "@/utils/datefns";
import { generateFakesComments } from "@/utils/faker";
import { faker } from "@faker-js/faker";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export type Comment = {
  avatar: string;
  username: string;
  date: Date;
  message: string;
  id: string;
}

export default function Home() {
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    const comments = generateFakesComments(1)
    setComments(comments)
  }, [])

  function addComment(message: string) {
    const newComment: Comment = {
      avatar: faker.image.avatar(),
      date: new Date(),
      id: faker.string.uuid(),
      message,
      username: faker.internet.userName()
    }

    setComments((comments) => [newComment, ...comments])
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-[#121214] ${inter.className}`}
    >
      <Post addComment={addComment}>
        {comments.map((comment) => (
          <Comment 
            avatar={comment.avatar}
            date={formatterDateDistance(comment.date)}
            message={comment.message}
            username={comment.username}
            key={comment.id}
          />
        ))}
      </Post>
    </main>
  );
}
