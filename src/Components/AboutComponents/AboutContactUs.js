import { type } from "@testing-library/user-event/dist/type";
import down from "../../img/assets/down.png";
import up from "../../img/assets/up.png";
import { useForm, ValidationError } from "@formspree/react";
const AboutContactUs = () => {
  const [state, handleSubmit] = useForm("xzblkond");

  return (
    <div className="aboutContact my-[100px] relative max-w-[1120px] h-[400px] md:h-[335px] mx-auto text-center shadow-lg  ">
      <img
        src={down}
        className="w-[217px] h-[220px] hidden md:block absolute top-0 left-0  "
      />
      <img
        src={up}
        className="w-[217px] h-[220px] hidden md:block absolute bottom-0 right-0"
      />

      <div className="container ">
        <form onSubmit={handleSubmit}>
          <h2 className="text-[25px] lg:text-[36px] pt-10 mb-5">
            اكتب ايميلك علشان توصلك اخر المشاريع
          </h2>
          <p className="leading-relaxed ">
            نحن نولي أهمية كبيرة لجودة الخدمة والدعم الفني نحن نضمن توافر خدمتنا
            <br /> على مدار الساعة
          </p>
          <div className="flex items-center flex-wrap my-10 gap-4">
            <input
              id="email"
              type="email"
              name="email"
              className="w-full md:w-[80%] relative z-50 bg-[white] px-5 focus:outline-none h-12 rounded-lg border border-[#ccc]"
              placeholder="البريد الالكتروني"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <button
              disabled={state.submitting}
              className="w-full md:w-[10%] h-12 rounded-lg text-white bg-[#B39837]">
              {state.submitting ? "يتم الارسال..." : "ارسال"}
            </button>
          </div>
        </form>
      </div>
      {state.succeeded && (
        <h1 className="text-4xl mt-[-10px]">شكرا لتواصلك معنا 💌</h1>
      )}
    </div>
  );
};

export default AboutContactUs;
