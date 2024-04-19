// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct, getProduct } from "../../rtk/products/productsSlice";
import Loader from "../../components/Loader";
import Swal from "sweetalert2";
import NavLink from "../../components/NavLink";

const EditProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product, isSuccess } = useSelector((state) => state.products);

  const [title, setTitle] = useState(product?.title);
  const [description, setDescription] = useState(product?.description);
  const [price, setPrice] = useState(product?.price);
  const [stock, setStock] = useState(product?.stock);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      title,
      description,
      price,
      stock,
    };
    try {
      dispatch(
        updateProduct({ productId: productId, productData: productData })
      );
      if (isSuccess) {
        navigate(`/product_details/${productId}`);
        Swal.fire({
          title: "Success!",
          text: "Updated successfully",
          icon: "success",
          confirmButtonText: "Continue",
        });
      }
    } catch (error) {
      Swal.fire({
        text: error,
        icon: "error",
      });
    }
  };

  useEffect(() => {
    dispatch(getProduct(productId));
  }, []);

  if (!product) {
    return <Loader />;
  }
  return (
    <div>
      <NavLink navName="EDIT PRODUCT" />
      <section className="bg-white mt-5 rounded-lg p-5">
        <div className="">
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 flex items-center gap-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Edit Product
              </h1>

              <form
                onSubmit={handleSubmit}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>

                  <input
                    type="text"
                    id="Title"
                    name="title"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>

                  <input
                    type="text"
                    id="Description"
                    name="description"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Price
                  </label>

                  <input
                    type="number"
                    id="Price"
                    name="price"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Stock"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Stock
                  </label>

                  <input
                    type="number"
                    id="Stock"
                    name="stock"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Update Product
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default EditProduct;
