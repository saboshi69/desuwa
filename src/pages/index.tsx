import type { NextPage } from "next";
import MainBackground from "components/MainBackground";
import ClickContainer from "containers/ClickContainer";

const Home: NextPage = () => {
  return (
    <div>
      <MainBackground />
      <ClickContainer />
    </div>
  );
};

export default Home;
