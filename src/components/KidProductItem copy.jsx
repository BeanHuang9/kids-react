const KidProductItem = ({ title, type = "typeA", reverse = false }) => {
  const itemClass = `products__item sf-u-mt_xxlExt sf-u-pt_xl-mobile sf-u-pt_xl-tablet sf-u-pt_xxxl-desktop ${type} ${
    reverse ? "--reverse" : ""
  }`;

  return (
    <div className={itemClass}>
      <div className="products__inner">
        <h2 className="sf-heading -h2 products__heading sf-u-font_gothicMB-b sf-u-font_size-xl-mobile sf-u-font_size-xl-tablet sf-u-font_size-xxxxl-desktop sf-u-font_center-mobile sf-u-font_center-tablet sf-u-font_lineHeight150-desktop">
          {title}
        </h2>


        <section>
            <div className="products__mainImg sf-u-mt_m-mobile sf-u-mt_m-tablet">
                <figure
                className="sf-u-imgAdjustBox"
                data-mobile-aspect-ratio="75:92"
                data-tablet-aspect-ratio="75:92"
                data-desktop-aspect-ratio="202:159"
                >
                <picture className="sf-u-imgAdjustBox_inner">
                    <source
                    data-srcset="assets/img/kids/look01-01-desktop.jpg"
                    media="(min-width: 1000px)"
                    type="image/jpeg"
                    />
                    <img
                    className="sf-u-img lazyload"
                    src="assets/img/kids/look01-01.jpg"
                    data-src="assets/img/kids/look01-01.jpg"
                    alt="二重織休閒圓領衫"
                    data-expand="300"
                    />
                </picture>
                </figure>
            </div>
            <p className="products__caption sf-u-mt_xxxsExt sf-u-contents_mobile sf-u-contents_tablet sf-u-font_size-xxxs-mobile sf-u-font_size-xxxs-tablet sf-u-font_size-xxs-desktop">
                模特兒身高 由左至右：123cm/穿著尺寸為120 116cm/穿著尺寸為120
                <br />
                ※無標明於此的商品為參考用商品
            </p>
            <div className="products__moreImgs">
                <div className="products__moreImg sf-u-mt_m-mobile sf-u-mt_m-tablet">
                <figure
                    className="sf-u-imgAdjustBox"
                    data-mobile-aspect-ratio="315:314"
                    data-tablet-aspect-ratio="315:314"
                    data-desktop-aspect-ratio="1:1"
                >
                    <picture className="sf-u-imgAdjustBox_inner">
                    <source
                        data-srcset="assets/img/kids/look01-02-desktop.jpg"
                        media="(min-width: 1000px)"
                        type="image/jpeg"
                    />
                    <img
                        className="sf-u-img lazyload"
                        src="assets/img/kids/look01-02.jpg"
                        data-src="assets/img/kids/look01-02.jpg"
                        alt="二重織休閒圓領衫"
                        data-expand="300"
                    />
                    </picture>
                </figure>
                </div>
            </div>
            <div className="products__pickItem sf-u-mt_m-mobile sf-u-mt_m-tablet sf-u-contents_mobile sf-u-contents_tablet -center">
                <div
                className="sf-simpleBff -loading-complete"
                data-desktop-column="5"
                data-mobile-column="2"
                data-product-type="default"
                data-button-visible="false"
                data-button-nostock-display="true"
                data-colorchip="true"
                data-show-comingsoon-badge="true"
                >
                <div className="sf-simpleBff_products" role="list">
                    <a
                    className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584160295"
                    href="https://api.91app.com/es/Redirect/41566/4550584160295"
                    data-current-chip="4550584160295"
                    >
                    <div className="sf-simpleBff_productsItemHead">
                        <div className="sf-u-imgAdjustBox" data-aspect-ratio="1:1">
                        <picture className="sf-u-imgAdjustBox_inner">
                            <img
                            className="sf-u-img js-sf-simpleBff_productsItemImage lazyloaded"
                            src="https://www.muji.com/public/media/img/item/4550584160295_org.jpg"
                            alt="兒童二重織裏毛圓領衫"
                            data-src="https://www.muji.com/public/media/img/item/4550584160295_org.jpg"
                            data-expand="300"
                            />
                        </picture>
                        </div>
                    </div>
                    <div className="sf-simpleBff_productsItemBody">
                        <ul
                        className="sf-simpleBff_productsItemColorChips js-sf-simpleBff_productsItemColorChips"
                        aria-label="色展開"
                        >
                        <li>
                            <button
                            className="sf-simpleBff_productsItemColorChip js-sf-simpleBff_productsItemColorChip"
                            type="button"
                            data-name="兒童二重織裏毛圓領衫"
                            data-is-current="true"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584160295_org.jpg"
                            data-jan="4550584160295"
                            data-price="490"
                            data-pricekindlist=""
                            data-new="false"
                            data-stock="FEWNESS"
                            data-order=""
                            data-salesstatus="NORMAL"
                            data-show-comingsoon-badge="true"
                            aria-selected="true"
                            >
                            <div
                                className="sf-u-imgAdjustBox"
                                data-aspect-ratio="1:1"
                            >
                                <picture className="sf-u-imgAdjustBox_inner">
                                <img
                                    className="sf-u-img lazyloaded"
                                    src="https://www.muji.com/public/media/img/item/4550584160295_99_95.jpg"
                                    alt="灰色"
                                    title="灰色"
                                    data-src="https://www.muji.com/public/media/img/item/4550584160295_99_95.jpg"
                                    data-expand="300"
                                />
                                </picture>
                            </div>
                            </button>
                        </li>

                        <li>
                            <button
                            className="sf-simpleBff_productsItemColorChip js-sf-simpleBff_productsItemColorChip"
                            type="button"
                            data-name="兒童二重織裏毛圓領衫"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584160349_org.jpg"
                            data-jan="4550584160349"
                            data-price="490"
                            data-pricekindlist=""
                            data-new="false"
                            data-stock="STOCK"
                            data-order=""
                            data-salesstatus="NORMAL"
                            data-show-comingsoon-badge="true"
                            aria-selected="false"
                            >
                            <div
                                className="sf-u-imgAdjustBox"
                                data-aspect-ratio="1:1"
                            >
                                <picture className="sf-u-imgAdjustBox_inner">
                                <img
                                    className="sf-u-img lazyloaded"
                                    src="https://www.muji.com/public/media/img/item/4550584160349_99_95.jpg"
                                    alt="黑色"
                                    title="黑色"
                                    data-src="https://www.muji.com/public/media/img/item/4550584160349_99_95.jpg"
                                    data-expand="300"
                                />
                                </picture>
                            </div>
                            </button>
                        </li>

                        <li>
                            <button
                            className="sf-simpleBff_productsItemColorChip js-sf-simpleBff_productsItemColorChip"
                            type="button"
                            data-name="兒童二重織裏毛圓領衫"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584160394_org.jpg"
                            data-jan="4550584160394"
                            data-price="490"
                            data-pricekindlist=""
                            data-new="false"
                            data-stock="STOCK"
                            data-order=""
                            data-salesstatus="NORMAL"
                            data-show-comingsoon-badge="true"
                            aria-selected="false"
                            >
                            <div
                                className="sf-u-imgAdjustBox"
                                data-aspect-ratio="1:1"
                            >
                                <picture className="sf-u-imgAdjustBox_inner">
                                <img
                                    className="sf-u-img lazyloaded"
                                    src="https://www.muji.com/public/media/img/item/4550584160394_99_95.jpg"
                                    alt="煙燻綠"
                                    title="煙燻綠"
                                    data-src="https://www.muji.com/public/media/img/item/4550584160394_99_95.jpg"
                                    data-expand="300"
                                />
                                </picture>
                            </div>
                            </button>
                        </li>

                        <li>
                            <button
                            className="sf-simpleBff_productsItemColorChip js-sf-simpleBff_productsItemColorChip"
                            type="button"
                            data-name="兒童二重織裏毛圓領衫"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584160448_org.jpg"
                            data-jan="4550584160448"
                            data-price="490"
                            data-pricekindlist=""
                            data-new="false"
                            data-stock="STOCK"
                            data-order=""
                            data-salesstatus="NORMAL"
                            data-show-comingsoon-badge="true"
                            aria-selected="false"
                            >
                            <div
                                className="sf-u-imgAdjustBox"
                                data-aspect-ratio="1:1"
                            >
                                <picture className="sf-u-imgAdjustBox_inner">
                                <img
                                    className="sf-u-img lazyloaded"
                                    src="https://www.muji.com/public/media/img/item/4550584160448_99_95.jpg"
                                    alt="淡藍"
                                    title="淡藍"
                                    data-src="https://www.muji.com/public/media/img/item/4550584160448_99_95.jpg"
                                    data-expand="300"
                                />
                                </picture>
                            </div>
                            </button>
                        </li>

                        <li>
                            <button
                            className="sf-simpleBff_productsItemColorChip js-sf-simpleBff_productsItemColorChip"
                            type="button"
                            data-name="兒童二重織裏毛圓領衫"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584160493_org.jpg"
                            data-jan="4550584160493"
                            data-price="490"
                            data-pricekindlist=""
                            data-new="false"
                            data-stock="STOCK"
                            data-order=""
                            data-salesstatus="NORMAL"
                            data-show-comingsoon-badge="true"
                            aria-selected="false"
                            >
                            <div
                                className="sf-u-imgAdjustBox"
                                data-aspect-ratio="1:1"
                            >
                                <picture className="sf-u-imgAdjustBox_inner">
                                <img
                                    className="sf-u-img lazyloaded"
                                    src="https://www.muji.com/public/media/img/item/4550584160493_99_95.jpg"
                                    alt="煙燻紫"
                                    title="煙燻紫"
                                    data-src="https://www.muji.com/public/media/img/item/4550584160493_99_95.jpg"
                                    data-expand="300"
                                />
                                </picture>
                            </div>
                            </button>
                        </li>
                        </ul>
                        <h4 className="sf-simpleBff_productsItemHeading">
                        兒童二重織裏毛圓領衫
                        </h4>
                        <div className="sf-simpleBff_productsItemDetail">
                        <p className="sf-simpleBff_productsItemPrice">
                            售價
                            <span className="sf-simpleBff_productsItemPriceBlock">
                            <span className="sf-simpleBff_productsItemPriceNum">
                                490
                            </span>
                            元
                            </span>
                        </p>
                        <div className="sf-simpleBff_productsItemStatus"></div>
                        <div className="sf-simpleBff_productsItemButton"></div>
                        </div>
                    </div>
                    </a>
                </div>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default KidProductItem;
