import { useEffect, useState } from "react";

const useProduct = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
      fetch('https://amazon-server-0ihd.onrender.com/product')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, []);
  return [product];
};

export default useProduct;
