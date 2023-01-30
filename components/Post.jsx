import { BsBookmark, BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { HiOutlinePaperAirplane } from "react-icons/hi";
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
          <AiOutlineHeart className="" />
          <BsChat className="-scale-x-100 " />
          <HiOutlinePaperAirplane />
        </div>
        <BsBookmark />
      </div>
      {/* Captions */}

      {/* Comments */}

      {/* Input Box */}
    </div>
  );
};

export default Post;
