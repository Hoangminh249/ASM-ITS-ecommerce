/* eslint-disable no-labels */
import axiosClient from "../axios/axiosClient";

const productApi = {
  // eslint-disable-next-line no-unused-expressions
  getAll: (params) => {
    const url = "/api/products";
    return axiosClient.get(url, { params });
  },
  // eslint-disable-next-line no-unused-expressions
  getId: (id) => {
    const url = `/data/${id}`;
    return axiosClient.delete(url);
  },
  addProduct: (value) => {
    const url = "/data";
    return axiosClient.post(url, value);
  },
  getIdProduct: (id) => {
    const url = `/data/${id}`;
    return axiosClient.get(url);
  },
  updateProduct: (id, value) => {
    const url = `/data/${id}`;

    return axiosClient.put(url , value);
  },
};
export default productApi;
