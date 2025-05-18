import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.muji.com/js/include-header-footer.js";
    script.async = true;

    script.onload = () => {
      console.log("footer script loaded");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <footer id="globalFooter" className="sf-footer"></footer>;
};

export default Footer;
