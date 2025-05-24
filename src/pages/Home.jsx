import { Link } from "react-router-dom";
import Banner from "@/components/Banner";
import heroImg from "@/assets/img/kids/hero.jpg";
import heroImgDesktop from "@/assets/img/kids/hero-desktop.jpg";
// import KidProductsSection from "@/components/KidProductsSection";
import KidProductBlock from "@/components/KidProductBlock";

const Home = () => {
  return (
    <main className="sf-main">
      <div className="sf-main_container">
        <Banner
          desktopImg={heroImgDesktop}
          mobileImg={heroImg}
          altText="鼓勵秋季的好奇心與成長 容易穿搭的童裝"
        />

        <div
          className="switcher sf-u-mt_l-mobile sf-u-mt_l-tablet sf-u-mt_xxxlExt-desktop"
          id="switcher"
        >
          <div className="sf-u-contents_mobile sf-u-contents_tablet sf-u-contents_desktop">
            <div className="switcher__list">
              <p className="switcher__item sf-u-font_gothicMB -current">兒童</p>
              <Link
                className="switcher__item sf-u-font_gothicMB"
                to="/baby#switcher"
              >
                幼兒
              </Link>
            </div>
          </div>
        </div>
        <div className="anchor sf-u-mt_xl-desktop">
          <div className="sf-u-contents_mobile sf-u-contents_tablet sf-u-contents_desktop sf-u-font_center">
            <button
              className="anchor__item sf-u-font_gothicMB-db js-sf-smoothScroll"
              type="button"
              data-link="#lineup"
            >
              瀏覽所有兒童秋季服裝
            </button>
          </div>
        </div>

        {/* <KidProductsSection /> */}

        <KidProductBlock />


      </div>
    </main>
  );
};

export default Home;
