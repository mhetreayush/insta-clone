import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 customContainer">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

      <section className="hidden xl:inline-grid md:col-span-1 ">
        {/* Mini Profile */}
        <div className="fixed top-20">
          <MiniProfile />
          {/* Suggestions */}
          <Suggestions />
        </div>
      </section>
    </main>
  );
};

export default Feed;
