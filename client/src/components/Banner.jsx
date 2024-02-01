function Banner() {
  console.log("Banner render");

  return (
    // px-4 py-32
    <div className="mx-auto bg-black">
      <div className="text-center text-white">
        <h1 className="mb-5 text-5xl font-bold leading-snug lg:text-7xl">
          Welcome to Our Blog
        </h1>
        <p className="mx-auto mb-5 text-gray-100 lg:w-3/5">
          Start your blog today and join a community of writers and readers who
          are passionate about sharing their stories and ideas. We offer
          everything you need to get started, from helpful tips and tutorials.
        </p>
      </div>
    </div>
  );
}

export default Banner;
