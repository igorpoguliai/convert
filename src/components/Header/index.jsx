import { StylesHeader } from "./styles";
import { getFormatedCurrency } from "../../utils/helpers";
import Loader from "../../common/Loader";
import PropTypes from "prop-types";

function Header({ currencies, isLoading }) {
  return (
    <StylesHeader isLoading={isLoading}>
      {isLoading ? (
        <Loader />
      ) : (
        Object.keys(currencies).map((key) => (
          <div key={key}>
            {getFormatedCurrency(key, currencies[key]).slice(0, 13)}
          </div>
        ))
      )}
    </StylesHeader>
  );
}

Header.propTypes = {
  currencies: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  isLoading: PropTypes.bool,
};

export default Header;
