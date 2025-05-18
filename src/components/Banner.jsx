const Banner = ({ desktopImg, mobileImg, altText }) => {
  return (
    <h1
      className="hero sf-u-imgAdjustBox"
      data-mobile-aspect-ratio="3:4"
      data-tablet-aspect-ratio="3:4"
      data-desktop-aspect-ratio="169:80"
    >
      <picture className="sf-u-imgAdjustBox_inner">
        <source srcSet={desktopImg} media="(min-width: 1000px)" type="image/jpeg" />
        <source srcSet={mobileImg} type="image/jpeg" />
        <img className="sf-u-img" src={mobileImg} alt={altText} />
      </picture>
    </h1>
  );
};

export default Banner;
