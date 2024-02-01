import PropTypes from "prop-types";

function BannerHeading({ title }) {
  console.log("BannerHeading render");

  return (
    <div className="bg-black px-4 py-40 text-center text-white">
      <h2 className="mb-5 text-5xl font-bold leading-snug lg:text-7xl lg:leading-snug">
        {title}
      </h2>
    </div>
  );
}

BannerHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BannerHeading;
