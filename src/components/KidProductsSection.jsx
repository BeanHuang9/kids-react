import KidProductItem from "./KidProductItem";

const KidProductsSection = () => {
  const products = [
    { title: <>二重織<br className="sf-u-only_desktop" />休閒圓領衫</>, type: "typeB" },
    { title: <>圓領<br className="sf-u-only_desktop" />長袖T恤</>, type: "typeB" },
    { title: "雙面起毛法蘭絨長袖襯衫", type: "typeA" },
    { title: "撥水加工連帽外套", type: "typeA", reverse: true },
    { title: "緊身長褲", type: "typeA" },
    { title: "彈性綾織褲", type: "typeA", reverse: true },
    { title: "家居睡衣", type: "typeA" },
  ];

  return (
    <section className="products sf-u-contents_desktop">
      {products.map((product, index) => (
        <KidProductItem
          key={index}
          title={product.title}
          type={product.type}
          reverse={product.reverse}
        />
      ))}
    </section>
  );
};

export default KidProductsSection;
