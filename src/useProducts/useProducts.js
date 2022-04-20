import { useEffect, useState } from "react";

const useProduct = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
      fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, []);
  return [product];
};

export default useProduct;
