import { NextApiResponse } from "next";
import type { Server as HTTPServer } from 'http'
import type { Socket as NetSocket } from 'net'
import type { Server as IOServer } from 'socket.io'
import { Comment } from "./comment";

interface SocketServer extends HTTPServer {
  io?: IOServer 
}

interface SocketWithIO extends NetSocket {
  server: SocketServer
}

export interface NextApiResponseWithSocket extends NextApiResponse {
  socket: SocketWithIO
}

export interface ServerEvents {
  new_comment: (comment: Comment) => void
}

export interface ClientEvents {
  new_comment: (comment: Comment) => void
}