import { useState } from "react";
import { dataOftype } from "../dataOfSelectBox";
import { MdDelete } from "react-icons/md";

const Workers = ({ workers, setWorkers, item }) => {
  let [OkState, setOkstate] = useState(false);
  let [workersTextArea, setWorkersTextArea] = useState("");
  let [workersInpType, setWorkersInpType] = useState("");
  let [workersInpCount, setWorkersInpCount] = useState(0);
  function handleSave() {
    setOkstate(true);
    let workersEdit = workers.map((ele) => {
      if (ele.iddd == item.iddd) {
        let newItem = {
          ...ele,
          type: workersInpType,
          number: workersInpCount,
          workDid: workersTextArea,
        };
        return newItem;
      } else {
        return ele;
      }
    });
    setWorkers(workersEdit);
  }
  function handleDel() {
    let workersDel = workers.filter((ele) => {
      return ele.iddd !== item.iddd;
    });
    setWorkers(workersDel);
  }
  function handleAddInput() {
    let newInps = {
      iddd: workers.length + 1,
      type: "",
      number: "",
      workDid: "",
    };
    setWorkers([...workers, newInps]);
  }
  return (
    <div>
      <div className="flex  relative  flex-col md:flex-row  gap-3 md:items-center justify-between mb-4   w-full">
        <label className="w-full lg:w-1/2">العمال وعددهم</label>
        <div className="w-full relative lg:w-1/2 flex md:flex-row flex-col items-center gap-2 ">
          <select
            value={workersInpType}
            onChange={(e) => {
              setWorkersInpType(e.target.value);
            }}
            className="w-full lg:w-1/2  h-[38px] pr-1.5 py-2 focus:outline-none bg-white rounded-lg border border-neutral-400">
            {dataOftype.map((item) => {
              return (
                <>
                  <option className="hidden">الحرفة</option>
                  <option key={item}>{item}</option>
                </>
              );
            })}
          </select>
          <input
            value={workersInpCount}
            onChange={(e) => {
              setWorkersInpCount(e.target.value);
            }}
            placeholder="العدد"
            className="w-full lg:w-1/2 pr-1.5 h-[38px] focus:outline-none bg-white rounded-lg border border-neutral-400"
            type="number"
          />
          <div
            onClick={handleAddInput}
            className=" absolute bg-blue-500 w-8 h-8  rounded-full cursor-pointer  grid place-items-center text-white text-2xl left-10  -top-10 md:top-0 md:-left-10">
            +
          </div>
          <div
            onClick={() => {
              handleSave(item);
            }}
            className={`absolute ${
              OkState ? "bg-green-500" : "bg-yellow-500"
            } w-8 h-8  rounded-full cursor-pointer grid place-items-center text-white  left-0 -top-10   md:top-0 md:-left-20 `}>
            تم
          </div>
          <div
            onClick={() => {
              handleDel(item);
            }}
            className={`absolute bg-red-500
            } w-8 h-8  rounded-full cursor-pointer grid place-items-center text-white  left-20 -top-10   md:top-10 md:-left-[60px] `}>
            <MdDelete />
          </div>
        </div>
      </div>
      <input
        value={workersTextArea}
        onChange={(e) => {
          setWorkersTextArea(e.target.value);
        }}
        className=" w-full mx-auto mb-10  h-[150px]  pr-1.5  focus:outline-none bg-white rounded-lg border border-neutral-400"
        type="text"
        placeholder="الاعمال التي قاموا بها"
      />
    </div>
  );
};

export default Workers;
