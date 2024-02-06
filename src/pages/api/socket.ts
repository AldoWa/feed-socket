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
  }
  res.end()
}
