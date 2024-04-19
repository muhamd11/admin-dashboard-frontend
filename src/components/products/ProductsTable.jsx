// @ts-nocheck
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, getAllProducts } from "../../rtk/products/productsSlice";
import Loader from "../Loader";
import Swal from "sweetalert2";

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isSuccess } = useSelector(
    (state) => state.products
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "short",
      day: "2-digit",
      timeZone: "UTC",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const handleDelete = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(productId)).then(() => {
          dispatch(getAllProducts());
        });
        if (isSuccess) {
          Swal.fire("Deleted!", "Your item has been deleted.", "success");
        }
      }
    });
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  if (isLoading || !products) {
    return <Loader />;
  }

  return (
    <div className="overflow-x-auto mt-5 ">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Title
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Description
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Price
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Created At
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              stock
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 ">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="whitespace-nowrap px-4 text-center py-2 font-medium text-gray-900">
                {product.title}
              </td>
              <td className="whitespace-nowrap px-4 text-center py-2 text-gray-700 truncate max-w-[200px]">
                {product.description}
              </td>
              <td className="whitespace-nowrap px-4 text-center py-2 text-gray-700">
                {product.price} $
              </td>
              <td className="whitespace-nowrap px-4 text-center py-2 text-gray-700">
                {formatDate(product.created_at)}
              </td>
              <td className="whitespace-nowrap px-4 text-center py-2 text-gray-700">
                {product.stock}
              </td>
              <td className="whitespace-nowrap px-4 text-center py-2">
                <Link
                  to={`/product_details/${product.id}`}
                  className="inline-block mr-2 rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  View
                </Link>
                <button
                    onClick={() => handleDelete(product.id)}
                  className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
