import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { OCModal } from "../redux/modalSlice";
import { updateData } from "../redux/dataSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const UpdateModal = () => {
  const dispatch = useDispatch();
  const { statue, type } = useSelector((state) => state.modal);
  const { length, data } = useSelector((state) => state.data);
  let location = useLocation();
  location = location.search.split("=")[1];

  const [updatedProduct, setUpdatedProduct] = useState({
    productName: "",
    productPrice: "",
    productImage: "",
  });

  useEffect(() => {
    data.find(
      (item) =>
        item.id == location &&
        setUpdatedProduct(data.find((item) => item.id == location))
    );
  }, [location, data]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateData({ ...updatedProduct, id: location }));
    dispatch(OCModal());
    toast.success("Ürün güncellendi!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      {statue && (
        <div className="bg-white bg-opacity-0 w-full h-full fixed top-0 left-0 font-gemunu z-20 flex justify-center items-center ">
          <form
            onSubmit={(e) => {
              handleUpdate(e);
            }}
            className="relative flex flex-col gap-y-6 items-center shadow-2xl p-4 rounded-tr-lg bg-white">
            <h2 className="text-3xl font-semibold">Ürün Güncelle</h2>
            <input
              onChange={(e) => [
                setUpdatedProduct((prev) => {
                  return { ...prev, productName: e.target.value, id: length };
                }),
              ]}
              value={updatedProduct.productName}
              className="w-full p-2 outline-none border-b-2"
              type="text"
              placeholder="Ürün adı"
            />
            <input
              onChange={(e) =>
                setUpdatedProduct((prev) => {
                  return { ...prev, productPrice: e.target.value };
                })
              }
              value={updatedProduct.productPrice}
              className="w-full p-2 outline-none border-b-2"
              type="text"
              placeholder="Ürün fiyatı"
            />
            <input
              onChange={(e) =>
                setUpdatedProduct((prev) => {
                  return {
                    ...prev,
                    productImage: URL.createObjectURL(e.target.files[0]),
                  };
                })
              }
              className="text-lg"
              type="file"
            />
            <button className="bg-yellow-400 text-purple-600  hover:bg-purple-600 hover:text-yellow-400 transition-all w-full py-3 text-lg font-semibold">
              Ürünü Güncelle
            </button>
            <div
              onClick={() => dispatch(OCModal())}
              className="absolute top-0 right-0 cursor-pointer bg-yellow-400 text-purple-600  hover:bg-purple-600 hover:text-yellow-400 transition-all p-1 rounded-bl-lg rounded-tr-lg">
              <VscChromeClose size={28} />
            </div>
          </form>
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default UpdateModal;
