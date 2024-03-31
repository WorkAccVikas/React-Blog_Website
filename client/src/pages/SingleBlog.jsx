import { useLoaderData } from "react-router-dom";

function SingleBlog() {
  console.log("SingleBlog render");

  const data = useLoaderData();
  console.log(`🚀 ~ SingleBlog ~ data:`, data);

  return <div>SingleBlog</div>;
}

export default SingleBlog;
