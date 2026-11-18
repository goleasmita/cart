import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  return (
    <div>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-lg-12">
            {cartItems.map((v) => (
              <>
                <div className="row">
                  <div className="col-lg-3">
                    <img src={v.images} style={{ height: "100px" }} alt="" />
                  </div>
                  <div className="col-lg-5">
                    <h4>{v.title}</h4>
                    <span>{v.price}</span>
                  </div>
                </div>
              </>
            ))}

            <button onClick={() => dispatch(clearCart())}>clear cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
