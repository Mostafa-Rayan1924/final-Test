import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
const ConSection = () => {
  const [state, handleSubmit] = useForm("xgejpdgy");
  return (
    <div className="py-[100px] ">
      <div
        data-aos="zoom-in-down"
        data-aos-duration="2500"
        className="container flex flex-col-reverse md:flex-row ">
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full bg-white dark:bg-[#444]  md:rounded-r-xl h-[640px] p-5 shadow-xl">
          <h2 className="relative dark:text-white text-center text-[50px] before:absolute before:-bottom-1 mb-10 before:w-[120px] before:left-1/2 before:-translate-x-1/2 before:h-1 before:bg-[#ffdf69]">
            تواصل بنا{" "}
          </h2>
          <input
            id="text"
            type="text"
            name="fname"
            className="px-4 rounded border-none dark:focus:outline-none  focus:outline-[#ffdf69]  bg-gray-200 dark:bg-[#666] h-10 w-full"
            placeholder="الاسم الاول"
          />
          <ValidationError prefix="text" field="fname" errors={state.errors} />
          <input
            id="text"
            type="text"
            name="lname"
            className="px-4 my-10 rounded border-none dark:focus:outline-none focus:outline-[#ffdf69] dark:bg-[#666]  bg-gray-200 h-10 w-full"
            placeholder="الاسم التاني"
          />
          <ValidationError prefix="text" field="lname" errors={state.errors} />

          <input
            type="number"
            name="num"
            className="px-4 rounded border-none dark:focus:outline-none focus:outline-[#ffdf69] dark:bg-[#666]  bg-gray-200 h-10 w-full"
            placeholder="الهاتف"
          />
          <ValidationError prefix="number" field="num" errors={state.errors} />

          <textarea
            id="message"
            name="message"
            className="p-4 resize-none mt-10 rounded border-none dark:focus:outline-none focus:outline-[#ffdf69] dark:bg-[#666]  bg-gray-200 h-[150px] w-full"
            placeholder="اترك رسالتك"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            disabled={state.submitting}
            className="w-full transition-all duration-300 dark:focus:outline-none hover:bg-[#edcd5a] rounded text-white h-10 my-10 bg-[#ffdf69]">
            {state.submitting ? "يتم الارسال..." : "ارسل"}
          </button>
          {state.succeeded && (
            <h1 className="text-4xl dark:text-white"> سيتم التواصل معك ❤</h1>
          )}
        </form>
        <div className="md:w-1/2 w-full contactImg transition-all duration-300   hidden md:flex  md:rounded-l-xl"></div>
      </div>
    </div>
  );
};

export default ConSection;
