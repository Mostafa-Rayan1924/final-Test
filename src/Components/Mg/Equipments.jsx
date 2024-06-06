import { useState } from "react";
import { TypeOfEquips } from "../dataOfSelectBox";
import { nameOfEquip } from "../dataOfSelectBox";
import { MdDelete } from "react-icons/md";

const Equipments = ({ equipments, setEquipments, item }) => {
  // states for tawredat
  let [OkState, setOkstate] = useState(false);
  let [salary, setSalary] = useState("");
  let [typeOfEquipments, settypeOfEquipments] = useState("");
  let [amountOfGas, setAmountOfGas] = useState("");
  let [carDriver, setCarDriver] = useState("");
  let [EquipmentsTextArea, setEquipmentsTextArea] = useState("");

  function handleAddInput() {
    let newInps = {
      iddd: equipments.length + 1,
      salary: "سعر المعده",
      type: "نوع المعدة",
      amount: 3,
      namedDriver: "اسم السائق",
      workDid: "العمل الذي قامت به المعدة",
    };
    setEquipments([...equipments, newInps]);
  }
  function handleSave(item) {
    setOkstate(true);
    let equipmentsEdit = equipments.map((ele) => {
      if (ele.iddd == item.iddd) {
        let newItem = {
          ...ele,
          salary: salary,
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
  return (
    <div className="flex-col flex  mb-10  w-full">
      <label className="w-full mb-5"> المعدات</label>
      <div className="w-full mb-4 relative grid md:grid-cols-4 grid-cols-2 gap-2">
        <select
          value={typeOfEquipments}
          onChange={(e) => {
            settypeOfEquipments(e.target.value);
          }}
          className="h-[38px] pr-1.5 py-2 focus:outline-none bg-white rounded-lg border border-neutral-400">
          {TypeOfEquips.map((item) => {
            return (
              <>
                <option className="hidden">نوع المعدة</option>

                <option key={item}>{item}</option>
              </>
            );
          })}
        </select>
        <input
          placeholder="اجمالي سعر المعده"
          type="number"
          value={salary}
          onChange={(e) => {
            salary(e.target.value);
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
