import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <>
      <div>ProductDetail</div>
      <p>{id}</p>
      <Link to={".."} relative="path">Back</Link>
    </>
  );
};

export default ProductDetail;
