import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";

const Navbar = () => {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");

  axios.defaults.withCredentials = true;


  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => {
        console.log(res.data.Status);
        if (res.data.Status === "Success") {
          console.log("log");
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
          setName("");
        }
      })
      .catch((err) => {
        setAuth(false);
        setName("");
      });
  }, [auth]);

  const handleLogout = () => {
    axios
      .get("http://localhost:5000/logout")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(false); // Đăng xuất thành công, cập nhật trạng thái auth
          setName(""); // Reset tên người dùng
          window.location.reload(true);
        } else {
          alert("Error during logout");
        }
      })
      .catch((err) => {
        alert("Error during logout");
      });
  };

  return (
    <div className="shadow-lg backdrop-blur-lg py-5 text-gray-900 bg-gray-50">
      <nav className="flex items-center container mx-auto">
        <div>
          <Link to="/" className="text-gray-700 italic text-7xl">
            ITS
          </Link>
        </div>
        <ul className="list-none flex justify-center items-center ml-auto gap-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/booking">Booking</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
          {auth ? (
            <>
              <li>
                <NavLink onClick={handleLogout}>Logout</NavLink>
              </li>
              <li>
                <NavLink to="/cart">
                  <FaShoppingCart />
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
