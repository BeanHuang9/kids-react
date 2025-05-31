const ColorChipButton = ({ color, name, isSelected, onClick }) => {
  const { imageUrl, jan, alt, title } = color;

  return (
    <button
      className="sf-simpleBff_productsItemColorChip js-sf-simpleBff_productsItemColorChip"
      type="button"
      data-name={name}
      data-is-current={isSelected}
      data-image-url={imageUrl}
      data-jan={jan}
      aria-selected={isSelected}
      onClick={onClick}
    >
      <div className="sf-u-imgAdjustBox" data-aspect-ratio="1:1">
        <picture className="sf-u-imgAdjustBox_inner">
          <img
            className="sf-u-img lazyloaded"
            src={imageUrl}
            alt={alt}
            title={title}
            data-src={imageUrl}
            data-expand="300"
          />
        </picture>
      </div>
    </button>
  );
};

export default ColorChipButton;
