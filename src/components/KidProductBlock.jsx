import { useEffect, useState } from "react";
import ProductList from "@/components/ProductList";

const KidProductBlock = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <section className="products sf-u-contents_desktop ">
        <div className="products__l_img products__item sf-u-mt_xxlExt sf-u-pt_xl-mobile sf-u-pt_xl-tablet sf-u-pt_xxxl-desktop typeB">
          <div className="products__inner">
            <h2 className="sf-heading -h2 products__heading sf-u-font_gothicMB-b sf-u-font_size-xl-mobile sf-u-font_size-xl-tablet sf-u-font_size-xxxxl-desktop sf-u-font_center-mobile sf-u-font_center-tablet sf-u-font_lineHeight150-desktop">
              二重織
              <br className="sf-u-only_desktop" />
              休閒圓領衫
            </h2>

            <div className="products__mainImg sf-u-mt_m-mobile sf-u-mt_m-tablet">
              <figure
                className="sf-u-imgAdjustBox"
                data-mobile-aspect-ratio="75:92"
                data-tablet-aspect-ratio="75:92"
                data-desktop-aspect-ratio="202:159"
              >
                <picture className="sf-u-imgAdjustBox_inner">
                  <source
                    data-srcset="/src/assets/img/kids/look01-01-desktop.jpg"
                    media="(min-width: 1000px)"
                    type="image/jpeg"
                  />
                  <img
                    className="sf-u-img lazyload"
                    src="/src/assets/img/kids/look01-01.jpg"
                    data-src="/src/assets/img/kids/look01-01.jpg"
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
                      data-srcset="/src/assets/img/kids/look01-02-desktop.jpg"
                      media="(min-width: 1000px)"
                      type="image/jpeg"
                    />
                    <img
                      className="sf-u-img lazyload"
                      src="/src/assets/img/kids/look01-02.jpg"
                      data-src="/src/assets/img/kids/look01-02.jpg"
                      alt="二重織休閒圓領衫"
                      data-expand="300"
                    />
                  </picture>
                </figure>
              </div>
            </div>
            <div className="products__pickItem sf-u-mt_m-mobile sf-u-mt_m-tablet sf-u-contents_mobile sf-u-contents_tablet -center">
              <section
                  className="sf-simpleBff -loading-complete"
                  data-desktop-column="5"
                  data-mobile-column="2"
                  data-product-type="default"
                  data-button-visible="false"
                  data-button-nostock-display="true"
                  data-colorchip="true"
                  data-show-comingsoon-badge="true"
                >
                  {data.products1 && <ProductList products={data.products1} />}
                </section>
            </div>
          </div>

          <div className="products__wearing sf-u-mt_xl sf-u-contents_mobile sf-u-contents_tablet">
            <h3 className="sf-heading -h3 products__subTitle sf-u-mb_xxxs-mobile sf-u-mb_xxxs-tablet sf-u-mb_xxs-desktop sf-u-font_center sf-u-font_size-m sf-u-font_gothicMB-m">
              其他穿著商品
            </h3>



            <section
                  className="sf-simpleBff -loading-complete"
                  data-desktop-column="5"
              data-mobile-column="2"
              data-product-type="default"
              data-button-visible="false"
              data-button-nostock-display="true"
              data-colorchip="true"
              data-show-comingsoon-badge="true"
                >
                  {data.products2 && <ProductList products={data.products2} />}
                </section>



          </div>
        </div>

        <div className="products__l_img products__item sf-u-mt_xxlExt sf-u-pt_xl-mobile sf-u-pt_xl-tablet sf-u-pt_xxxl-desktop typeB">
          <div className="products__inner">
            <h2 className="sf-heading -h2 products__heading sf-u-font_gothicMB-b sf-u-font_size-xl-mobile sf-u-font_size-xl-tablet sf-u-font_size-xxxxl-desktop sf-u-font_center-mobile sf-u-font_center-tablet sf-u-font_lineHeight150-desktop">
              圓領
              <br className="sf-u-only_desktop" />
              長袖T恤
            </h2>

            <div className="products__mainImg sf-u-mt_m-mobile sf-u-mt_m-tablet">
              <figure
                className="sf-u-imgAdjustBox"
                data-mobile-aspect-ratio="75:92"
                data-tablet-aspect-ratio="75:92"
                data-desktop-aspect-ratio="202:159"
              >
                <picture className="sf-u-imgAdjustBox_inner">
                  <source
                    data-srcset="/src/assets/img/kids/look02-01-desktop.jpg"
                    media="(min-width: 1000px)"
                    type="image/jpeg"
                  />
                  <img
                    className="sf-u-img lazyload"
                    src="/src/assets/img/kids/look02-01.jpg"
                    data-src="/src/assets/img/kids/look02-01.jpg"
                    alt="圓領長袖T恤"
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
                      data-srcset="/src/assets/img/kids/look02-02-desktop.jpg"
                      media="(min-width: 1000px)"
                      type="image/jpeg"
                    />
                    <img
                      className="sf-u-img lazyload"
                      src="/src/assets/img/kids/look02-02.jpg"
                      data-src="/src/assets/img/kids/look02-02.jpg"
                      alt="圓領長袖T恤"
                      data-expand="300"
                    />
                  </picture>
                </figure>
              </div>
            </div>
            <div className="products__pickItem sf-u-mt_m-mobile sf-u-mt_m-tablet sf-u-contents_mobile sf-u-contents_tablet">
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
                    className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584160998"
                    href="https://api.91app.com/es/Redirect/41566/4550584160998"
                    data-current-chip="4550584160998"
                  >
                    <div className="sf-simpleBff_productsItemHead">
                      <div
                        className="sf-u-imgAdjustBox"
                        data-aspect-ratio="1:1"
                      >
                        <picture className="sf-u-imgAdjustBox_inner">
                          <img
                            className="sf-u-img js-sf-simpleBff_productsItemImage lazyloaded"
                            src="https://www.muji.com/public/media/img/item/4550584160998_org.jpg"
                            alt="兒童圓領長袖T恤 素色"
                            data-src="https://www.muji.com/public/media/img/item/4550584160998_org.jpg"
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
                            data-name="兒童圓領長袖T恤 素色"
                            data-is-current="true"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584160998_org.jpg"
                            data-jan="4550584160998"
                            data-price="790"
                            data-pricekindlist=""
                            data-new="false"
                            data-stock="STOCK"
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
                                  src="https://www.muji.com/public/media/img/item/4550584160998_99_95.jpg"
                                  alt="柔白"
                                  title="柔白"
                                  data-src="https://www.muji.com/public/media/img/item/4550584160998_99_95.jpg"
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
                            data-name="兒童圓領長袖T恤 素色"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584161049_org.jpg"
                            data-jan="4550584161049"
                            data-price="790"
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
                                  src="https://www.muji.com/public/media/img/item/4550584161049_99_95.jpg"
                                  alt="墨灰"
                                  title="墨灰"
                                  data-src="https://www.muji.com/public/media/img/item/4550584161049_99_95.jpg"
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
                            data-name="兒童圓領長袖T恤 素色"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584161094_org.jpg"
                            data-jan="4550584161094"
                            data-price="790"
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
                                  src="https://www.muji.com/public/media/img/item/4550584161094_99_95.jpg"
                                  alt="黑色"
                                  title="黑色"
                                  data-src="https://www.muji.com/public/media/img/item/4550584161094_99_95.jpg"
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
                            data-name="兒童圓領長袖T恤 素色"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584161148_org.jpg"
                            data-jan="4550584161148"
                            data-price="790"
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
                                  src="https://www.muji.com/public/media/img/item/4550584161148_99_95.jpg"
                                  alt="煙燻綠"
                                  title="煙燻綠"
                                  data-src="https://www.muji.com/public/media/img/item/4550584161148_99_95.jpg"
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
                            data-name="兒童圓領長袖T恤 素色"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584161193_org.jpg"
                            data-jan="4550584161193"
                            data-price="790"
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
                                  src="https://www.muji.com/public/media/img/item/4550584161193_99_95.jpg"
                                  alt="淡藍"
                                  title="淡藍"
                                  data-src="https://www.muji.com/public/media/img/item/4550584161193_99_95.jpg"
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
                            data-name="兒童圓領長袖T恤 素色"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584161247_org.jpg"
                            data-jan="4550584161247"
                            data-price="790"
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
                                  src="https://www.muji.com/public/media/img/item/4550584161247_99_95.jpg"
                                  alt="煙燻紫"
                                  title="煙燻紫"
                                  data-src="https://www.muji.com/public/media/img/item/4550584161247_99_95.jpg"
                                  data-expand="300"
                                />
                              </picture>
                            </div>
                          </button>
                        </li>
                      </ul>
                      <h4 className="sf-simpleBff_productsItemHeading">
                        兒童圓領長袖T恤 素色
                      </h4>
                      <div className="sf-simpleBff_productsItemDetail">
                        <p className="sf-simpleBff_productsItemPrice">
                          售價
                          <span className="sf-simpleBff_productsItemPriceBlock">
                            <span className="sf-simpleBff_productsItemPriceNum">
                              290
                            </span>
                            元
                          </span>
                        </p>
                        <div className="sf-simpleBff_productsItemStatus"></div>
                        <div className="sf-simpleBff_productsItemButton"></div>
                      </div>
                    </div>
                  </a>

                  <a
                    className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584161292"
                    href="https://api.91app.com/es/Redirect/41566/4550584161292"
                    data-current-chip="4550584161292"
                  >
                    <div className="sf-simpleBff_productsItemHead">
                      <div
                        className="sf-u-imgAdjustBox"
                        data-aspect-ratio="1:1"
                      >
                        <picture className="sf-u-imgAdjustBox_inner">
                          <img
                            className="sf-u-img js-sf-simpleBff_productsItemImage lazyloaded"
                            src="https://www.muji.com/public/media/img/item/4550584161292_org.jpg"
                            alt="兒童圓領長袖T恤 橫紋"
                            data-src="https://www.muji.com/public/media/img/item/4550584161292_org.jpg"
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
                            data-name="兒童圓領長袖T恤 橫紋"
                            data-is-current="true"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584161292_org.jpg"
                            data-jan="4550584161292"
                            data-price="990"
                            data-pricekindlist=""
                            data-new="false"
                            data-stock="STOCK"
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
                                  src="https://www.muji.com/public/media/img/item/4550584161292_99_95.jpg"
                                  alt="黑橫紋"
                                  title="黑橫紋"
                                  data-src="https://www.muji.com/public/media/img/item/4550584161292_99_95.jpg"
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
                            data-name="兒童圓領長袖T恤 橫紋"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584161346_org.jpg"
                            data-jan="4550584161346"
                            data-price="990"
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
                                  src="https://www.muji.com/public/media/img/item/4550584161346_99_95.jpg"
                                  alt="淺米橫紋"
                                  title="淺米橫紋"
                                  data-src="https://www.muji.com/public/media/img/item/4550584161346_99_95.jpg"
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
                            data-name="兒童圓領長袖T恤 橫紋"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584161391_org.jpg"
                            data-jan="4550584161391"
                            data-price="990"
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
                                  src="https://www.muji.com/public/media/img/item/4550584161391_99_95.jpg"
                                  alt="煙燻綠橫紋"
                                  title="煙燻綠橫紋"
                                  data-src="https://www.muji.com/public/media/img/item/4550584161391_99_95.jpg"
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
                            data-name="兒童圓領長袖T恤 橫紋"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584161445_org.jpg"
                            data-jan="4550584161445"
                            data-price="990"
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
                                  src="https://www.muji.com/public/media/img/item/4550584161445_99_95.jpg"
                                  alt="淡藍橫紋"
                                  title="淡藍橫紋"
                                  data-src="https://www.muji.com/public/media/img/item/4550584161445_99_95.jpg"
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
                            data-name="兒童圓領長袖T恤 橫紋"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584161490_org.jpg"
                            data-jan="4550584161490"
                            data-price="990"
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
                                  src="https://www.muji.com/public/media/img/item/4550584161490_99_95.jpg"
                                  alt="煙燻紫橫紋"
                                  title="煙燻紫橫紋"
                                  data-src="https://www.muji.com/public/media/img/item/4550584161490_99_95.jpg"
                                  data-expand="300"
                                />
                              </picture>
                            </div>
                          </button>
                        </li>
                      </ul>
                      <h4 className="sf-simpleBff_productsItemHeading">
                        兒童圓領長袖T恤 橫紋
                      </h4>
                      <div className="sf-simpleBff_productsItemDetail">
                        <p className="sf-simpleBff_productsItemPrice">
                          售價
                          <span className="sf-simpleBff_productsItemPriceBlock">
                            <span className="sf-simpleBff_productsItemPriceNum">
                              290
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
          </div>

          <div className="products__wearing sf-u-mt_xl sf-u-contents_mobile sf-u-contents_tablet">
            <h3 className="sf-heading -h3 products__subTitle sf-u-mb_xxxs-mobile sf-u-mb_xxxs-tablet sf-u-mb_xxs-desktop sf-u-font_center sf-u-font_size-m sf-u-font_gothicMB-m">
              其他穿著商品
            </h3>
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
                  className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584084720"
                  href="https://api.91app.com/es/Redirect/41566/4550584084720"
                  data-current-chip="4550584084720"
                >
                  <div className="sf-simpleBff_productsItemHead">
                    <div className="sf-u-imgAdjustBox" data-aspect-ratio="1:1">
                      <picture className="sf-u-imgAdjustBox_inner">
                        <img
                          className="sf-u-img js-sf-simpleBff_productsItemImage lazyloaded"
                          src="https://www.muji.com/public/media/img/item/4550584084720_org.jpg"
                          alt="兒童彈性綾織寬鬆合身褲"
                          data-src="https://www.muji.com/public/media/img/item/4550584084720_org.jpg"
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
                          data-name="兒童彈性綾織寬鬆合身褲"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584084676_org.jpg"
                          data-jan="4550584084676"
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
                                src="https://www.muji.com/public/media/img/item/4550584084676_99_95.jpg"
                                alt="黑色"
                                title="黑色"
                                data-src="https://www.muji.com/public/media/img/item/4550584084676_99_95.jpg"
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
                          data-name="兒童彈性綾織寬鬆合身褲"
                          data-is-current="true"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584084720_org.jpg"
                          data-jan="4550584084720"
                          data-price="490"
                          data-pricekindlist=""
                          data-new="false"
                          data-stock="STOCK"
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
                                src="https://www.muji.com/public/media/img/item/4550584084720_99_95.jpg"
                                alt="米色"
                                title="米色"
                                data-src="https://www.muji.com/public/media/img/item/4550584084720_99_95.jpg"
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
                          data-name="兒童彈性綾織寬鬆合身褲"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584084775_org.jpg"
                          data-jan="4550584084775"
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
                                src="https://www.muji.com/public/media/img/item/4550584084775_99_95.jpg"
                                alt="深米"
                                title="深米"
                                data-src="https://www.muji.com/public/media/img/item/4550584084775_99_95.jpg"
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
                          data-name="兒童彈性綾織寬鬆合身褲"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584084829_org.jpg"
                          data-jan="4550584084829"
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
                                src="https://www.muji.com/public/media/img/item/4550584084829_99_95.jpg"
                                alt="深綠"
                                title="深綠"
                                data-src="https://www.muji.com/public/media/img/item/4550584084829_99_95.jpg"
                                data-expand="300"
                              />
                            </picture>
                          </div>
                        </button>
                      </li>
                    </ul>
                    <h4 className="sf-simpleBff_productsItemHeading">
                      兒童彈性綾織寬鬆合身褲
                    </h4>
                    <div className="sf-simpleBff_productsItemDetail">
                      <p className="sf-simpleBff_productsItemPrice">
                        售價
                        <span className="sf-simpleBff_productsItemPriceBlock">
                          <span className="sf-simpleBff_productsItemPriceNum">
                            590
                          </span>
                          元
                        </span>
                      </p>
                      <div className="sf-simpleBff_productsItemStatus"></div>
                      <div className="sf-simpleBff_productsItemButton"></div>
                    </div>
                  </div>
                </a>

                <a
                  className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584084577"
                  href="https://api.91app.com/es/Redirect/41566/4550584084577"
                  data-current-chip="4550584084577"
                >
                  <div className="sf-simpleBff_productsItemHead">
                    <div className="sf-u-imgAdjustBox" data-aspect-ratio="1:1">
                      <picture className="sf-u-imgAdjustBox_inner">
                        <img
                          className="sf-u-img js-sf-simpleBff_productsItemImage lazyloaded"
                          src="https://www.muji.com/public/media/img/item/4550584084577_org.jpg"
                          alt="兒童彈性丹寧感合身褲"
                          data-src="https://www.muji.com/public/media/img/item/4550584084577_org.jpg"
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
                          data-name="兒童彈性丹寧感合身褲"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584084522_org.jpg"
                          data-jan="4550584084522"
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
                                src="https://www.muji.com/public/media/img/item/4550584084522_99_95.jpg"
                                alt="藍色"
                                title="藍色"
                                data-src="https://www.muji.com/public/media/img/item/4550584084522_99_95.jpg"
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
                          data-name="兒童彈性丹寧感合身褲"
                          data-is-current="true"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584084577_org.jpg"
                          data-jan="4550584084577"
                          data-price="490"
                          data-pricekindlist=""
                          data-new="false"
                          data-stock="STOCK"
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
                                src="https://www.muji.com/public/media/img/item/4550584084577_99_95.jpg"
                                alt="暗藍"
                                title="暗藍"
                                data-src="https://www.muji.com/public/media/img/item/4550584084577_99_95.jpg"
                                data-expand="300"
                              />
                            </picture>
                          </div>
                        </button>
                      </li>
                    </ul>
                    <h4 className="sf-simpleBff_productsItemHeading">
                      兒童彈性丹寧感合身褲
                    </h4>
                    <div className="sf-simpleBff_productsItemDetail">
                      <p className="sf-simpleBff_productsItemPrice">
                        售價
                        <span className="sf-simpleBff_productsItemPriceBlock">
                          <span className="sf-simpleBff_productsItemPriceNum">
                            790
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
        </div>

        <div className="products__l_img products__item sf-u-mt_xxlExt sf-u-pt_xl-mobile sf-u-pt_xl-tablet sf-u-pt_xxxl-desktop typeA">
          <div className="products__inner">
            <h2 className="sf-heading -h2 products__heading sf-u-font_gothicMB-b sf-u-font_size-xl-mobile sf-u-font_size-xl-tablet sf-u-font_size-xxxxl-desktop sf-u-font_center-mobile sf-u-font_center-tablet sf-u-font_lineHeight150-desktop">
              雙面起毛法蘭絨長袖襯衫
            </h2>

            <div className="products__mainImg sf-u-mt_m-mobile sf-u-mt_m-tablet">
              <figure
                className="sf-u-imgAdjustBox"
                data-mobile-aspect-ratio="75:92"
                data-tablet-aspect-ratio="75:92"
                data-desktop-aspect-ratio="202:159"
              >
                <picture className="sf-u-imgAdjustBox_inner">
                  <source
                    data-srcset="/src/assets/img/kids/look03-01-desktop.jpg"
                    media="(min-width: 1000px)"
                    type="image/jpeg"
                  />
                  <img
                    className="sf-u-img lazyload"
                    src="/src/assets/img/kids/look03-01.jpg"
                    data-src="/src/assets/img/kids/look03-01.jpg"
                    alt="キッズ　雙面起毛法蘭絨長袖襯衫長袖"
                    data-expand="300"
                  />
                </picture>
              </figure>
            </div>
            <p className="products__caption sf-u-mt_xxxsExt sf-u-contents_mobile sf-u-contents_tablet sf-u-font_size-xxxs-mobile sf-u-font_size-xxxs-tablet sf-u-font_size-xxs-desktop">
              模特兒身高 由左至右：123cm/穿著尺寸為120 118cm/穿著尺寸為120
              <br />
              ※無標明於此的商品為參考用商品
            </p>
            <div className="products__pickItem sf-u-mt_m-mobile sf-u-mt_m-tablet sf-u-contents_mobile sf-u-contents_tablet">
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
                    className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584325205"
                    href="https://api.91app.com/es/Redirect/41566/4550584325205"
                    data-current-chip="4550584325205"
                  >
                    <div className="sf-simpleBff_productsItemHead">
                      <div
                        className="sf-u-imgAdjustBox"
                        data-aspect-ratio="1:1"
                      >
                        <picture className="sf-u-imgAdjustBox_inner">
                          <img
                            className="sf-u-img js-sf-simpleBff_productsItemImage lazyloaded"
                            src="https://www.muji.com/public/media/img/item/4550584325205_org.jpg"
                            alt="キッズ　雙面起毛法蘭絨長袖襯衫長袖"
                            data-src="https://www.muji.com/public/media/img/item/4550584325205_org.jpg"
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
                            data-name="兒童雙面起毛法蘭絨長袖襯衫"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584324956_org.jpg"
                            data-jan="4550584324956"
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
                                  className="sf-u-img ls-is-cached lazyloaded"
                                  src="https://www.muji.com/public/media/img/item/4550584324956_99_95.jpg"
                                  alt="米色"
                                  title="米色"
                                  data-src="https://www.muji.com/public/media/img/item/4550584324956_99_95.jpg"
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
                            data-name="兒童雙面起毛法蘭絨長袖襯衫"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584325007_org.jpg"
                            data-jan="4550584325007"
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
                                  className="sf-u-img ls-is-cached lazyloaded"
                                  src="https://www.muji.com/public/media/img/item/4550584325007_99_95.jpg"
                                  alt="柔白格紋"
                                  title="柔白格紋"
                                  data-src="https://www.muji.com/public/media/img/item/4550584325007_99_95.jpg"
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
                            data-name="兒童雙面起毛法蘭絨長袖襯衫"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584325106_org.jpg"
                            data-jan="4550584325106"
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
                                  className="sf-u-img ls-is-cached lazyloaded"
                                  src="https://www.muji.com/public/media/img/item/4550584325106_99_95.jpg"
                                  alt="紅格紋"
                                  title="紅格紋"
                                  data-src="https://www.muji.com/public/media/img/item/4550584325106_99_95.jpg"
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
                            data-name="兒童雙面起毛法蘭絨長袖襯衫"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584325069_org.jpg"
                            data-jan="4550584325069"
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
                                  className="sf-u-img ls-is-cached lazyloaded"
                                  src="https://www.muji.com/public/media/img/item/4550584325069_99_95.jpg"
                                  alt="灰格紋條碼"
                                  title="灰格紋條碼"
                                  data-src="https://www.muji.com/public/media/img/item/4550584325069_99_95.jpg"
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
                            data-name="兒童雙面起毛法蘭絨長袖襯衫"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584325168_org.jpg"
                            data-jan="4550584325168"
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
                                  className="sf-u-img ls-is-cached lazyloaded"
                                  src="https://www.muji.com/public/media/img/item/4550584325168_99_95.jpg"
                                  alt="煙燻粉格紋條碼"
                                  title="煙燻粉格紋條碼"
                                  data-src="https://www.muji.com/public/media/img/item/4550584325168_99_95.jpg"
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
                            data-name="兒童雙面起毛法蘭絨長袖襯衫"
                            data-is-current="true"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584325205_org.jpg"
                            data-jan="4550584325205"
                            data-price="490"
                            data-pricekindlist=""
                            data-new="false"
                            data-stock="STOCK"
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
                                  className="sf-u-img ls-is-cached lazyloaded"
                                  src="https://www.muji.com/public/media/img/item/4550584325205_99_95.jpg"
                                  alt="深綠格紋"
                                  title="深綠格紋"
                                  data-src="https://www.muji.com/public/media/img/item/4550584325205_99_95.jpg"
                                  data-expand="300"
                                />
                              </picture>
                            </div>
                          </button>
                        </li>
                      </ul>
                      <h4 className="sf-simpleBff_productsItemHeading">
                        兒童雙面起毛法蘭絨長袖襯衫
                      </h4>
                      <div className="sf-simpleBff_productsItemDetail">
                        <p className="sf-simpleBff_productsItemPrice">
                          售價
                          <span className="sf-simpleBff_productsItemPriceBlock">
                            <span className="sf-simpleBff_productsItemPriceNum">
                              590
                            </span>
                            元
                          </span>
                        </p>
                        <div className="sf-simpleBff_productsItemStatus"></div>
                        <div className="sf-simpleBff_productsItemButton"></div>
                      </div>
                    </div>
                  </a>

                  <a
                    className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584325304"
                    href="https://api.91app.com/es/Redirect/41566/4550584325304"
                    data-current-chip="4550584325304"
                  >
                    <div className="sf-simpleBff_productsItemHead">
                      <div
                        className="sf-u-imgAdjustBox"
                        data-aspect-ratio="1:1"
                      >
                        <picture className="sf-u-imgAdjustBox_inner">
                          <img
                            className="sf-u-img js-sf-simpleBff_productsItemImage lazyloaded"
                            src="https://www.muji.com/public/media/img/item/4550584325304_org.jpg"
                            alt="兒童雙面起毛法蘭絨洋裝"
                            data-src="https://www.muji.com/public/media/img/item/4550584325304_org.jpg"
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
                            data-name="兒童雙面起毛法蘭絨洋裝"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584325250_org.jpg"
                            data-jan="4550584325250"
                            data-price="2,990"
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
                                  src="https://www.muji.com/public/media/img/item/4550584325250_99_95.jpg"
                                  alt="暗藍"
                                  title="暗藍"
                                  data-src="https://www.muji.com/public/media/img/item/4550584325250_99_95.jpg"
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
                            data-name="兒童雙面起毛法蘭絨洋裝"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584325359_org.jpg"
                            data-jan="4550584325359"
                            data-price="2,990"
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
                                  src="https://www.muji.com/public/media/img/item/4550584325359_99_95.jpg"
                                  alt="深棕格紋"
                                  title="深棕格紋"
                                  data-src="https://www.muji.com/public/media/img/item/4550584325359_99_95.jpg"
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
                            data-name="兒童雙面起毛法蘭絨洋裝"
                            data-is-current="true"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584325304_org.jpg"
                            data-jan="4550584325304"
                            data-price="2,990"
                            data-pricekindlist=""
                            data-new="false"
                            data-stock="STOCK"
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
                                  src="https://www.muji.com/public/media/img/item/4550584325304_99_95.jpg"
                                  alt="灰格紋"
                                  title="灰格紋"
                                  data-src="https://www.muji.com/public/media/img/item/4550584325304_99_95.jpg"
                                  data-expand="300"
                                />
                              </picture>
                            </div>
                          </button>
                        </li>
                      </ul>
                      <h4 className="sf-simpleBff_productsItemHeading">
                        兒童雙面起毛法蘭絨洋裝
                      </h4>
                      <div className="sf-simpleBff_productsItemDetail">
                        <p className="sf-simpleBff_productsItemPrice">
                          售價
                          <span className="sf-simpleBff_productsItemPriceBlock">
                            <span className="sf-simpleBff_productsItemPriceNum">
                              790
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
          </div>

          <div className="products__wearing sf-u-mt_xl sf-u-contents_mobile sf-u-contents_tablet -center">
            <h3 className="sf-heading -h3 products__subTitle sf-u-mb_xxxs-mobile sf-u-mb_xxxs-tablet sf-u-mb_xxs-desktop sf-u-font_center sf-u-font_size-m sf-u-font_gothicMB-m">
              其他穿著商品
            </h3>
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
                  className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584084577"
                  href="https://api.91app.com/es/Redirect/41566/4550584084577"
                  data-current-chip="4550584084577"
                >
                  <div className="sf-simpleBff_productsItemHead">
                    <div className="sf-u-imgAdjustBox" data-aspect-ratio="1:1">
                      <picture className="sf-u-imgAdjustBox_inner">
                        <img
                          className="sf-u-img js-sf-simpleBff_productsItemImage ls-is-cached lazyloaded"
                          src="https://www.muji.com/public/media/img/item/4550584084577_org.jpg"
                          alt="兒童彈性丹寧感合身褲"
                          data-src="https://www.muji.com/public/media/img/item/4550584084577_org.jpg"
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
                          data-name="兒童彈性丹寧感合身褲"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584084522_org.jpg"
                          data-jan="4550584084522"
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
                                className="sf-u-img ls-is-cached lazyloaded"
                                src="https://www.muji.com/public/media/img/item/4550584084522_99_95.jpg"
                                alt="藍色"
                                title="藍色"
                                data-src="https://www.muji.com/public/media/img/item/4550584084522_99_95.jpg"
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
                          data-name="兒童彈性丹寧感合身褲"
                          data-is-current="true"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584084577_org.jpg"
                          data-jan="4550584084577"
                          data-price="490"
                          data-pricekindlist=""
                          data-new="false"
                          data-stock="STOCK"
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
                                className="sf-u-img ls-is-cached lazyloaded"
                                src="https://www.muji.com/public/media/img/item/4550584084577_99_95.jpg"
                                alt="暗藍"
                                title="暗藍"
                                data-src="https://www.muji.com/public/media/img/item/4550584084577_99_95.jpg"
                                data-expand="300"
                              />
                            </picture>
                          </div>
                        </button>
                      </li>
                    </ul>
                    <h4 className="sf-simpleBff_productsItemHeading">
                      兒童彈性丹寧感合身褲
                    </h4>
                    <div className="sf-simpleBff_productsItemDetail">
                      <p className="sf-simpleBff_productsItemPrice">
                        售價
                        <span className="sf-simpleBff_productsItemPriceBlock">
                          <span className="sf-simpleBff_productsItemPriceNum">
                            790
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
        </div>

        <div className="products__r_img products__item sf-u-mt_xxlExt sf-u-pt_xl-mobile sf-u-pt_xl-tablet sf-u-pt_xxxl-desktop typeA --reverse">
          <div className="products__inner">
            <h2 className="sf-heading -h2 products__heading sf-u-font_gothicMB-b sf-u-font_size-xl-mobile sf-u-font_size-xl-tablet sf-u-font_size-xxxxl-desktop sf-u-font_center-mobile sf-u-font_center-tablet sf-u-font_lineHeight150-desktop">
              撥水加工連帽外套
            </h2>

            <div className="products__mainImg sf-u-mt_m-mobile sf-u-mt_m-tablet">
              <figure
                className="sf-u-imgAdjustBox"
                data-mobile-aspect-ratio="75:92"
                data-tablet-aspect-ratio="75:92"
                data-desktop-aspect-ratio="4:3"
              >
                <picture className="sf-u-imgAdjustBox_inner">
                  <source
                    data-srcset="/src/assets/img/kids/look04-01-desktop.jpg"
                    media="(min-width: 1000px)"
                    type="image/jpeg"
                  />
                  <img
                    className="sf-u-img lazyload"
                    src="/src/assets/img/kids/look04-01.jpg"
                    data-src="/src/assets/img/kids/look04-01.jpg"
                    alt="撥水加工連帽外套"
                    data-expand="300"
                  />
                </picture>
              </figure>
            </div>
            <p className="products__caption sf-u-mt_xxxsExt sf-u-contents_mobile sf-u-contents_tablet sf-u-font_size-xxxs-mobile sf-u-font_size-xxxs-tablet sf-u-font_size-xxs-desktop">
              模特兒身高：116cm/穿著尺寸為120
              <br />
              ※無標明於此的商品為參考用商品
            </p>
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
                    className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584280368"
                    href="https://api.91app.com/es/Redirect/41566/4550584280368"
                    data-current-chip="4550584280368"
                  >
                    <div className="sf-simpleBff_productsItemHead">
                      <div
                        className="sf-u-imgAdjustBox"
                        data-aspect-ratio="1:1"
                      >
                        <picture className="sf-u-imgAdjustBox_inner">
                          <img
                            className="sf-u-img js-sf-simpleBff_productsItemImage lazyloaded"
                            src="https://www.muji.com/public/media/img/item/4550584280368_org.jpg"
                            alt="兒童撥水加工連帽外套"
                            data-src="https://www.muji.com/public/media/img/item/4550584280368_org.jpg"
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
                            data-name="兒童撥水加工連帽外套"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584280269_org.jpg"
                            data-jan="4550584280269"
                            data-price="2,990"
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
                                  src="https://www.muji.com/public/media/img/item/4550584280269_99_95.jpg"
                                  alt="卡其綠"
                                  title="卡其綠"
                                  data-src="https://www.muji.com/public/media/img/item/4550584280269_99_95.jpg"
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
                            data-name="兒童撥水加工連帽外套"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584280313_org.jpg"
                            data-jan="4550584280313"
                            data-price="2,990"
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
                                  src="https://www.muji.com/public/media/img/item/4550584280313_99_95.jpg"
                                  alt="深藍"
                                  title="深藍"
                                  data-src="https://www.muji.com/public/media/img/item/4550584280313_99_95.jpg"
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
                            data-name="兒童撥水加工連帽外套"
                            data-is-current="true"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584280368_org.jpg"
                            data-jan="4550584280368"
                            data-price="2,990"
                            data-pricekindlist=""
                            data-new="false"
                            data-stock="STOCK"
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
                                  src="https://www.muji.com/public/media/img/item/4550584280368_99_95.jpg"
                                  alt="煙燻紫"
                                  title="煙燻紫"
                                  data-src="https://www.muji.com/public/media/img/item/4550584280368_99_95.jpg"
                                  data-expand="300"
                                />
                              </picture>
                            </div>
                          </button>
                        </li>
                      </ul>
                      <h4 className="sf-simpleBff_productsItemHeading">
                        兒童撥水加工連帽外套
                      </h4>
                      <div className="sf-simpleBff_productsItemDetail">
                        <p className="sf-simpleBff_productsItemPrice">
                          售價
                          <span className="sf-simpleBff_productsItemPriceBlock">
                            <span className="sf-simpleBff_productsItemPriceNum">
                              990
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
          </div>

          <div className="products__wearing sf-u-mt_xl sf-u-contents_mobile sf-u-contents_tablet">
            <h3 className="sf-heading -h3 products__subTitle sf-u-mb_xxxs-mobile sf-u-mb_xxxs-tablet sf-u-mb_xxs-desktop sf-u-font_center sf-u-font_size-m sf-u-font_gothicMB-m">
              其他穿著商品
            </h3>

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
                  className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584161391"
                  href="https://api.91app.com/es/Redirect/41566/4550584161391"
                  data-current-chip="4550584161391"
                >
                  <div className="sf-simpleBff_productsItemHead">
                    <div className="sf-u-imgAdjustBox" data-aspect-ratio="1:1">
                      <picture className="sf-u-imgAdjustBox_inner">
                        <img
                          className="sf-u-img js-sf-simpleBff_productsItemImage ls-is-cached lazyloaded"
                          src="https://www.muji.com/public/media/img/item/4550584161391_org.jpg"
                          alt="兒童圓領長袖T恤 橫紋"
                          data-src="https://www.muji.com/public/media/img/item/4550584161391_org.jpg"
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
                          data-name="兒童圓領長袖T恤 橫紋"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584161292_org.jpg"
                          data-jan="4550584161292"
                          data-price="990"
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
                                className="sf-u-img ls-is-cached lazyloaded"
                                src="https://www.muji.com/public/media/img/item/4550584161292_99_95.jpg"
                                alt="黑橫紋"
                                title="黑橫紋"
                                data-src="https://www.muji.com/public/media/img/item/4550584161292_99_95.jpg"
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
                          data-name="兒童圓領長袖T恤 橫紋"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584161346_org.jpg"
                          data-jan="4550584161346"
                          data-price="990"
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
                                src="https://www.muji.com/public/media/img/item/4550584161346_99_95.jpg"
                                alt="淺米橫紋"
                                title="淺米橫紋"
                                data-src="https://www.muji.com/public/media/img/item/4550584161346_99_95.jpg"
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
                          data-name="兒童圓領長袖T恤 橫紋"
                          data-is-current="true"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584161391_org.jpg"
                          data-jan="4550584161391"
                          data-price="990"
                          data-pricekindlist=""
                          data-new="false"
                          data-stock="STOCK"
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
                                src="https://www.muji.com/public/media/img/item/4550584161391_99_95.jpg"
                                alt="煙燻綠橫紋"
                                title="煙燻綠橫紋"
                                data-src="https://www.muji.com/public/media/img/item/4550584161391_99_95.jpg"
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
                          data-name="兒童圓領長袖T恤 橫紋"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584161445_org.jpg"
                          data-jan="4550584161445"
                          data-price="990"
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
                                src="https://www.muji.com/public/media/img/item/4550584161445_99_95.jpg"
                                alt="淡藍橫紋"
                                title="淡藍橫紋"
                                data-src="https://www.muji.com/public/media/img/item/4550584161445_99_95.jpg"
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
                          data-name="兒童圓領長袖T恤 橫紋"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584161490_org.jpg"
                          data-jan="4550584161490"
                          data-price="990"
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
                                src="https://www.muji.com/public/media/img/item/4550584161490_99_95.jpg"
                                alt="煙燻紫橫紋"
                                title="煙燻紫橫紋"
                                data-src="https://www.muji.com/public/media/img/item/4550584161490_99_95.jpg"
                                data-expand="300"
                              />
                            </picture>
                          </div>
                        </button>
                      </li>
                    </ul>
                    <h4 className="sf-simpleBff_productsItemHeading">
                      兒童圓領長袖T恤 橫紋
                    </h4>
                    <div className="sf-simpleBff_productsItemDetail">
                      <p className="sf-simpleBff_productsItemPrice">
                        售價
                        <span className="sf-simpleBff_productsItemPriceBlock">
                          <span className="sf-simpleBff_productsItemPriceNum">
                            290
                          </span>
                          元
                        </span>
                      </p>
                      <div className="sf-simpleBff_productsItemStatus"></div>
                      <div className="sf-simpleBff_productsItemButton"></div>
                    </div>
                  </div>
                </a>

                <a
                  className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584084522"
                  href="https://api.91app.com/es/Redirect/41566/4550584084522"
                  data-current-chip="4550584084522"
                >
                  <div className="sf-simpleBff_productsItemHead">
                    <div className="sf-u-imgAdjustBox" data-aspect-ratio="1:1">
                      <picture className="sf-u-imgAdjustBox_inner">
                        <img
                          className="sf-u-img js-sf-simpleBff_productsItemImage ls-is-cached lazyloaded"
                          src="https://www.muji.com/public/media/img/item/4550584084522_org.jpg"
                          alt="兒童彈性丹寧感合身褲"
                          data-src="https://www.muji.com/public/media/img/item/4550584084522_org.jpg"
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
                          data-name="兒童彈性丹寧感合身褲"
                          data-is-current="true"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584084522_org.jpg"
                          data-jan="4550584084522"
                          data-price="490"
                          data-pricekindlist=""
                          data-new="false"
                          data-stock="STOCK"
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
                                className="sf-u-img ls-is-cached lazyloaded"
                                src="https://www.muji.com/public/media/img/item/4550584084522_99_95.jpg"
                                alt="藍色"
                                title="藍色"
                                data-src="https://www.muji.com/public/media/img/item/4550584084522_99_95.jpg"
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
                          data-name="兒童彈性丹寧感合身褲"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584084577_org.jpg"
                          data-jan="4550584084577"
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
                                className="sf-u-img ls-is-cached lazyloaded"
                                src="https://www.muji.com/public/media/img/item/4550584084577_99_95.jpg"
                                alt="暗藍"
                                title="暗藍"
                                data-src="https://www.muji.com/public/media/img/item/4550584084577_99_95.jpg"
                                data-expand="300"
                              />
                            </picture>
                          </div>
                        </button>
                      </li>
                    </ul>
                    <h4 className="sf-simpleBff_productsItemHeading">
                      兒童彈性丹寧感合身褲
                    </h4>
                    <div className="sf-simpleBff_productsItemDetail">
                      <p className="sf-simpleBff_productsItemPrice">
                        售價
                        <span className="sf-simpleBff_productsItemPriceBlock">
                          <span className="sf-simpleBff_productsItemPriceNum">
                            790
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
        </div>

        <div className="products__l_img products__item sf-u-mt_xxlExt sf-u-pt_xl-mobile sf-u-pt_xl-tablet sf-u-pt_xxxl-desktop typeA">
          <div className="products__inner">
            <h2 className="sf-heading -h2 products__heading sf-u-font_gothicMB-b sf-u-font_size-xl-mobile sf-u-font_size-xl-tablet sf-u-font_size-xxxxl-desktop sf-u-font_center-mobile sf-u-font_center-tablet sf-u-font_lineHeight150-desktop">
              緊身長褲
            </h2>

            <div className="products__mainImg sf-u-mt_m-mobile sf-u-mt_m-tablet">
              <figure
                className="sf-u-imgAdjustBox"
                data-mobile-aspect-ratio="75:92"
                data-tablet-aspect-ratio="75:92"
                data-desktop-aspect-ratio="4:3"
              >
                <picture className="sf-u-imgAdjustBox_inner">
                  <source
                    data-srcset="/src/assets/img/kids/look05-01-desktop.jpg"
                    media="(min-width: 1000px)"
                    type="image/jpeg"
                  />

                  <img
                    className="sf-u-img lazyload"
                    src="/src/assets/img/kids/look05-01.jpg"
                    data-src="/src/assets/img/kids/look05-01.jpg"
                    alt="緊身長褲"
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
            <div className="products__pickItem sf-u-mt_m-mobile sf-u-mt_m-tablet sf-u-contents_mobile sf-u-contents_tablet">
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
                    className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584084973"
                    href="https://api.91app.com/es/Redirect/41566/4550584084973"
                    data-current-chip="4550584084973"
                  >
                    <div className="sf-simpleBff_productsItemHead">
                      <div
                        className="sf-u-imgAdjustBox"
                        data-aspect-ratio="1:1"
                      >
                        <picture className="sf-u-imgAdjustBox_inner">
                          <img
                            className="sf-u-img js-sf-simpleBff_productsItemImage ls-is-cached lazyloaded"
                            src="https://www.muji.com/public/media/img/item/4550584084973_org.jpg"
                            alt="兒童針織丹寧感緊身長褲"
                            data-src="https://www.muji.com/public/media/img/item/4550584084973_org.jpg"
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
                            data-name="兒童針織丹寧感緊身長褲"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584084874_org.jpg"
                            data-jan="4550584084874"
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
                                  src="https://www.muji.com/public/media/img/item/4550584084874_99_95.jpg"
                                  alt="黑色"
                                  title="黑色"
                                  data-src="https://www.muji.com/public/media/img/item/4550584084874_99_95.jpg"
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
                            data-name="兒童針織丹寧感緊身長褲"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584084928_org.jpg"
                            data-jan="4550584084928"
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
                                  src="https://www.muji.com/public/media/img/item/4550584084928_99_95.jpg"
                                  alt="深藍"
                                  title="深藍"
                                  data-src="https://www.muji.com/public/media/img/item/4550584084928_99_95.jpg"
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
                            data-name="兒童針織丹寧感緊身長褲"
                            data-is-current="true"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584084973_org.jpg"
                            data-jan="4550584084973"
                            data-price="490"
                            data-pricekindlist=""
                            d兒童二重織裏毛圓領衫ata-new="false"
                            data-stock="STOCK"
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
                                  src="https://www.muji.com/public/media/img/item/4550584084973_99_95.jpg"
                                  alt="暗藍"
                                  title="暗藍"
                                  data-src="https://www.muji.com/public/media/img/item/4550584084973_99_95.jpg"
                                  data-expand="300"
                                />
                              </picture>
                            </div>
                          </button>
                        </li>
                      </ul>
                      <h4 className="sf-simpleBff_productsItemHeading">
                        兒童針織丹寧感緊身長褲
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

                  <a
                    className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584085123"
                    href="https://api.91app.com/es/Redirect/41566/4550584085123"
                    data-current-chip="4550584085123"
                  >
                    <div className="sf-simpleBff_productsItemHead">
                      <div
                        className="sf-u-imgAdjustBox"
                        data-aspect-ratio="1:1"
                      >
                        <picture className="sf-u-imgAdjustBox_inner">
                          <img
                            className="sf-u-img js-sf-simpleBff_productsItemImage ls-is-cached lazyloaded"
                            src="https://www.muji.com/public/media/img/item/4550584085123_org.jpg"
                            alt="兒童針織彩色緊身長褲"
                            data-src="https://www.muji.com/public/media/img/item/4550584085123_org.jpg"
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
                            data-name="兒童針織彩色緊身長褲"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584085024_org.jpg"
                            data-jan="4550584085024"
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
                                  src="https://www.muji.com/public/media/img/item/4550584085024_99_95.jpg"
                                  alt="墨灰"
                                  title="墨灰"
                                  data-src="https://www.muji.com/public/media/img/item/4550584085024_99_95.jpg"
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
                            data-name="兒童針織彩色緊身長褲"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584085079_org.jpg"
                            data-jan="4550584085079"
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
                                  src="https://www.muji.com/public/media/img/item/4550584085079_99_95.jpg"
                                  alt="黑色"
                                  title="黑色"
                                  data-src="https://www.muji.com/public/media/img/item/4550584085079_99_95.jpg"
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
                            data-name="兒童針織彩色緊身長褲"
                            data-is-current="true"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584085123_org.jpg"
                            data-jan="4550584085123"
                            data-price="490"
                            data-pricekindlist=""
                            data-new="false"
                            data-stock="STOCK"
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
                                  src="https://www.muji.com/public/media/img/item/4550584085123_99_95.jpg"
                                  alt="米色"
                                  title="米色"
                                  data-src="https://www.muji.com/public/media/img/item/4550584085123_99_95.jpg"
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
                            data-name="兒童針織彩色緊身長褲"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584085178_org.jpg"
                            data-jan="4550584085178"
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
                                  src="https://www.muji.com/public/media/img/item/4550584085178_99_95.jpg"
                                  alt="卡其綠"
                                  title="卡其綠"
                                  data-src="https://www.muji.com/public/media/img/item/4550584085178_99_95.jpg"
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
                            data-name="兒童針織彩色緊身長褲"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584085222_org.jpg"
                            data-jan="4550584085222"
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
                                  src="https://www.muji.com/public/media/img/item/4550584085222_99_95.jpg"
                                  alt="煙燻紫"
                                  title="煙燻紫"
                                  data-src="https://www.muji.com/public/media/img/item/4550584085222_99_95.jpg"
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
                            data-name="兒童針織彩色緊身長褲"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550583575588_org.jpg"
                            data-jan="4550583575588"
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
                                  className="sf-u-img ls-is-cached lazyloaded"
                                  src="https://www.muji.com/public/media/img/item/4550583575588_99_95.jpg"
                                  alt="粉色"
                                  title="粉色"
                                  data-src="https://www.muji.com/public/media/img/item/4550583575588_99_95.jpg"
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
                            data-name="兒童針織彩色緊身長褲"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550583575632_org.jpg"
                            data-jan="4550583575632"
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
                                  className="sf-u-img ls-is-cached lazyloaded"
                                  src="https://www.muji.com/public/media/img/item/4550583575632_99_95.jpg"
                                  alt="淺黃"
                                  title="淺黃"
                                  data-src="https://www.muji.com/public/media/img/item/4550583575632_99_95.jpg"
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
                            data-name="兒童針織彩色緊身長褲"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550583575731_org.jpg"
                            data-jan="4550583575731"
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
                                  className="sf-u-img ls-is-cached lazyloaded"
                                  src="https://www.muji.com/public/media/img/item/4550583575731_99_95.jpg"
                                  alt="藍色"
                                  title="藍色"
                                  data-src="https://www.muji.com/public/media/img/item/4550583575731_99_95.jpg"
                                  data-expand="300"
                                />
                              </picture>
                            </div>
                          </button>
                        </li>
                      </ul>
                      <h4 className="sf-simpleBff_productsItemHeading">
                        兒童針織彩色緊身長褲
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
          </div>

          <div className="products__wearing sf-u-mt_xl sf-u-contents_mobile sf-u-contents_tablet">
            <h3 className="sf-heading -h3 products__subTitle sf-u-mb_xxxs-mobile sf-u-mb_xxxs-tablet sf-u-mb_xxs-desktop sf-u-font_center sf-u-font_size-m sf-u-font_gothicMB-m">
              其他穿著商品
            </h3>
            <div
              className="sf-simpleBff js-sf-simpleBff -loading-complete"
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
                  className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584161049"
                  href="https://api.91app.com/es/Redirect/41566/4550584161049"
                  data-current-chip="4550584161049"
                >
                  <div className="sf-simpleBff_productsItemHead">
                    <div className="sf-u-imgAdjustBox" data-aspect-ratio="1:1">
                      <picture className="sf-u-imgAdjustBox_inner">
                        <img
                          className="sf-u-img js-sf-simpleBff_productsItemImage lazyloaded"
                          src="https://www.muji.com/public/media/img/item/4550584161049_org.jpg"
                          alt="兒童圓領長袖T恤 素色"
                          data-src="https://www.muji.com/public/media/img/item/4550584161049_org.jpg"
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
                          data-name="兒童圓領長袖T恤 素色"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584160998_org.jpg"
                          data-jan="4550584160998"
                          data-price="790"
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
                                src="https://www.muji.com/public/media/img/item/4550584160998_99_95.jpg"
                                alt="柔白"
                                title="柔白"
                                data-src="https://www.muji.com/public/media/img/item/4550584160998_99_95.jpg"
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
                          data-name="兒童圓領長袖T恤 素色"
                          data-is-current="true"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584161049_org.jpg"
                          data-jan="4550584161049"
                          data-price="790"
                          data-pricekindlist=""
                          data-new="false"
                          data-stock="STOCK"
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
                                src="https://www.muji.com/public/media/img/item/4550584161049_99_95.jpg"
                                alt="墨灰"
                                title="墨灰"
                                data-src="https://www.muji.com/public/media/img/item/4550584161049_99_95.jpg"
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
                          data-name="兒童圓領長袖T恤 素色"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584161094_org.jpg"
                          data-jan="4550584161094"
                          data-price="790"
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
                                src="https://www.muji.com/public/media/img/item/4550584161094_99_95.jpg"
                                alt="黑色"
                                title="黑色"
                                data-src="https://www.muji.com/public/media/img/item/4550584161094_99_95.jpg"
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
                          data-name="兒童圓領長袖T恤 素色"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584161148_org.jpg"
                          data-jan="4550584161148"
                          data-price="790"
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
                                src="https://www.muji.com/public/media/img/item/4550584161148_99_95.jpg"
                                alt="煙燻綠"
                                title="煙燻綠"
                                data-src="https://www.muji.com/public/media/img/item/4550584161148_99_95.jpg"
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
                          data-name="兒童圓領長袖T恤 素色"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584161193_org.jpg"
                          data-jan="4550584161193"
                          data-price="790"
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
                                src="https://www.muji.com/public/media/img/item/4550584161193_99_95.jpg"
                                alt="淡藍"
                                title="淡藍"
                                data-src="https://www.muji.com/public/media/img/item/4550584161193_99_95.jpg"
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
                          data-name="兒童圓領長袖T恤 素色"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584161247_org.jpg"
                          data-jan="4550584161247"
                          data-price="790"
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
                                src="https://www.muji.com/public/media/img/item/4550584161247_99_95.jpg"
                                alt="煙燻紫"
                                title="煙燻紫"
                                data-src="https://www.muji.com/public/media/img/item/4550584161247_99_95.jpg"
                                data-expand="300"
                              />
                            </picture>
                          </div>
                        </button>
                      </li>
                    </ul>
                    <h4 className="sf-simpleBff_productsItemHeading">
                      兒童圓領長袖T恤 素色
                    </h4>
                    <div className="sf-simpleBff_productsItemDetail">
                      <p className="sf-simpleBff_productsItemPrice">
                        售價
                        <span className="sf-simpleBff_productsItemPriceBlock">
                          <span className="sf-simpleBff_productsItemPriceNum">
                            290
                          </span>
                          元
                        </span>
                      </p>
                      <div className="sf-simpleBff_productsItemStatus"></div>
                      <div className="sf-simpleBff_productsItemButton"></div>
                    </div>
                  </div>
                </a>

                <a
                  className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584160899"
                  href="https://api.91app.com/es/Redirect/41566/4550584160899"
                  data-current-chip="4550584160899"
                >
                  <div className="sf-simpleBff_productsItemHead">
                    <div className="sf-u-imgAdjustBox" data-aspect-ratio="1:1">
                      <picture className="sf-u-imgAdjustBox_inner">
                        <img
                          className="sf-u-img js-sf-simpleBff_productsItemImage lazyloaded"
                          src="https://www.muji.com/public/media/img/item/4550584160899_org.jpg"
                          alt="兒童二重織裏毛開襟衫"
                          data-src="https://www.muji.com/public/media/img/item/4550584160899_org.jpg"
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
                          data-name="兒童二重織裏毛開襟衫"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584160745_org.jpg"
                          data-jan="4550584160745"
                          data-price="590"
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
                                src="https://www.muji.com/public/media/img/item/4550584160745_99_95.jpg"
                                alt="灰色"
                                title="灰色"
                                data-src="https://www.muji.com/public/media/img/item/4550584160745_99_95.jpg"
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
                          data-name="兒童二重織裏毛開襟衫"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584160790_org.jpg"
                          data-jan="4550584160790"
                          data-price="590"
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
                                src="https://www.muji.com/public/media/img/item/4550584160790_99_95.jpg"
                                alt="黑色"
                                title="黑色"
                                data-src="https://www.muji.com/public/media/img/item/4550584160790_99_95.jpg"
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
                          data-name="兒童二重織裏毛開襟衫"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584160844_org.jpg"
                          data-jan="4550584160844"
                          data-price="590"
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
                                src="https://www.muji.com/public/media/img/item/4550584160844_99_95.jpg"
                                alt="淺米"
                                title="淺米"
                                data-src="https://www.muji.com/public/media/img/item/4550584160844_99_95.jpg"
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
                          data-name="兒童二重織裏毛開襟衫"
                          data-is-current="true"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584160899_org.jpg"
                          data-jan="4550584160899"
                          data-price="590"
                          data-pricekindlist=""
                          data-new="false"
                          data-stock="STOCK"
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
                                src="https://www.muji.com/public/media/img/item/4550584160899_99_95.jpg"
                                alt="深藍"
                                title="深藍"
                                data-src="https://www.muji.com/public/media/img/item/4550584160899_99_95.jpg"
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
                          data-name="兒童二重織裏毛開襟衫"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584160943_org.jpg"
                          data-jan="4550584160943"
                          data-price="590"
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
                                src="https://www.muji.com/public/media/img/item/4550584160943_99_95.jpg"
                                alt="煙燻紫"
                                title="煙燻紫"
                                data-src="https://www.muji.com/public/media/img/item/4550584160943_99_95.jpg"
                                data-expand="300"
                              />
                            </picture>
                          </div>
                        </button>
                      </li>
                    </ul>
                    <h4 className="sf-simpleBff_productsItemHeading">
                      兒童二重織裏毛開襟衫
                    </h4>
                    <div className="sf-simpleBff_productsItemDetail">
                      <p className="sf-simpleBff_productsItemPrice">
                        售價
                        <span className="sf-simpleBff_productsItemPriceBlock">
                          <span className="sf-simpleBff_productsItemPriceNum">
                            590
                          </span>
                          元
                        </span>
                      </p>
                      <div className="sf-simpleBff_productsItemStatus"></div>
                      <div className="sf-simpleBff_productsItemButton"></div>
                    </div>
                  </div>
                </a>

                <a
                  className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584161346"
                  href="https://api.91app.com/es/Redirect/41566/4550584161346"
                  data-current-chip="4550584161346"
                >
                  <div className="sf-simpleBff_productsItemHead">
                    <div className="sf-u-imgAdjustBox" data-aspect-ratio="1:1">
                      <picture className="sf-u-imgAdjustBox_inner">
                        <img
                          className="sf-u-img js-sf-simpleBff_productsItemImage lazyloaded"
                          src="https://www.muji.com/public/media/img/item/4550584161346_org.jpg"
                          alt="兒童圓領長袖T恤 橫紋"
                          data-src="https://www.muji.com/public/media/img/item/4550584161346_org.jpg"
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
                          data-name="兒童圓領長袖T恤 橫紋"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584161292_org.jpg"
                          data-jan="4550584161292"
                          data-price="990"
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
                                className="sf-u-img ls-is-cached lazyloaded"
                                src="https://www.muji.com/public/media/img/item/4550584161292_99_95.jpg"
                                alt="黑橫紋"
                                title="黑橫紋"
                                data-src="https://www.muji.com/public/media/img/item/4550584161292_99_95.jpg"
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
                          data-name="兒童圓領長袖T恤 橫紋"
                          data-is-current="true"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584161346_org.jpg"
                          data-jan="4550584161346"
                          data-price="990"
                          data-pricekindlist=""
                          data-new="false"
                          data-stock="STOCK"
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
                                className="sf-u-img ls-is-cached lazyloaded"
                                src="https://www.muji.com/public/media/img/item/4550584161346_99_95.jpg"
                                alt="淺米橫紋"
                                title="淺米橫紋"
                                data-src="https://www.muji.com/public/media/img/item/4550584161346_99_95.jpg"
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
                          data-name="兒童圓領長袖T恤 橫紋"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584161391_org.jpg"
                          data-jan="4550584161391"
                          data-price="990"
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
                                className="sf-u-img ls-is-cached lazyloaded"
                                src="https://www.muji.com/public/media/img/item/4550584161391_99_95.jpg"
                                alt="煙燻綠橫紋"
                                title="煙燻綠橫紋"
                                data-src="https://www.muji.com/public/media/img/item/4550584161391_99_95.jpg"
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
                          data-name="兒童圓領長袖T恤 橫紋"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584161445_org.jpg"
                          data-jan="4550584161445"
                          data-price="990"
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
                                className="sf-u-img ls-is-cached lazyloaded"
                                src="https://www.muji.com/public/media/img/item/4550584161445_99_95.jpg"
                                alt="淡藍橫紋"
                                title="淡藍橫紋"
                                data-src="https://www.muji.com/public/media/img/item/4550584161445_99_95.jpg"
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
                          data-name="兒童圓領長袖T恤 橫紋"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584161490_org.jpg"
                          data-jan="4550584161490"
                          data-price="990"
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
                                className="sf-u-img ls-is-cached lazyloaded"
                                src="https://www.muji.com/public/media/img/item/4550584161490_99_95.jpg"
                                alt="煙燻紫橫紋"
                                title="煙燻紫橫紋"
                                data-src="https://www.muji.com/public/media/img/item/4550584161490_99_95.jpg"
                                data-expand="300"
                              />
                            </picture>
                          </div>
                        </button>
                      </li>
                    </ul>
                    <h4 className="sf-simpleBff_productsItemHeading">
                      兒童圓領長袖T恤 橫紋
                    </h4>
                    <div className="sf-simpleBff_productsItemDetail">
                      <p className="sf-simpleBff_productsItemPrice">
                        售價
                        <span className="sf-simpleBff_productsItemPriceBlock">
                          <span className="sf-simpleBff_productsItemPriceNum">
                            290
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
        </div>

        <div className="products__r_img products__item sf-u-mt_xxlExt sf-u-pt_xl-mobile sf-u-pt_xl-tablet sf-u-pt_xxxl-desktop typeA --reverse">
          <div className="products__inner">
            <h2 className="sf-heading -h2 products__heading sf-u-font_gothicMB-b sf-u-font_size-xl-mobile sf-u-font_size-xl-tablet sf-u-font_size-xxxxl-desktop sf-u-font_center-mobile sf-u-font_center-tablet sf-u-font_lineHeight150-desktop">
              彈性綾織褲
            </h2>

            <div className="products__mainImg sf-u-mt_m-mobile sf-u-mt_m-tablet">
              <figure
                className="sf-u-imgAdjustBox"
                data-mobile-aspect-ratio="75:92"
                data-tablet-aspect-ratio="75:92"
                data-desktop-aspect-ratio="4:3"
              >
                <picture className="sf-u-imgAdjustBox_inner">
                  <source
                    data-srcset="/src/assets/img/kids/look06-01-desktop.jpg"
                    media="(min-width: 1000px)"
                    type="image/jpeg"
                  />
                  <img
                    className="sf-u-img lazyload"
                    src="/src/assets/img/kids/look06-01.jpg"
                    data-src="/src/assets/img/kids/look06-01.jpg"
                    alt="彈性綾織褲"
                    data-expand="300"
                  />
                </picture>
              </figure>
            </div>
            <p className="products__caption sf-u-mt_xxxsExt sf-u-contents_mobile sf-u-contents_tablet sf-u-font_size-xxxs-mobile sf-u-font_size-xxxs-tablet sf-u-font_size-xxs-desktop">
              模特兒身高：123cm/穿著尺寸為120
              <br />
              ※無標明於此的商品為參考用商品
            </p>
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
                    className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584084720"
                    href="https://api.91app.com/es/Redirect/41566/4550584084720"
                    data-current-chip="4550584084720"
                  >
                    <div className="sf-simpleBff_productsItemHead">
                      <div
                        className="sf-u-imgAdjustBox"
                        data-aspect-ratio="1:1"
                      >
                        <picture className="sf-u-imgAdjustBox_inner">
                          <img
                            className="sf-u-img js-sf-simpleBff_productsItemImage lazyloaded"
                            src="https://www.muji.com/public/media/img/item/4550584084720_org.jpg"
                            alt="兒童彈性綾織寬鬆合身褲"
                            data-src="https://www.muji.com/public/media/img/item/4550584084720_org.jpg"
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
                            data-name="兒童彈性綾織寬鬆合身褲"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584084676_org.jpg"
                            data-jan="4550584084676"
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
                                  src="https://www.muji.com/public/media/img/item/4550584084676_99_95.jpg"
                                  alt="黑色"
                                  title="黑色"
                                  data-src="https://www.muji.com/public/media/img/item/4550584084676_99_95.jpg"
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
                            data-name="兒童彈性綾織寬鬆合身褲"
                            data-is-current="true"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584084720_org.jpg"
                            data-jan="4550584084720"
                            data-price="490"
                            data-pricekindlist=""
                            data-new="false"
                            data-stock="STOCK"
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
                                  src="https://www.muji.com/public/media/img/item/4550584084720_99_95.jpg"
                                  alt="米色"
                                  title="米色"
                                  data-src="https://www.muji.com/public/media/img/item/4550584084720_99_95.jpg"
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
                            data-name="兒童彈性綾織寬鬆合身褲"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584084775_org.jpg"
                            data-jan="4550584084775"
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
                                  src="https://www.muji.com/public/media/img/item/4550584084775_99_95.jpg"
                                  alt="深米"
                                  title="深米"
                                  data-src="https://www.muji.com/public/media/img/item/4550584084775_99_95.jpg"
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
                            data-name="兒童彈性綾織寬鬆合身褲"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584084829_org.jpg"
                            data-jan="4550584084829"
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
                                  src="https://www.muji.com/public/media/img/item/4550584084829_99_95.jpg"
                                  alt="深綠"
                                  title="深綠"
                                  data-src="https://www.muji.com/public/media/img/item/4550584084829_99_95.jpg"
                                  data-expand="300"
                                />
                              </picture>
                            </div>
                          </button>
                        </li>
                      </ul>
                      <h4 className="sf-simpleBff_productsItemHeading">
                        兒童彈性綾織寬鬆合身褲
                      </h4>
                      <div className="sf-simpleBff_productsItemDetail">
                        <p className="sf-simpleBff_productsItemPrice">
                          售價
                          <span className="sf-simpleBff_productsItemPriceBlock">
                            <span className="sf-simpleBff_productsItemPriceNum">
                              590
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
          </div>

          <div className="products__wearing sf-u-mt_xl sf-u-contents_mobile sf-u-contents_tablet">
            <h3 className="sf-heading -h3 products__subTitle sf-u-mb_xxxs-mobile sf-u-mb_xxxs-tablet sf-u-mb_xxs-desktop sf-u-font_center sf-u-font_size-m sf-u-font_gothicMB-m">
              其他穿著商品
            </h3>

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
                  className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584161094"
                  href="https://api.91app.com/es/Redirect/41566/4550584161094"
                  data-current-chip="4550584161094"
                >
                  <div className="sf-simpleBff_productsItemHead">
                    <div className="sf-u-imgAdjustBox" data-aspect-ratio="1:1">
                      <picture className="sf-u-imgAdjustBox_inner">
                        <img
                          className="sf-u-img js-sf-simpleBff_productsItemImage lazyloaded"
                          src="https://www.muji.com/public/media/img/item/4550584161094_org.jpg"
                          alt="兒童圓領長袖T恤 素色"
                          data-src="https://www.muji.com/public/media/img/item/4550584161094_org.jpg"
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
                          data-name="兒童圓領長袖T恤 素色"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584160998_org.jpg"
                          data-jan="4550584160998"
                          data-price="790"
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
                                className="sf-u-img ls-is-cached lazyloaded"
                                src="https://www.muji.com/public/media/img/item/4550584160998_99_95.jpg"
                                alt="柔白"
                                title="柔白"
                                data-src="https://www.muji.com/public/media/img/item/4550584160998_99_95.jpg"
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
                          data-name="兒童圓領長袖T恤 素色"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584161049_org.jpg"
                          data-jan="4550584161049"
                          data-price="790"
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
                                className="sf-u-img ls-is-cached lazyloaded"
                                src="https://www.muji.com/public/media/img/item/4550584161049_99_95.jpg"
                                alt="墨灰"
                                title="墨灰"
                                data-src="https://www.muji.com/public/media/img/item/4550584161049_99_95.jpg"
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
                          data-name="兒童圓領長袖T恤 素色"
                          data-is-current="true"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584161094_org.jpg"
                          data-jan="4550584161094"
                          data-price="790"
                          data-pricekindlist=""
                          data-new="false"
                          data-stock="STOCK"
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
                                className="sf-u-img ls-is-cached lazyloaded"
                                src="https://www.muji.com/public/media/img/item/4550584161094_99_95.jpg"
                                alt="黑色"
                                title="黑色"
                                data-src="https://www.muji.com/public/media/img/item/4550584161094_99_95.jpg"
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
                          data-name="兒童圓領長袖T恤 素色"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584161148_org.jpg"
                          data-jan="4550584161148"
                          data-price="790"
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
                                className="sf-u-img ls-is-cached lazyloaded"
                                src="https://www.muji.com/public/media/img/item/4550584161148_99_95.jpg"
                                alt="煙燻綠"
                                title="煙燻綠"
                                data-src="https://www.muji.com/public/media/img/item/4550584161148_99_95.jpg"
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
                          data-name="兒童圓領長袖T恤 素色"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584161193_org.jpg"
                          data-jan="4550584161193"
                          data-price="790"
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
                                src="https://www.muji.com/public/media/img/item/4550584161193_99_95.jpg"
                                alt="淡藍"
                                title="淡藍"
                                data-src="https://www.muji.com/public/media/img/item/4550584161193_99_95.jpg"
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
                          data-name="兒童圓領長袖T恤 素色"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584161247_org.jpg"
                          data-jan="4550584161247"
                          data-price="790"
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
                                className="sf-u-img ls-is-cached lazyloaded"
                                src="https://www.muji.com/public/media/img/item/4550584161247_99_95.jpg"
                                alt="煙燻紫"
                                title="煙燻紫"
                                data-src="https://www.muji.com/public/media/img/item/4550584161247_99_95.jpg"
                                data-expand="300"
                              />
                            </picture>
                          </div>
                        </button>
                      </li>
                    </ul>
                    <h4 className="sf-simpleBff_productsItemHeading">
                      兒童圓領長袖T恤 素色
                    </h4>
                    <div className="sf-simpleBff_productsItemDetail">
                      <p className="sf-simpleBff_productsItemPrice">
                        售價
                        <span className="sf-simpleBff_productsItemPriceBlock">
                          <span className="sf-simpleBff_productsItemPriceNum">
                            290
                          </span>
                          元
                        </span>
                      </p>
                      <div className="sf-simpleBff_productsItemStatus"></div>
                      <div className="sf-simpleBff_productsItemButton"></div>
                    </div>
                  </div>
                </a>

                <a
                  className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584280269"
                  href="https://api.91app.com/es/Redirect/41566/4550584280269"
                  data-current-chip="4550584280269"
                >
                  <div className="sf-simpleBff_productsItemHead">
                    <div className="sf-u-imgAdjustBox" data-aspect-ratio="1:1">
                      <picture className="sf-u-imgAdjustBox_inner">
                        <img
                          className="sf-u-img js-sf-simpleBff_productsItemImage lazyloaded"
                          src="https://www.muji.com/public/media/img/item/4550584280269_org.jpg"
                          alt="兒童撥水加工連帽外套"
                          data-src="https://www.muji.com/public/media/img/item/4550584280269_org.jpg"
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
                          data-name="兒童撥水加工連帽外套"
                          data-is-current="true"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584280269_org.jpg"
                          data-jan="4550584280269"
                          data-price="2,990"
                          data-pricekindlist=""
                          data-new="false"
                          data-stock="STOCK"
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
                                className="sf-u-img ls-is-cached lazyloaded"
                                src="https://www.muji.com/public/media/img/item/4550584280269_99_95.jpg"
                                alt="卡其綠"
                                title="卡其綠"
                                data-src="https://www.muji.com/public/media/img/item/4550584280269_99_95.jpg"
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
                          data-name="兒童撥水加工連帽外套"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584280313_org.jpg"
                          data-jan="4550584280313"
                          data-price="2,990"
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
                                className="sf-u-img ls-is-cached lazyloaded"
                                src="https://www.muji.com/public/media/img/item/4550584280313_99_95.jpg"
                                alt="深藍"
                                title="深藍"
                                data-src="https://www.muji.com/public/media/img/item/4550584280313_99_95.jpg"
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
                          data-name="兒童撥水加工連帽外套"
                          data-is-current="false"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584280368_org.jpg"
                          data-jan="4550584280368"
                          data-price="2,990"
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
                                className="sf-u-img ls-is-cached lazyloaded"
                                src="https://www.muji.com/public/media/img/item/4550584280368_99_95.jpg"
                                alt="煙燻紫"
                                title="煙燻紫"
                                data-src="https://www.muji.com/public/media/img/item/4550584280368_99_95.jpg"
                                data-expand="300"
                              />
                            </picture>
                          </div>
                        </button>
                      </li>
                    </ul>
                    <h4 className="sf-simpleBff_productsItemHeading">
                      兒童撥水加工連帽外套
                    </h4>
                    <div className="sf-simpleBff_productsItemDetail">
                      <p className="sf-simpleBff_productsItemPrice">
                        售價
                        <span className="sf-simpleBff_productsItemPriceBlock">
                          <span className="sf-simpleBff_productsItemPriceNum">
                            990
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
          <div className="products__column columnBox sf-u-mt_m-mobile sf-u-mt_m-tablet sf-u-contents_mobile sf-u-contents_tablet">
            <details className="js-setUp-details columnBox__inner sf-u-bg_beige-250 sf-u-only_mobileAndTablet">
              <summary className="columnBox__button js-setUp-detailsSummary">
                <div className="sf-u-contents_mobile sf-u-contents_tablet sf-u-py_m">
                  <span className="columnBox__title sf-u-font_size-s sf-u-font_weight-bold">
                    無印良品童裝的褲款能配合孩童的成長進行調整，長久穿著。
                  </span>
                </div>
              </summary>
              <div className="columnBox__content js-setUp-detailsContent sf-u-contents_mobile sf-u-contents_tablet sf-u-pb_m">
                <figure
                  className="sf-u-imgAdjustBox"
                  data-mobile-aspect-ratio="63:46"
                  data-tablet-aspect-ratio="63:46"
                  data-desktop-aspect-ratio="392:263"
                >
                  <picture className="sf-u-imgAdjustBox_inner">
                    <source
                      data-srcset="/src/assets/img/kids/look06-column-desktop.jpg"
                      media="(min-width: 1000px)"
                      type="image/jpeg"
                    />
                    <img
                      className="sf-u-img lazyload"
                      src="/src/assets/img/kids/look06-column.jpg"
                      data-src="/src/assets/img/kids/look06-column.jpg"
                      alt=""
                      data-expand="300"
                    />
                  </picture>
                </figure>
                <p className="columnBox__text sf-u-mt_m sf-u-font_size-xs">
                  腰間有調整鬆緊帶用的開口，只要將鬆緊帶拉出並自行縫合固定，就可配合孩童的體型和發育狀況調整。另外，因為鬆緊帶並沒有固定，故可抽出且更換鬆緊帶。並且也將衣物傳承想法考量進去，為了能長久穿著。
                </p>
              </div>
            </details>
            <div className="columnBox__inner sf-u-bg_beige-250 sf-u-only_desktop sf-u-mt_xl-desktop">
              <h3 className="sf-heading -h3 columnBox__title sf-u-font_center sf-u-font_gothicMB-b sf-u-font_size-s-mobile sf-u-font_size-s-tablet sf-u-font_size-l-desktop">
                無印良品童裝的褲款能配合孩童的成長進行調整，長久穿著。
              </h3>
              <div className="columnBox__content sf-u-mt_xl-desktop">
                <div className="columnBox__img">
                  <figure
                    className="sf-u-imgAdjustBox"
                    data-mobile-aspect-ratio="63:46"
                    data-tablet-aspect-ratio="63:46"
                    data-desktop-aspect-ratio="392:263"
                  >
                    <picture className="sf-u-imgAdjustBox_inner">
                      <source
                        data-srcset="/src/assets/img/kids/look06-column-desktop.jpg"
                        media="(min-width: 1000px)"
                        type="image/jpeg"
                      />
                      <img
                        className="sf-u-img lazyload"
                        src="/src/assets/img/kids/look06-column.jpg"
                        data-src="/src/assets/img/kids/look06-column.jpg"
                        alt=""
                        data-expand="300"
                      />
                    </picture>
                  </figure>
                </div>
                <p className="columnBox__text sf-u-font_lineHeight180-desktop">
                  腰間有調整鬆緊帶用的開口，只要將鬆緊帶拉出並自行縫合固定，就可配合孩童的體型和發育狀況調整。另外，因為鬆緊帶並沒有固定，故可抽出且更換鬆緊帶。並且也將衣物傳承想法考量進去，為了能長久穿著。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="products__l_img products__item sf-u-mt_xxlExt sf-u-pt_xl-mobile sf-u-pt_xl-tablet sf-u-pt_xxxl-desktop typeA">
          <div className="products__inner">
            <h2 className="sf-heading -h2 products__heading sf-u-font_gothicMB-b sf-u-font_size-xl-mobile sf-u-font_size-xl-tablet sf-u-font_size-xxxxl-desktop sf-u-font_center-mobile sf-u-font_center-tablet sf-u-font_lineHeight150-desktop">
              家居睡衣
            </h2>

            <div className="products__mainImg sf-u-mt_m-mobile sf-u-mt_m-tablet">
              <figure
                className="sf-u-imgAdjustBox"
                data-mobile-aspect-ratio="75:92"
                data-tablet-aspect-ratio="75:92"
                data-desktop-aspect-ratio="4:3"
              >
                <picture className="sf-u-imgAdjustBox_inner">
                  <source
                    data-srcset="/src/assets/img/kids/look07-01-desktop.jpg"
                    media="(min-width: 1000px)"
                    type="image/jpeg"
                  />

                  <img
                    className="sf-u-img lazyload"
                    src="/src/assets/img/kids/look07-01.jpg"
                    data-src="/src/assets/img/kids/look07-01.jpg"
                    alt="兒童動物紋樣裏毛家居睡衣"
                    data-expand="300"
                  />
                </picture>
              </figure>
            </div>
            <p className="products__caption sf-u-mt_xxxsExt sf-u-contents_mobile sf-u-contents_tablet sf-u-font_size-xxxs-mobile sf-u-font_size-xxxs-tablet sf-u-font_size-xxs-desktop">
              模特兒身高：123cm/穿著尺寸為120
              <br />
              ※無標明於此的商品為參考用商品
            </p>
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
                    className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584025181"
                    href="https://api.91app.com/es/Redirect/41566/4550584025181"
                    data-current-chip="4550584025181"
                  >
                    <div className="sf-simpleBff_productsItemHead">
                      <div
                        className="sf-u-imgAdjustBox"
                        data-aspect-ratio="1:1"
                      >
                        <picture className="sf-u-imgAdjustBox_inner">
                          <img
                            className="sf-u-img js-sf-simpleBff_productsItemImage lazyloaded"
                            src="https://www.muji.com/public/media/img/item/4550584025181_org.jpg"
                            alt="兒童動物紋樣裏毛家居睡衣"
                            data-src="https://www.muji.com/public/media/img/item/4550584025181_org.jpg"
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
                            data-name="兒童動物紋樣裏毛家居睡衣"
                            data-is-current="true"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584025181_org.jpg"
                            data-jan="4550584025181"
                            data-price="3,990"
                            data-pricekindlist=""
                            data-new="false"
                            data-stock="STOCK"
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
                                  src="https://www.muji.com/public/media/img/item/4550584025181_99_95.jpg"
                                  alt="ライトイエロー"
                                  title="ライトイエロー"
                                  data-src="https://www.muji.com/public/media/img/item/4550584025181_99_95.jpg"
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
                            data-name="兒童動物紋樣裏毛家居睡衣"
                            data-is-current="false"
                            data-image-url="https://www.muji.com/public/media/img/item/4550584025204_org.jpg"
                            data-jan="4550584025204"
                            data-price="3,990"
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
                                  src="https://www.muji.com/public/media/img/item/4550584025204_99_95.jpg"
                                  alt="ライト藍色"
                                  title="ライト藍色"
                                  data-src="https://www.muji.com/public/media/img/item/4550584025204_99_95.jpg"
                                  data-expand="300"
                                />
                              </picture>
                            </div>
                          </button>
                        </li>
                      </ul>
                      <h4 className="sf-simpleBff_productsItemHeading">
                        兒童動物紋樣裏毛家居睡衣
                      </h4>
                      <div className="sf-simpleBff_productsItemDetail">
                        <p className="sf-simpleBff_productsItemPrice">
                          售價
                          <span className="sf-simpleBff_productsItemPriceBlock">
                            <span className="sf-simpleBff_productsItemPriceNum">
                              990
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
          </div>

          <div className="products__otherItem sf-u-mt_xl sf-u-contents_mobile sf-u-contents_tablet">
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
                  className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584078385"
                  href="https://api.91app.com/es/Redirect/41566/4550584078385"
                  data-current-chip="4550584078385"
                >
                  <div className="sf-simpleBff_productsItemHead">
                    <div className="sf-u-imgAdjustBox" data-aspect-ratio="1:1">
                      <picture className="sf-u-imgAdjustBox_inner">
                        <img
                          className="sf-u-img js-sf-simpleBff_productsItemImage lazyloaded"
                          src="https://www.muji.com/public/media/img/item/4550584078385_org.jpg"
                          alt="兒童動物紋樣拳擊內褲/2入"
                          data-src="https://www.muji.com/public/media/img/item/4550584078385_org.jpg"
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
                          data-name="兒童動物紋樣拳擊內褲/2入"
                          data-is-current="true"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584078385_org.jpg"
                          data-jan="4550584078385"
                          data-price="1,290"
                          data-pricekindlist=""
                          data-new="false"
                          data-stock="STOCK"
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
                                src="https://www.muji.com/public/media/img/item/4550584078385_99_95.jpg"
                                alt="ライト藍色"
                                title="ライト藍色"
                                data-src="https://www.muji.com/public/media/img/item/4550584078385_99_95.jpg"
                                data-expand="300"
                              />
                            </picture>
                          </div>
                        </button>
                      </li>
                    </ul>
                    <h4 className="sf-simpleBff_productsItemHeading">
                      兒童動物紋樣拳擊內褲/2入
                    </h4>
                    <div className="sf-simpleBff_productsItemDetail">
                      <p className="sf-simpleBff_productsItemPrice">
                        售價
                        <span className="sf-simpleBff_productsItemPriceBlock">
                          <span className="sf-simpleBff_productsItemPriceNum">
                            390
                          </span>
                          元
                        </span>
                      </p>
                      <div className="sf-simpleBff_productsItemStatus"></div>
                      <div className="sf-simpleBff_productsItemButton"></div>
                    </div>
                  </div>
                </a>

                <a
                  className="sf-simpleBff_productsItem js-sf-simpleBff_productsItem jan-4550584078521"
                  href="https://api.91app.com/es/Redirect/41566/4550584078521"
                  data-current-chip="4550584078521"
                >
                  <div className="sf-simpleBff_productsItemHead">
                    <div className="sf-u-imgAdjustBox" data-aspect-ratio="1:1">
                      <picture className="sf-u-imgAdjustBox_inner">
                        <img
                          className="sf-u-img js-sf-simpleBff_productsItemImage lazyloaded"
                          src="https://www.muji.com/public/media/img/item/4550584078521_org.jpg"
                          alt="兒童動物紋樣內褲/2入"
                          data-src="https://www.muji.com/public/media/img/item/4550584078521_org.jpg"
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
                          data-name="兒童動物紋樣內褲/2入"
                          data-is-current="true"
                          data-image-url="https://www.muji.com/public/media/img/item/4550584078521_org.jpg"
                          data-jan="4550584078521"
                          data-price="1,290"
                          data-pricekindlist=""
                          data-new="false"
                          data-stock="STOCK"
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
                                src="https://www.muji.com/public/media/img/item/4550584078521_99_95.jpg"
                                alt="ライトピンク"
                                title="ライトピンク"
                                data-src="https://www.muji.com/public/media/img/item/4550584078521_99_95.jpg"
                                data-expand="300"
                              />
                            </picture>
                          </div>
                        </button>
                      </li>
                    </ul>
                    <h4 className="sf-simpleBff_productsItemHeading">
                      兒童動物紋樣內褲/2入
                    </h4>
                    <div className="sf-simpleBff_productsItemDetail">
                      <p className="sf-simpleBff_productsItemPrice">
                        售價
                        <span className="sf-simpleBff_productsItemPriceBlock">
                          <span className="sf-simpleBff_productsItemPriceNum">
                            390
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
        </div>
      </section>
    </>
  );
};

export default KidProductBlock;
