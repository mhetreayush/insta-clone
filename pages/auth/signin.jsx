import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";
//Browser
const SignIn = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center gap-y-10 text-center h-screen">
        <div>
          <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
          <p className="text-xs italic">
            This is not a REAL app, it was built as a personal project
          </p>
        </div>
        <div>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

//Server
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default SignIn;
