import { faker } from "@faker-js/faker";
import Post from "./Post";
import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

// export async function getServerSideProps() {
//   onSnapshot(
//     query(collection(db, "posts"), orderBy("timestamp", "desc")),
//     (snapshot) => {
//       console.log(snapshot);
//       return {
//         props: {
//           posts: snapshot.docs,
//         },
//       };
//     }
//   );
// }

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),

    [db]
  );
  return (
    <div>
      {posts?.map((post) => {
        return (
          post.data().image && (
            <Post
              key={post.id}
              id={post.id}
              username={post.data().username}
              userImg={post.data().profileImg}
              img={post.data().image}
              type={post.data().type}
              caption={post.data().caption}
            />
          )
        );
      })}
    </div>
  );
};

export default Posts;
