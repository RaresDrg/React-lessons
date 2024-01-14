import PropTypes from "prop-types";

const SearchBar = ({ text, isVisible, price }) => {
  return (
    <div>
      {isVisible && "Afisez ceva"}

      <p>
        {text.length > 10
          ? `Textul: "${text}" are mai mult de 10 caractere`
          : `Textul: "${text}" are mai putin de 10 caractere`}
      </p>

      <h2>{text}</h2>
      <h2>{price}</h2>
    </div>
  );
};

SearchBar.propTypes = {
  text: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
  price: PropTypes.number.isRequired,
};

export default SearchBar;
