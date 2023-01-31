import { faker } from "@faker-js/faker";
import Post from "./Post";
const Posts = () => {
  const posts = [
    {
      id: "123",
      username: faker.internet.userName(),
      userImg: faker.image.avatar(),
      img: faker.image.avatar(),
      caption: faker.lorem.lines(),
    },
    {
      id: "12",
      username: faker.internet.userName(),
      userImg: faker.image.avatar(),
      img: faker.image.avatar(),
      caption: faker.lorem.lines(),
    },
    {
      id: "23",
      username: faker.internet.userName(),
      userImg: faker.image.avatar(),
      img: faker.image.avatar(),
      caption: faker.lorem.lines(),
    },
    {
      id: "13",
      username: faker.internet.userName(),
      userImg: faker.image.avatar(),
      img: faker.image.avatar(),
      caption: faker.lorem.lines(),
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
