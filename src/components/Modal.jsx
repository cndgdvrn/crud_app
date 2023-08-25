import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { OCModal } from "../redux/modalSlice";
import { createData, updateData } from "../redux/dataSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Modal = () => {
  const dispatch = useDispatch();
  const { statue, type } = useSelector((state) => state.modal);
  const { length, data } = useSelector((state) => state.data);

  const [product, setProduct] = useState({
    productName: "",
    productPrice: "",
    productImage: "",
  });

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(createData(product));
    dispatch(OCModal());
    setProduct({
      productName: "",
      productPrice: "",
      productImage: "",
    });
    toast.success("Ürün oluşturuldu!", {
      position: "top-right",
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
        <div className="bg-white w-full h-full fixed top-0 left-0 bg-opacity-0 font-gemunu z-20 flex justify-center items-center ">
          <form
            onSubmit={(e) => {
              handleCreate(e);
            }}
            className="relative bg-white flex flex-col gap-y-6 items-center shadow-2xl p-4 rounded-tr-lg">
            <h2 className="text-3xl font-semibold">Ürün Oluştur</h2>
            <input
              onChange={(e) => [
                setProduct((prev) => {
                  return { ...prev, productName: e.target.value, id: length };
                }),
              ]}
              value={product.productName}
              className="w-full p-2 outline-none border-b-2"
              type="text"
              placeholder="Ürün adı"
            />
            <input
              onChange={(e) =>
                setProduct((prev) => {
                  return { ...prev, productPrice: e.target.value };
                })
              }
              value={product.productPrice}
              className="w-full p-2 outline-none border-b-2"
              type="text"
              placeholder="Ürün fiyatı"
            />
            <input
              onChange={(e) =>
                setProduct((prev) => {
                  return {
                    ...prev,
                    productImage: URL.createObjectURL(e.target.files[0]),
                  };
                })
              }
              className="text-lg"
              type="file"
            />
            <button className=" bg-gray-800 text-white  hover:bg-green-500 transition-all w-full py-3 text-lg font-semibold">
              Ürünü Oluştur
            </button>
            <div
              onClick={() => dispatch(OCModal())}
              className="absolute top-0 right-0 cursor-pointer bg-gray-800 text-white hover:bg-red-600 hover:text-white transition-all p-1 rounded-bl-lg rounded-tr-lg">
              <VscChromeClose size={28} />
            </div>
          </form>
        </div>
      )}
      <ToastContainer
        position="top-left"
        autoClose={3500}
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

export default Modal;
