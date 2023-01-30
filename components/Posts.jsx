import { faker } from "@faker-js/faker";
import Post from "./Post";
const Posts = () => {
  const posts = [
    {
      id: "123",
      username: "mhetre__ayush",
      userImg: faker.image.avatar(),
      img: faker.image.avatar(),
      caption: "Hey",
    },
    {
      id: "12",
      username: "mhetre__ayush",
      userImg: faker.image.avatar(),
      img: faker.image.avatar(),
      caption: "Hey",
    },
    {
      id: "23",
      username: "mhetre__ayush",
      userImg: faker.image.avatar(),
      img: faker.image.avatar(),
      caption: "Hey",
    },
    {
      id: "13",
      username: "mhetre__ayush",
      userImg: faker.image.avatar(),
      img: faker.image.avatar(),
      caption: "Hey",
    },
  ];
  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
          />
        );
      })}
    </div>
  );
};

export default Posts;
