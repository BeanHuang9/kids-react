import { useState } from "react";
import ProductImage from "./ProductImage";
import ColorChips from "./ColorChips";

const ProductItem = ({ product }) => {
  const { name, price, colors } = product;

  const currentColor = colors.find((color) => color.isCurrent) || colors[0];
  const [selectedJan, setSelectedJan] = useState(currentColor.jan);

  const mainImageUrl = `https://www.muji.com/public/media/img/item/${selectedJan}_org.jpg`;

  return (
    <div
      className={`sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-${selectedJan}`}
    >
      <div className="sf-simpleBff_productsItemHead">
        <a
          href={`https://api.91app.com/es/Redirect/41566/${selectedJan}`}
          className="js-sf-simpleBff_productsItemImageLink"
          aria-label={`${name} 商品頁`}
        >
          <ProductImage src={mainImageUrl} alt={name} />
        </a>
      </div>

      <div className="sf-simpleBff_productsItemBody">
        <ColorChips
          colors={colors}
          name={name}
          selectedJan={selectedJan}
          onSelectJan={setSelectedJan}
        />
        <h4 className="sf-simpleBff_productsItemHeading">
          <a
            href={`https://api.91app.com/es/Redirect/41566/${selectedJan}`}
            className="sf-product-titleLink"
          >
            {name}
          </a>
        </h4>
        <div className="sf-simpleBff_productsItemDetail">
          <p className="sf-simpleBff_productsItemPrice">
            售價
            <span className="sf-simpleBff_productsItemPriceBlock">
              <span className="sf-simpleBff_productsItemPriceNum">{price}</span>
              元
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
