import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <form
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <input type="text" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" />
    </form>
  );
}
