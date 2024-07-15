import React from "react";
import { useNavigate } from "react-router-dom";

export default function SiteHeader() {
  const navigator = useNavigate();

  return (
    <div className="bg-secondary p-3">
      <h3>SkillHub</h3>
      <div className="row justify-content-center pt-2 pb-1">
        <div className="col-sm-12 col-lg-g col-md-7 col-xl-5 d-flex">
          <button
            className="btn btn-success me-4"
            onClick={() => navigator("/")}
          >
            Home
          </button>
          <input
            className="form-control"
            type="search"
            placeholder="search...."
          />
          <button className="btn btn-success ms-4" onClick={()=>navigator('/cart')}>cart</button>
        </div>
      </div>
    </div>
  );
}
