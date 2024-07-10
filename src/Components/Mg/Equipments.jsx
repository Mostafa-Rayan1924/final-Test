import { useEffect, useState } from "react";
import { TypeOfEquips } from "../dataOfSelectBox";
import { MdDelete } from "react-icons/md";
import Select from "react-select";
const Equipments = ({ equipments, setEquipments, item }) => {
  // states for tawredat
  let [OkState, setOkstate] = useState(false);
  let [salary, setSalary] = useState("");
  let [typeOfEquipments, settypeOfEquipments] = useState("");
  let [amountOfGas, setAmountOfGas] = useState("");
  let [carDriver, setCarDriver] = useState("");
  let [amount, setAmount] = useState("");
  let [EquipmentsTextArea, setEquipmentsTextArea] = useState("");

  function handleAddInput() {
    let newInps = {
      iddd: equipments.length + 1,
      price: "سعر المعده",
      type: "نوع المعدة",
      amount: 3,
      namedDriver: "اسم السائق",
      workDid: "العمل الذي قامت به المعدة",
    };
    setEquipments([...equipments, newInps]);
  }
  useEffect(() => {
    if (OkState) {
      setOkstate(false);
    }
  }, [typeOfEquipments, amountOfGas, EquipmentsTextArea, salary]);

  function handleSave(item) {
    setOkstate(true);
    let equipmentsEdit = equipments.map((ele) => {
      if (ele.iddd == item.iddd) {
        let newItem = {
          ...ele,
          price: salary,
          type: typeOfEquipments,
          amount: amountOfGas,
          namedDriver: carDriver,
          workDid: EquipmentsTextArea,
        };
        return newItem;
      } else {
        return ele;
      }
    });
    setEquipments(equipmentsEdit);
  }
  function handleDel() {
    let EquipmentsDel = equipments.filter((ele) => {
      return ele.iddd !== item.iddd;
    });
    setEquipments(EquipmentsDel);
  }
  const uniqueOptions = [...new Set(TypeOfEquips)].map((option) => ({
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
    <div className="flex-col flex  mb-10  w-full">
      <label className="w-full mb-5"> المعدات</label>
      <div className="w-full mb-4 relative grid md:grid-cols-4 grid-cols-2 gap-2">
        <Select
          options={uniqueOptions}
          placeholder="نوع المعدة"
          isSearchable
          value={uniqueOptions.find(
            (option) => option.value === typeOfEquipments
          )}
          onChange={(selectedOption) => {
            settypeOfEquipments(selectedOption ? selectedOption.value : null);
          }}
          styles={customStyles}
          className="h-[38px] pr-1.5 "
        />

        <input
          placeholder="اجمالي سعر المعده"
          type="number"
          value={salary}
          onChange={(e) => {
            setSalary(e.target.value);
          }}
          className="h-[38px] pr-1.5 py-2 focus:outline-none bg-white rounded-lg border border-neutral-400"></input>
        <input
          placeholder="كميه الغاز "
          type="number"
          value={amountOfGas}
          onChange={(e) => {
            setAmountOfGas(e.target.value);
          }}
          className="h-[38px] pr-1.5 py-2 focus:outline-none bg-white rounded-lg border border-neutral-400"
        />
        <input
          value={carDriver}
          onChange={(e) => {
            setCarDriver(e.target.value);
          }}
          placeholder="اسم السائق"
          className="h-[38px] pr-1.5 py-2 focus:outline-none bg-white rounded-lg border border-neutral-400"
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
          }  w-8 h-8  rounded-full cursor-pointer grid place-items-center text-white  left-0 -top-10   md:top-0 md:-left-20 `}>
          تم
        </div>
        {equipments.length > 1 ? (
          <div
            onClick={() => {
              handleDel(item);
            }}
            className={`absolute bg-red-500
          } w-8 h-8  rounded-full cursor-pointer grid place-items-center text-white  left-20 -top-10   md:top-10 md:-left-[60px] `}>
            <MdDelete />
          </div>
        ) : (
          ""
        )}
      </div>
      <input
        value={EquipmentsTextArea}
        onChange={(e) => {
          setEquipmentsTextArea(e.target.value);
        }}
        className=" w-full mx-auto mb-10  h-[150px]  pr-1.5  focus:outline-none bg-white rounded-lg border border-neutral-400"
        type="text"
        placeholder="الاعمال التي قام بها"
      />
    </div>
  );
};

export default Equipments;
