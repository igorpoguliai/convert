import Select from "../../../common/Select";
import Input from "../../../common/Input";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg";
import PropTypes from "prop-types";

function ItemConvert({ options, value, onChange, inputValue, onInputChange }) {
  return (
    <div>
      <Select
        Icon={ArrowIcon}
        options={options}
        value={value}
        onChange={onChange}
      />
      <Input value={inputValue} onChange={onInputChange} />
    </div>
  );
}

ItemConvert.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default ItemConvert;
