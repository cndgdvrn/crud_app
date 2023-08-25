import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Modal from "./components/Modal";
import UpdateModal from "./components/UpdateModal";
import { ToastContainer } from "react-toastify";


function App() {

  const {type} = useSelector((state) => state.modal);

  return (
    <div>
      <Header/>
      {type === "create" ? <Modal/> : type === "update" ? <UpdateModal/> : null}
      <MainContent/>
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
    </div>
  );
}

export default App;
