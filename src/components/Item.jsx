/* eslint-disable react/prop-types */
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineDelete } from "react-icons/ai";
import { TbArrowsExchange2 } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { deleteData } from "../redux/dataSlice";
import { OCModal, changeType } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Item = ({ contentItem }) => {
  const [hamburger, setHamburger] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUpdate = (e, id) => {
    setHamburger(!hamburger);
    dispatch(changeType("update"));
    dispatch(OCModal());
    navigate(`?id=${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteData(id));
    toast.success('Ürün başarıyla silindi!', {
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
    <div className="flex flex-col items-center gap-y-2 font-gemunu">
      <div className="relative group">
        <img
          className="w-80 h-64 object-cover"
          src={contentItem.productImage}
        />
        <div className="absolute inset-0 w-full h-full flex flex-col justify-end items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
          <GiHamburgerMenu
            onClick={() => setHamburger(!hamburger)}
            className="absolute top-0 right-0 text-red-600"
            size={28}
          />
          <div className="flex space-x-2 text-xl text-white ">
            <p>{contentItem.productName}</p>
            <span>{contentItem.productPrice} ₺</span>
          </div>
        </div>
        {hamburger && (
          <div className="inline-flex text-md flex-col justify-center px-3 bg-gray-200 absolute top-7 right-1">
            <div
              onClick={() => handleDelete(contentItem.id)}
              className=" cursor-pointer flex items-center space-x-2">
              <span>Sil</span>
              <AiOutlineDelete />
            </div>
            <div
              onClick={(e) => handleUpdate(e, contentItem.id)}
              className="flex items-center space-x-2 cursor-pointer">
              <span>Düzenle</span>
              <TbArrowsExchange2 />
            </div>
          </div>
        )}
      </div>
      <ToastContainer
        position="top-right"
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
    </div>
  );
};

export default Item;
