import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import AddUser from "./pages/users/AddUser";
import UserDetails from "./pages/users/UserDetails";
import EditUser from "./pages/users/EditUser";
import ProductDetails from "./pages/products/ProductDetails";
import AddProduct from "./pages/products/AddProduct";
import EditProduct from "./pages/products/EditProduct";

const Logout = () => {
  localStorage.clear();
  return <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/add_user" element={<AddUser />} />
            <Route path="/user_details/:userId" element={<UserDetails />} />
            <Route path="/edit_user/:userId" element={<EditUser />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/product_details/:productId"
              element={<ProductDetails />}
            />
            <Route path="/add_product" element={<AddProduct />} />
            <Route path="/edit_product/:productId" element={<EditProduct />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
