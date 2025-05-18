const KidProductItem = ({ title, type = "typeA", reverse = false }) => {
  const itemClass = `products__item sf-u-mt_xxlExt sf-u-pt_xl-mobile sf-u-pt_xl-tablet sf-u-pt_xxxl-desktop ${type} ${reverse ? "--reverse" : ""}`;

  return (
    <div className={itemClass}>
      <div className="products__inner">
        <h2 className="sf-heading -h2 products__heading sf-u-font_gothicMB-b sf-u-font_size-xl-mobile sf-u-font_size-xl-tablet sf-u-font_size-xxxxl-desktop sf-u-font_center-mobile sf-u-font_center-tablet sf-u-font_lineHeight150-desktop">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default KidProductItem;
