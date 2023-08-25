import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Modal from "./components/Modal";
import UpdateModal from "./components/UpdateModal";


function App() {

  const {type} = useSelector((state) => state.modal);

  return (
    <div>
      <Header/>
      {type === "create" ? <Modal/> : type === "update" ? <UpdateModal/> : null}
      <MainContent/>
    </div>
  );
}

export default App;
