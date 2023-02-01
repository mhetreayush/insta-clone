import { BsBookmark, BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import Moment from "react-moment";
const Post = ({ id, userImg, img, username, caption }) => {
  const { data: session } = useSession();
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  );
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, id]
  );

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  };

  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = newComment;
    setNewComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };
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
      {session && (
        <div className="flex items center justify-between">
          <div className="flex items-center justify-between gap-x-3">
            {!hasLiked ? (
              <AiOutlineHeart onClick={likePost} className="svgButton" />
            ) : (
              <AiFillHeart
                color="red"
                onClick={likePost}
                className="svgButton"
              />
            )}
            <BsChat className="-scale-x-100 svgButton" />
            <HiOutlinePaperAirplane className="svgButton" />
          </div>
          <BsBookmark className="svgButton" />
        </div>
      )}

      {likes.length > 0 && (
        <p className="font-bold mt-2">
          {likes.length} Like{likes.length > 1 && "s"}
        </p>
      )}
      {/* Captions */}

      {caption.length > 0 && (
        <p className="truncate my-2">
          <span className="font-bold mr-1">{username} </span>
          {caption}
        </p>
      )}

      {/* Comments */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 py-2 my-2 overflow-y-auto scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => {
            return (
              <div key={comment.id} className="flex items-center gap-x-3 my-2">
                <img
                  src={comment.data().userImage}
                  className="rounded-full h-7 w-7"
                  alt=""
                />
                <p className="text-sm flex-1">
                  <span className="font-bold">{comment.data().username}</span>{" "}
                  {comment.data().comment}
                </p>

                <Moment fromNow className="pr-5 text-xs">
                  {comment.data().timestamp?.toDate()}
                </Moment>
              </div>
            );
          })}
        </div>
      )}

      {/* Input Box */}
      {session && (
        <form action="" className="flex items-center">
          <HiOutlineEmojiHappy className="svgButton" />
          <input
            type="text"
            className="border-none flex-1 bg-transparent  focus:ring-0 outline-none mx-2"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            type="submit"
            disabled={!newComment.trim()}
            onClick={sendComment}
            className="font-semibold text-blue-400 disabled:text-gray-300"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
