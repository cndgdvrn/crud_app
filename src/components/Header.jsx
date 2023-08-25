import { IoMdAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { OCModal, changeType } from "../redux/modalSlice";
import { keywordData, sortData } from "../redux/dataSlice";

const Header = () => {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.data);

  console.log(data);
  const handleClick = () => {
    dispatch(changeType("create"));
    dispatch(OCModal());
  };

  const handleChange = (value) => {
    dispatch(sortData(value));
  };

  const handleInputChange = (value) => {
    dispatch(keywordData(value))
  };

  return (
    <div className="bg-yellow-500 text-black font-gemunu sticky top-0 z-10 ">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <h1 className="text-3xl font-semibold tracking-wide">CRUD APP</h1>
        <div className="flex items-center space-x-6">
          <select
            onChange={(e) => handleChange(e.target.value)}
            className="h-10 outline-none">
            <option value={"asc"}>Artan</option>
            <option value={"desc"}>Azalan</option>
          </select>
          <input
            onChange={(e) => handleInputChange(e.target.value)}
            className="outline-none h-10 p-2"
            type="text"
            placeholder="Ara..."
          />
          <IoMdAddCircle
            className="hover:opacity-80 hover:scale-105 cursor-pointer transition-all"
            size={32}
            onClick={() => handleClick()}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
