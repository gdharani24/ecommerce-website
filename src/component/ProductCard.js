import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const navigate = useNavigate();

  return (
    <div
      className="card m-2 cursor-pointer"
      style={{ width: 300 }}
      onClick={() => navigate(`/product/${props.id}`)}
    >
      <div>
        <img
          src={props.image}
          height={150}
          width={180}
          alt={props.description}
          className="border-radius-9 mt-4"
        />
      </div>
      <div className="card-body mt-2">
        <h5>
          {" "}
          <div className="card-title">{props.title}</div>
        </h5>
        <h6 className="mt-2">Price: {`$${props.price}`}</h6>
        <h6>Rating:{`$${props.rating.rate}`} </h6>
        <div>
          {props.rating.count > 0 ? (
            <button className="btn btn-success">Avaliable</button>
          ) : (
            <button className="btn btn-outline-danger">Out of stock</button>
          )}
        </div>
      </div>
    </div>
  );
}
