import { useSelector } from "react-redux";
import Item from "./Item";

const MainContent = () => {
  const { data } = useSelector((state) => state.data);
  const { keyword } = useSelector((state) => state.data);
  return (
    <div className="container mx-auto grid grid-cols-4  gap-y-8 flex-wrap pt-8 pb-4 py-2">
      {data
        .filter((item) =>
          item.productName.toLowerCase().includes(keyword.toLowerCase())
        )
        .map((contentItem) => (
          <Item key={contentItem.id} contentItem={contentItem} />
        ))}
    </div>
  );
};

export default MainContent;
