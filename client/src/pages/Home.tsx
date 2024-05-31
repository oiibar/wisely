import { FC } from "react";
import { SiNintendogamecube } from "react-icons/si";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <div className="flex flex-col gap-3 mt-10 items-center justify-center text-center">
      <SiNintendogamecube size={200} />
      <p className="text-2xl">
        It's a user-friendly budget tracker web app
      </p>
      <Link to={"transactions"} className="py-2 text-white/50 hover:text-white">
        <button className="btn btn-green text-md">Get Started</button>
      </Link>
    </div>
  );
};

export default Home;
