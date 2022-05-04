import { useState } from "react";
import { SelectWrapper, SelectStyled, Wrapper } from "./styles";
import PropTypes from "prop-types";

function Select({ Icon, options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSelectClick() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <SelectWrapper>
      <SelectStyled
        value={value}
        onChange={onChange}
        onClick={handleSelectClick}
      >
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </SelectStyled>
      <Wrapper isOpen={isOpen}>{Icon && <Icon />}</Wrapper>
    </SelectWrapper>
  );
}

Select.propTypes = {
  Icon: PropTypes.object,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
