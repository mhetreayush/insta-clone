import { faker } from "@faker-js/faker";

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-center mt-14 ml-10">
      <img
        src={faker.internet.avatar()}
        alt={faker.internet.userName()}
        className="rounded-full p-[2px] border w-14 h-14"
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">{faker.internet.userName()}</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>

      <button className="text-blue-400 font-semibold text-sm">Sign Out</button>
    </div>
  );
};

export default MiniProfile;
