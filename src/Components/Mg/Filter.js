const Filter = ({ inpDate, handleFilter, getAllTasks, setInpDate }) => {
  return (
    <div className=" flex flex-wrap items-center gap-4">
      <h3 className="font-bold">ابحث بالتاريخ</h3>
      <input
        value={inpDate}
        onChange={(e) => {
          setInpDate(e.target.value);
        }}
        onInput={handleFilter}
        className="border-2 border-[#ffd53e] w-full sm:w-fit px-10 py-[6px] rounded-xl focus:outline-none"
        type="date"
      />
      <button
        onClick={getAllTasks}
        className="bg-green-400 hover:bg-green-500 font-bold w-full sm:w-fit  text-white rounded p-2">
        اليوم الحالي
      </button>
    </div>
  );
};

export default Filter;
