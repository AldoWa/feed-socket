import Image from "next/image";

type CommentProps = {
  avatar: string;
  username: string;
  date: string;
  message: string;

}
export const Comment = ({ avatar, date ,message, username }: CommentProps) => {
  return (
    <div className="flex items-center">
      <Image src={avatar} alt="Avatar user" className="self-start rounded-lg" height={50} width={50}/>
      <div className="ml-4 bg-[#29292E] rounded-lg p-4 w-full">
        <h3 className="text-sm font-bold text-[#E1E1E]">{ username }</h3>
        <span className="text-xs text-[#8D8D99] mb-4 block mt-1">{date}</span>
        <p className="text-[#C4C4CC] text-sm font-normal">{message}</p>
      </div>
    </div>
  )
}