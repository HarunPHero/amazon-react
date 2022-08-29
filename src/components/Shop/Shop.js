import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDb} from "../../utilities/fakedb";
import "./Shop.css";
import { Link } from "react-router-dom";
import useCart from "../../useProducts/useCart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [pd, setPd] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(12);

  useEffect(() => {
    fetch("http://localhost:5000/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.countProduct;
        const pages = Math.ceil(count / 12);
        setpageCount(pages);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setPd(data);
      });
  }, [page, size]);
  ///////////////////////////////////////////////////////////////
  const handleAddtoCart = (pd) => {
    const newCart = [...cart, pd];
    setCart(newCart);
    ///save to local storage
    addToDb(pd._id);
  };

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
              key={product._id}
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
            {/* <a href="/order" className="btn btn-warning">
              Review your order
            </a> */}
            <Link to="/order">
              <button className="btn btn-warning">Review your order</button>
            </Link>
          </Cart>
        </div>
      </div>
      <div>
        <ul className="pagination pagination-md m-2">
          {[...Array(pageCount).keys()].map((number) => (
            <>
              <nav aria-label="...">
                <li className="page-item" key={number}>
                  <button
                    className={
                      page === number ? "btn btn-dark" : "btn btn-warning"
                    }
                    onClick={() => setPage(number)}
                  >
                    {number}
                  </button>
                </li>
              </nav>
            </>
          ))}
          
          <select onChange={(e) => setSize(e.target.value)}>
            <option value="6">6</option>
            <option value="12" selected>
              12
            </option>
            <option value="18">18</option>
            <option value="24">24</option>
          </select>
        </ul>
      </div>
    </>
  );
};

export default Shop;
