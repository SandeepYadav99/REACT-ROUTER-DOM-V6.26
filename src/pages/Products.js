import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const PRODUCTS = [
    { id: "p1", title: "Product 1" },
    { id: "p2", title: "Product 2" },
    { id: "p3", title: "Product 3" },
  ];
  return (
    <ul>
      {PRODUCTS.map((pro) => (
        <li key={pro.id}>
          <Link to={pro.id}>{pro.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Products;
