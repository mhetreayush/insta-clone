import { faker } from "@faker-js/faker";
import Story from "./Story";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, idx) => ({
      id: idx,
      avatar: faker.internet.avatar(),
      username: faker.internet.userName(),
      // address: faker.address.cityName(),
      // company: faker.company.name(),
      // dob: faker.date.birthdate(),
      // email: faker.internet.email(),
      // name: faker.name.firstName() + faker.name.lastName(),
      // phone: faker.phone.number(),
      // website: faker.internet.domainName(),
    }));
    console.log(suggestions);
    setSuggestions(suggestions);
  }, []);

  const { data: session } = useSession();
  return (
    <div className="flex overflow-x-auto gap-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story image={session.user.image} username={session.user.username} />
      )}

      {suggestions.map((profile) => {
        return (
          <Story
            key={profile.id}
            image={profile.avatar}
            username={profile.username}
          />
        );
      })}
    </div>
  );
};

export default Stories;
