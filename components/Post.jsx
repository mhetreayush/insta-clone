import { BsBookmark, BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
const Post = ({ id, userImg, img, username, caption }) => {
  return (
    <div className="my-7">
      {/* Header */}

      <div className="flex items-center">
        <img
          src={userImg}
          alt={username}
          className="h-10 object-contain rounded-full p-[1.5px] border border-gray-300"
        />
        <p className="flex-1 ml-2 font-semibold">{username}</p>
        <BsThreeDots />
      </div>

      {/* img */}
      <div className="my-2 border rounded-sm flex justify-center">
        <img
          src={img}
          className="object-cover w-full max-h-[400px] max-w-[400px]"
          alt={caption}
        />
      </div>
      {/* Buttons */}
      <div className="flex items center justify-between">
        <div className="flex items-center justify-between gap-x-3">
          <AiOutlineHeart className="svgButton" />
          <BsChat className="-scale-x-100 svgButton" />
          <HiOutlinePaperAirplane className="svgButton" />
        </div>
        <BsBookmark className="svgButton" />
      </div>
      {/* Captions */}
      <p className="truncate my-2">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>

      {/* Comments */}

      {/* Input Box */}
      <form action="" className="flex items-center">
        <HiOutlineEmojiHappy className="svgButton" />
        <input
          type="text"
          className="border-none flex-1 bg-transparent  focus:ring-0 outline-none mx-2"
          placeholder="Add a comment..."
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
};

export default Post;
