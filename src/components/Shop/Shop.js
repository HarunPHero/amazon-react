import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [pd, setPd] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setPd(data);
      });
  }, []);
  ///////////////////////////////////////////////////////////////
  const handleAddtoCart = (pd) => {
    const newCart = [...cart, pd];
    setCart(newCart);
    ///save to local storage
    addToDb(pd.key);
  };

  useEffect(() => {
    const saveCart = getStoredCart();

    const storedCart = [];
    if (products.length) {
      for (const key in saveCart) {
        const addedProduct = products.find((product) => product.key === key);

        if (addedProduct) {
          const quantity = saveCart[key];
          addedProduct.quantity = quantity;
          // console.log(storedCart)

          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);
  ////////////////////////////////////////////////////////////////////////////
  //handle search
  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(matchedProduct.length);
    setPd(matchedProduct);
  };

  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <form className="d-flex">
            <input
              onChange={handleSearch}
              className="form-control w-100"
              type="search"
              placeholder="Search product"
              aria-label="Search"
            ></input>
          </form>
        </div>
      </nav>
      <div className="shopContainer">
        <div className="productContainer row row-cols-1 row-cols-md-2 m-2 ">
          {pd.map((product) => (
            <Product
              key={product.key}
              img={product.img}
              name={product.name}
              seller={product.seller}
              price={parseInt(product.price)}
              stock={product.stock}
              url={product.url}
              handleAddtoCart={handleAddtoCart}
              product={product}
            ></Product>
          ))}
        </div>
        <div className="cart-container fixed-bottom">
          <Cart cart={cart}>
            <a href="/order" className="btn btn-warning">Review your order</a>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
