import ColorChipButton from './ColorChipButton';

const ColorChips = ({ colors, name, selectedJan, onSelectJan }) => {
  return (
    <ul
      className="sf-simpleBff_productsItemColorChips js-sf-simpleBff_productsItemColorChips"
      aria-label="色展開"
    >
      {colors.map((color, index) => (
        <li key={index}>
          <ColorChipButton
            color={color}
            name={name}
            isSelected={color.jan === selectedJan}
            onClick={() => onSelectJan(color.jan)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ColorChips;
