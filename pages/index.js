import Banner from "../Components/Home/Banner/Banner";
import LatestPost from "../Components/Home/LatestPost/LatestPost";
import MostPopular from "../Components/Home/MostPopular/MostPopular";
import Layout from "../Layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner></Banner>
        <LatestPost />
        <MostPopular />
      </Layout>
    </>
  );
}
