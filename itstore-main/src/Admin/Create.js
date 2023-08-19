import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import productApi from "../api/productApi";

function Create(props) {
  const [value, setValue] = useState({
    id: "",
    title: "",
    img: "",
    brand: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const addProduct = async () => {
      try {
        const res = await productApi.addProduct(value)
        navigate("/admin")
      } catch (error) {
        console.log(error);
      }
    }
    addProduct()


    // axios
    //   .post("http://localhost:3000/data", value)
    //   .then((res) => {
    //     console.log(res);
    //     navigate("/admin");
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="cointainer">
        <h2 className="text-2xl font-bold mb-4 ">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4 bg-blend-lighten boder border-gray-300">
              <div>
                <label htmlFor="id" className="block font-semibold">
                  ID
                </label>
                <input
                  required
                  placeholder="Nhập id"
                  type="text"
                  name="id"
                  className="w-full p-2 border rounded"
                  onChange={(e) => setValue({ ...value, id: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="title" className="block font-semibold">
                  Title
                </label>
                <input
                  required
                  placeholder="Nhập title"
                  type="text"
                  name="title"
                  className="w-full p-2 border rounded"
                  onChange={(e) =>
                    setValue({ ...value, title: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="image" className="block font-semibold">
                  Image URL
                </label>
                <input
                  placeholder="Nhập url"
                  type="text"
                  name="image"
                  className="w-full p-2 border rounded"
                  onChange={(e) =>
                    setValue({ ...value, img: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="brand" className="block font-semibold">
                  Brand
                </label>
                <input
                  required
                  placeholder="Nhập tên brand"
                  type="text"
                  name="brand"
                  className="w-full p-2 border rounded"
                  onChange={(e) =>
                    setValue({ ...value, brand: e.target.value })
                  }
                />
              </div>
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
              Add Product
            </button>

            <Link
              className="bg-lime-700 hover:bg-lime-400 text-white font-bold py-2 px-4 rounded mb-4"
              to="/admin"
            >
              Back To Admin
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Create;
