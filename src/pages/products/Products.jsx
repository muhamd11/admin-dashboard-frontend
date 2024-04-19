import React from "react";
import NavLink from "../../components/NavLink";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import ProductsTable from './../../components/products/ProductsTable';


const Products = () => {
  return (
    <div>
      <NavLink navName="PRODUCTS" />
      <div className="bg-white mt-5 rounded-lg p-5 max-h-[86vh]">
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <Link
            to="/add_product"
            className="btn btn-wide btn-primary text-white"
          >
            <FiShoppingBag style={{ width: "25px", height: "25px" }} />
            <span>Add New</span>
          </Link>
        </div>
        <ProductsTable />
      </div>
    </div>
  );
};

export default Products;
