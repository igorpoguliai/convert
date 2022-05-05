import { useEffect, useState } from "react";
import { ReactComponent as ReverseIcon } from "../../assets/icons/reverse.svg";
import { BlockConvert, ButtonReverse, Container, Title } from "./styles";
import { getCurrency } from "../../api/api";
import ItemConvert from "./ItemConvert";
import Loader from "../../common/Loader";

const currencies = ["USD", "UAH", "EUR", "GBP", "JPY", "CHF", "CNY"];

export default function Convert() {
  const [firstInputValue, setFirstInputValue] = useState(1);
  const [firstSelectValue, setFirstSelectValue] = useState(currencies[0]);

  const [secondInputValue, setSecondInputValue] = useState("");
  const [secondSelectValue, setSecondSelectValue] = useState(currencies[1]);

  const [currencyInfo, setCurrencyInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCurrency(firstSelectValue, secondSelectValue)
      .then((data) => {
        setCurrencyInfo(data[`${firstSelectValue}_${secondSelectValue}`]);
        setLoading(false);
      })
      .catch((err) => alert(err));
  }, [firstSelectValue, secondSelectValue]);

  useEffect(() => {
    setSecondInputValue(firstInputValue * currencyInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencyInfo]);

  function onFirstInputChange(event) {
    const { value } = event.target;
    setFirstInputValue(value);

    setSecondInputValue(value * currencyInfo);
  }

  function onSecondInputChange(event) {
    const { value } = event.target;

    setSecondInputValue(value);

    setFirstInputValue(value / currencyInfo);
  }

  function onReverseClick() {
    setFirstSelectValue(secondSelectValue);
    setSecondSelectValue(firstSelectValue);
  }

  return (
    <Container>
      <Title>Currency Converter</Title>
      <BlockConvert>
        <ItemConvert
          options={currencies.filter((item) => item !== secondSelectValue)}
          value={firstSelectValue}
          onChange={(e) => setFirstSelectValue(e.target.value)}
          inputValue={firstInputValue}
          onInputChange={onFirstInputChange}
        />
        {loading ? (
          <Loader />
        ) : (
          <ButtonReverse onClick={onReverseClick}>
            <ReverseIcon />
          </ButtonReverse>
        )}
        <ItemConvert
          options={currencies.filter((item) => item !== firstSelectValue)}
          value={secondSelectValue}
          onChange={(e) => setSecondSelectValue(e.target.value)}
          inputValue={secondInputValue}
          onInputChange={onSecondInputChange}
        />
      </BlockConvert>
    </Container>
  );
}
