// @ts-nocheck
import React, { useEffect } from "react";
import NavLink from "../../components/NavLink";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../rtk/products/productsSlice";
import Loader from "../../components/Loader";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct(productId));
  }, []);

  if (!product) {
    return <Loader />;
  }

  return (
    <>
      <NavLink navName="PRODUCT DETAILS" />
      <div className="bg-white mt-5 rounded-lg p-5 flex-1 ">
        <div className="flow-root">
          <dl className="-my-3 divide-y divide-gray-100 text-sm">
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Title</dt>
              <dd className="text-gray-700 sm:col-span-2">{product.title}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Description</dt>
              <dd className="text-gray-700 sm:col-span-2">
                {product.description}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Price</dt>
              <dd className="text-gray-700 sm:col-span-2">{product.price} $</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Stock</dt>
              <dd className="text-gray-700 sm:col-span-2">{product.stock}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dd className="text-gray-700 sm:col-span-2">
                <Link
                  to={`/edit_product/${product.id}`}
                  className="btn btn-wide btn-primary text-white"
                >
                  {/* <FaUserEdit style={{ width: "25px", height: "25px" }} /> */}
                  <span>Edit Product</span>
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
