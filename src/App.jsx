import { useEffect, useState } from "react";
import { getCurrencies } from "./api/api";
import Convert from "./components/Convert";
import Header from "./components/Header";

function App() {
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

  if (!currencies) return null;

  return (
    <>
      <Header currencies={currencies} isLoading={loading} />
      <Convert />
    </>
  );
}

export default App;
