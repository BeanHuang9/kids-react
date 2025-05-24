import logo from "@/assets/img/logo_muji_b.png";
// console.log("logo path:", logo);

const Header = () => {
  return (
    <header id="globalHeader">
      <div className="headerWrap">
        <h1 id="siteName">
          <a href="https://shop.muji.tw/">
            <img src={logo} alt="MUJI" />
          </a>
        </h1>
        <nav id="hGlobalNav">
          <h1>選單</h1>
          <div className="wrapper">
            <div className="cancel"></div>
            <ul>
              <li className="home">
                <a href="https://shop.muji.tw/">首頁</a>
              </li>
              <li>
                <a href="https://shop.muji.tw/">商品情報</a>
              </li>
              <li>
                <a href="https://shop.muji.tw/site/events">門市活動講座</a>
              </li>
              <li>
                <a href="https://www.muji.com/tw/aboutus/">企業情報</a>
              </li>
              <li>
                <a href="https://www.muji.com/tw/business/">大宗採購</a>
              </li>
              <li>
                <a href="https://www.muji.com/tw/shop_develop/">展店合作</a>
              </li>
              <li>
                <a href="https://consumerservice.muji.tw/">顧客服務</a>
              </li>
              <li>
                <a href="https://shop.muji.tw/v2/Shop/StoreList/40820">
                  店鋪情報
                </a>
              </li>
              <li>
                <a href="https://www.muji.com/tw/news/">最新消息</a>
              </li>
              <li>
                <a href="https://renovation.muji.tw/">空間改造服務</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
