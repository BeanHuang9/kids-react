const ProductImage = ({ src, alt }) => {
  return (
    <div className="sf-u-imgAdjustBox" data-aspect-ratio="1:1">
      <picture className="sf-u-imgAdjustBox_inner">
        <img
          className="sf-u-img js-sf-simpleBff_productsItemImage lazyloaded"
          src={src}
          alt={alt}
          data-src={src}
          data-expand="300"
        />
      </picture>
    </div>
  );
};

export default ProductImage;
