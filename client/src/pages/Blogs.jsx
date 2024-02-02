import BannerHeading from "../components/BannerHeading";
import BlogPage from "../components/BlogPage";

function Blogs() {
  console.log("Blogs render");

  return (
    <div>
      <BannerHeading title="Blogs Page" />

      {/* All Blogs Container */}
      <div className="mx-auto max-w-7xl">
        <BlogPage />
      </div>
    </div>
  );
}

export default Blogs;
