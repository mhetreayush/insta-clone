import Stories from "./Stories";
import Posts from "./Posts";
const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 customContainer">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

      <section>
        {/* Mini Profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
};

export default Feed;
