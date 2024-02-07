import { NextApiResponseWithSocket } from "@/types/socket"
import { NextApiRequest } from "next"
import { Server } from "socket.io"


export default function handler(
  _: NextApiRequest,
  res: NextApiResponseWithSocket,
) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server)
    res.socket.server.io = io
    io.on('connection', (socket) => {
      console.log(`socket.id: ${socket.id} connected`)

      socket.on('new_comment', (comment) => {
        io.emit('new_comment', comment)
      })
    })
  }
  res.end()
}
