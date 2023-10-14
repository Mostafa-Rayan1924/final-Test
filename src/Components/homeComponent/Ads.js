import ad1 from "../../img/ads/ad1.webp";
import ad2 from "../../img/ads/ad2.webp";
import ad3 from "../../img/ads/ad3.webp";
import ad4 from "../../img/ads/ad4.webp";
import ad5 from "../../img/ads/ad5.webp";
import ad6 from "../../img/ads/ad6.webp";

const Ads = () => {
  return (
    <div className="bg-yellow-400 my-[100px] lg:my-[0px] py-10">
      <div className="container  grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        <div>
          <img
            className="max-w-full rounded grayscale-[100] transition-all duration-300 hover:grayscale-[0]  w-[190px]  h-[120px]"
            src={ad1}
          />
        </div>
        <div>
          <img
            className="max-w-full rounded grayscale-[100] transition-all duration-300 hover:grayscale-[0] w-[190px] h-[120px]"
            src={ad2}
          />
        </div>
        <div>
          <img
            className="max-w-full rounded  grayscale-[100] transition-all duration-300 hover:grayscale-[0] w-[190px] h-[120px]"
            src={ad3}
          />
        </div>
        <div>
          <img
            className="max-w-full rounded grayscale-[100] transition-all duration-300 hover:grayscale-[0] w-[190px] h-[120px]"
            src={ad6}
          />
        </div>
        <div>
          <img
            className="max-w-full rounded grayscale-[100] transition-all duration-300 hover:grayscale-[0] w-[190px] h-[120px]"
            src={ad5}
          />
        </div>
        <div>
          <img
            className="max-w-full rounded grayscale-[100] transition-all duration-300 hover:grayscale-[0] w-[190px] h-[120px]"
            src={ad4}
          />
        </div>
      </div>
    </div>
  );
};

export default Ads;
