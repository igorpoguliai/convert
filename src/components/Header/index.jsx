import { useEffect, useState } from "react";
import { getCurrencies } from "../../api/api";
import { StylesHeader } from "./styles";
import { getFormatedCurrency } from "../../utils/helpers";
import Loader from "../../common/Loader";

export default function Header() {
  const [currencies, setCurrencies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCurrencies()
      .then((data) => {
        setCurrencies(data);
        setLoading(false);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <StylesHeader isLoading={loading}>
      {loading ? (
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
