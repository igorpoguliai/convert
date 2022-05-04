import { InputStyles } from "./styles";
import PropTypes from "prop-types";

function Input({ onChange, value }) {
  return <InputStyles type="number" onChange={onChange} value={value} />;
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Input;
