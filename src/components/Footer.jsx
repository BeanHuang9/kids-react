import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.muji.com/js/include-header-footer.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // 清除 script
    };
  }, []);

  return (
    <div>
      <footer id="globalFooter" className="sf-footer"></footer>
    </div>
  );
};

export default Footer;
