import { useState } from "react";
const SearchChat = ({ Search }) => {
  // let [search, setSearch] = useState("");
  let onSearch = (word) => {
    Search(word);
  };
  return (
    <div className="mb-5">
      <input
        // value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="ابحث..."
        className="w-full bg-[#e7e7e7] rounded-lg h-[35px] outline-none pr-4"
        type="text"
      />
    </div>
  );
};

export default SearchChat;
