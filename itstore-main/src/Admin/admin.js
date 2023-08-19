/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import productApi from "../api/productApi";

function Admin(props) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
//   const {id} = useParams()
  //   console.log(products, "products");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await productApi.getAll();
        setProducts(response)
      } catch (err) {
        console.log(err);
      }
    }
    getData();
    // axios
    //   .get("http://localhost:3000/data")
    //   .then((res) => setProducts(res.data))
    //   .catch((err) => console.log(err));
  }, []);


  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Bạn có muốn xóa sản phẩm này");
  
    if (confirmDelete) {
      const getData = async () => {
        try {
          const response = await productApi.getId(id);
          console.log(response);
          setProducts(prev => prev.filter(product => product.id !== id ))
        } catch (error) {
          console.log(error);
        }
      }

      getData();
      // axios
      //   .delete(`http://localhost:3000/data/${id}`)
      //   .then((res) => {
          // Xóa sản phẩm thành công, cập nhật danh sách sản phẩm
        //   setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
        // })
        // .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-3/4 bg-white border shadow p-4">
          <h1 className="text-4xl mb-4">List products</h1>
          <div className="mt-4 border p-4 rounded flex justify-end">
                <Link className="bg-success text-black font-bold py-2 px-4 rounded bg-lime-700" to="/admin/create">Add new</Link>
          </div>
          <div className="w-full table-container overflow-auto max-h-[calc(100vh-200px)]">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-2 px-4 border border-gray-300">Id</th>
                  <th className="py-2 px-4 border border-gray-300">Title</th>
                  <th className="py-2 px-4 border border-gray-300">Image</th>
                  <th className="py-2 px-4 border border-gray-300">Brand</th>
                  <th className="py-2 px-4 border border-gray-300">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="py-2 px-4 border border-gray-300">
                      {product.id}
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      {product.title}
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-16 h-16 rounded-full mx-auto"
                      />
                    </td>
                    <td className="py-2 px-4 border  border-gray-300">
                      {product.brand}
                    </td>
                    <td className="py-2 px-4 border  border-gray-300">
                      <Link to={`/admin/update/${product.id}`}>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 border-gray-300">
                        Edit
                      </button>
                      </Link>
                      <button onClick={e => handleDelete(product.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded border-gray-300">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
