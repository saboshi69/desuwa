import type { NextPage } from "next";
import Head from "next/head";
import MainBackground from "components/MainBackground";
import ClickContainer from "containers/ClickContainer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DESUWA</title>
        <meta
          name="title"
          content="DESUWA BUTTON - 皆様方に１００満点の笑顔をお届けしたいですわ～～！"
        />
        <meta name="description" content="JUST SPAM IT" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
      </Head>
      <div>
        <MainBackground />
        <ClickContainer />
      </div>
    </>
  );
};

export default Home;
