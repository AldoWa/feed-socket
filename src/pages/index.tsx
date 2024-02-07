import { Comment } from "@/components/Comment";
import { Post } from "@/components/Post";
import { Comment as CommentType } from "@/types/comment";
import { ClientEvents, ServerEvents } from "@/types/socket";
import { formatterDateDistance } from "@/utils/datefns";
import { faker } from "@faker-js/faker";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Socket } from "socket.io";
import { io } from "socket.io-client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [comments, setComments] = useState<CommentType[]>([])
  const [socket, setSocket] = useState<Socket<ServerEvents, ClientEvents> | null>(null)
  useEffect(() => {
    startConnect()
    return () => {
      if(socket) {
        socket.disconnect()
      }
    }
  }, [])

  async function startConnect(){
    await fetch('/api/socket')
    // @ts-ignore
    const socket: Socket<ServerEvents, ClientEvents> = io();
    setSocket(socket)
    socket.on('new_comment', (comment: CommentType) => {
      setComments((comments) => [comment, ...comments])
    })
  }

  function addComment(message: string) {
    const newComment: CommentType = {
      avatar: faker.image.avatar(),
      date: new Date(),
      id: faker.string.uuid(),
      message,
      username: faker.internet.userName()
    }
    if(socket) socket.emit('new_comment', newComment)
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
