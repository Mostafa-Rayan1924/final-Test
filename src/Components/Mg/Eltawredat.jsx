import { useState } from "react";
import { TypeOfMowardeen } from "../dataOfSelectBox";
import { nameOfMowardeen } from "../dataOfSelectBox";
const Eltawredat = ({ tawredat, setTawerdat, item }) => {
  // states for tawredat
  let [OkState, setOkstate] = useState(false);
  let [nameOfMowared, setNameOfMowared] = useState("");
  let [typeOfMowared, settypeOfMowared] = useState("");
  let [numsOfMowared, setNumsOfMowared] = useState("");
  let [carNumber, setCarNumber] = useState("");
  let [tawredatTextArea, setTawredatTextArea] = useState("");

  function handleAddInput() {
    let newInps = {
      iddd: tawredat.length + 1,
      name: "",
      type: "",
      number: 0,
      carNumber: "",
      supplies: "",
    };
    setTawerdat([...tawredat, newInps]);
  }
  function handleSave(item) {
    setOkstate(true);
    let TawredatEdit = tawredat.map((ele) => {
      if (ele.iddd == item.iddd) {
        let newItem = {
          ...ele,
          name: nameOfMowared,
          type: typeOfMowared,
          number: numsOfMowared,
          carNumber: carNumber,
          supplies: tawredatTextArea,
        };
        return newItem;
      } else {
        return ele;
      }
    });
    setTawerdat(TawredatEdit);
    // console.log(id);
  }
  // console.log(tawredat);
  return (
    <div className="flex-col flex  mb-10  w-full">
      <label className="w-full mb-5"> التوريدات</label>
      <div className="w-full mb-4  relative grid md:grid-cols-4 grid-cols-2 gap-2">
        <select
          value={nameOfMowared}
          onChange={(e) => {
            setNameOfMowared(e.target.value);
          }}
          className="  h-[38px] pr-1.5 py-2 focus:outline-none bg-white rounded-lg border border-neutral-400">
          {nameOfMowardeen.map((item) => {
            return (
              <>
                <option className="hidden">اسم المورد</option>
                <option key={item}>{item}</option>
              </>
            );
          })}
        </select>
        <select
          value={typeOfMowared}
          onChange={(e) => {
            settypeOfMowared(e.target.value);
          }}
          className="h-[38px] pr-1.5 py-2 focus:outline-none bg-white rounded-lg border border-neutral-400">
          {TypeOfMowardeen.map((item) => {
            return (
              <>
                <option className="hidden">نوع المورد</option>

                <option key={item}>{item}</option>
              </>
            );
          })}
        </select>
        <input
          placeholder="العدد "
          type="number"
          value={numsOfMowared}
          onChange={(e) => {
            setNumsOfMowared(e.target.value);
          }}
          className="h-[38px] pr-1.5 py-2 focus:outline-none bg-white rounded-lg border border-neutral-400"
        />
        <input
          value={carNumber}
          onChange={(e) => {
            setCarNumber(e.target.value);
          }}
          placeholder="رقم السياره"
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
            OkState ? "bg-green-500" : "bg-red-500"
          }  w-8 h-8  rounded-full cursor-pointer grid place-items-center text-white  left-0 -top-10   md:top-0 md:-left-20 `}>
          تم
        </div>
      </div>
      <input
        value={tawredatTextArea}
        onChange={(e) => {
          setTawredatTextArea(e.target.value);
        }}
        className=" w-full mx-auto mb-10  h-[150px]  pr-1.5  focus:outline-none bg-white rounded-lg border border-neutral-400"
        type="text"
        placeholder="الاعمال التي قاموا بها"
      />
    </div>
  );
};

export default Eltawredat;
