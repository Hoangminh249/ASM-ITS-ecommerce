import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
import productApi from "../api/productApi";

function Update(props) {
  // const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(id);
  const [value, setValue] = useState({
    id: "",
    title: "",
    img: "",
    brand: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const getDataUpdate = async () => {
      try {
        const response = await productApi.getIdProduct(id);
        console.log(response);
        setValue(response)
      } catch (error) {
        console.log(error);
      }
    }
    getDataUpdate()

    // axios
    //   .get("http://localhost:3000/data/" + id)
    //   .then((res) => {
    //     setValue(res.data);
    //   })
    //   .catch((err) => console.log(err));
  }, []);


  const handleUpdate = (event) => {
    event.preventDefault();

    const successUpdate = async () => {
      try {
        const response = await productApi.updateProduct(id,value)
        navigate("/admin");
      } catch (error) {
        console.log(error);
      }
    } 
    successUpdate()
  //   axios
  //     .put("http://localhost:3000/data/" + id, value)
  //     .then((res) => {
  //       console.log(value);
  //       navigate("/admin");
  //     })
  //     .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="cointainer">
        <h2 className="text-2xl font-bold mb-4 ">Update Product</h2>
        <form onSubmit={handleUpdate}>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4 bg-blend-lighten boder border-gray-300">
              <div>
                <label htmlFor="id" className="block font-semibold">
                  ID
                </label>
                <input
                  disabled
                  placeholder="Nhập id"
                  type="text"
                  name="id"
                  className="w-full p-2 border rounded"
                  value={value.id}
                  onChange={(e) => setValue({ ...value, id: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="title" className="block font-semibold">
                  Title
                </label>
                <input
                  placeholder="Nhập title"
                  type="text"
                  name="title"
                  className="w-full p-2 border rounded"
                  value={value.title}
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
                  value={value.img}
                  onChange={(e) => setValue({ ...value, img: e.target.value })}
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
                  value={value.brand}
                  onChange={(e) =>
                    setValue({ ...value, brand: e.target.value })
                  }
                />
              </div>
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
              Update
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

export default Update;
