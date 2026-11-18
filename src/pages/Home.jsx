import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { addToCart } from "../redux/slice";

export default function Home() {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const apiData = await res.json();
      setData(apiData.products);
    };
    fetchData();
  }, []);

  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    const alreadyInCart = cartItems.some((item) => item.id === product.id);
    if (alreadyInCart) {
      alert("Product is already in cart");
      return;
    }
    dispatch(addToCart(product));
    alert("added to cart");
  };

  return (
    <div>
      <div className="container mt-5 pt-5">
        <div className="row">
          {data.map((v) => (
            <>
              <div className="col-md-3">
                <div className="card">
                  <Link to={`/detail/${v.id}`}>
                    {" "}
                    <img src={v.images[0]} className="card-img-top" alt="..." />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{v.title}</h5>
                    <p className="card-text">{v.description.slice(0, 70)}</p>
                    <div className="d-flex justify-content-evenly">
                      <button className="btn btn-primary">{v.price}</button>
                      <button
                        className="btn btn-success"
                        onClick={() => handleAddToCart(v)}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
