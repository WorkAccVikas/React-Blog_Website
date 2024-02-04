import Banner from "../components/Banner";
import BlogPage from "../components/BlogPage";

function Home() {
  console.log("Home render");

  return (
    <div>
      <Banner />

      <div className="mx-auto max-w-7xl">
        <BlogPage />
      </div>
    </div>
  );
}

export default Home;
