import { useState, useEffect } from "react";
import { dataOftype } from "../dataOfSelectBox";
import { MdDelete } from "react-icons/md";
import Select from "react-select";
const Workers = ({ workers, setWorkers, item }) => {
  let [OkState, setOkstate] = useState(false);
  let [workersTextArea, setWorkersTextArea] = useState("");
  let [workersInpType, setWorkersInpType] = useState("");
  let [workersInpCount, setWorkersInpCount] = useState("");
  let [workersSalary, setWorkersSalary] = useState("");

  function handleSave() {
    setOkstate(true);
    let workersEdit = workers.map((ele) => {
      if (ele.iddd === item.iddd) {
        let newItem = {
          ...ele,
          type: workersInpType,
          number: workersInpCount,
          workDid: workersTextArea,
          price: workersSalary,
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
      price: "",
      workDid: "",
    };
    setWorkers([...workers, newInps]);
  }

  useEffect(() => {
    if (OkState) {
      setOkstate(false);
    }
  }, [workersTextArea, workersInpType, workersInpCount, workersSalary]);
  const uniqueOptions = [...new Set(dataOftype)].map((option) => ({
    value: option,
    label: option,
  }));
  // Custom styles
  const customStyles = {
    control: (provided) => ({
      ...provided,

      borderRadius: "0.5rem",
      border: "1px solid #ccc",
      backgroundColor: "white",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#888",
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "0.5rem",
      zIndex: 20,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#ddd"
        : state.isFocused
        ? "#eee"
        : "white",
      color: "black",
      "&:hover": {
        backgroundColor: "#f0f0f0",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#888",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "black",
    }),
  };
  return (
    <div>
      <div className="flex  relative  flex-col md:flex-row  gap-3 md:items-center justify-between mb-4   w-full">
        <label className="w-full lg:w-1/2">الصنايعية وعددهم</label>
        <div className="w-full relative lg:w-1/2 flex md:flex-row flex-col items-center gap-2 ">
          <Select
            options={uniqueOptions}
            placeholder="الحرفه"
            isSearchable
            value={uniqueOptions.find(
              (option) => option.value === workersInpType
            )}
            onChange={(selectedOption) => {
              setWorkersInpType(selectedOption ? selectedOption.value : null);
            }}
            styles={customStyles}
            className="w-full lg:w-1/2 pr-1.5 h-[38px]"
          />
          <input
            value={workersInpCount}
            onChange={(e) => {
              setWorkersInpCount(e.target.value);
            }}
            placeholder="العدد"
            className="w-full lg:w-1/2 pr-1.5 h-[38px] focus:outline-none bg-white rounded-lg border border-neutral-400"
            type="number"
          />
          <input
            value={workersSalary}
            onChange={(e) => {
              setWorkersSalary(e.target.value);
            }}
            placeholder="سعر اليومية"
            className="w-full lg:w-1/2 pr-1.5 h-[38px] focus:outline-none bg-white rounded-lg border border-neutral-400"
            type="number"
          />
          <div
            onClick={handleAddInput}
            className="absolute bg-blue-500 w-8 h-8 rounded-full cursor-pointer grid place-items-center text-white text-2xl left-10 -top-10 md:top-0 md:-left-10">
            +
          </div>
          <div
            onClick={handleSave}
            className={`absolute ${
              OkState ? "bg-green-500" : "bg-yellow-500"
            } w-8 h-8 rounded-full cursor-pointer grid place-items-center text-white left-0 -top-10 md:top-0 md:-left-20`}>
            تم
          </div>
          {workers.length > 1 ? (
            <div
              onClick={handleDel}
              className={`absolute bg-red-500 w-8 h-8 rounded-full cursor-pointer grid place-items-center text-white left-20 -top-10 md:top-10 md:-left-[60px]`}>
              <MdDelete />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <input
        value={workersTextArea}
        onChange={(e) => {
          setWorkersTextArea(e.target.value);
        }}
        className="w-full mx-auto mb-10 h-[150px] pr-1.5 focus:outline-none bg-white rounded-lg border border-neutral-400"
        type="text"
        placeholder="الاعمال التي قاموا بها"
      />
    </div>
  );
};

export default Workers;
