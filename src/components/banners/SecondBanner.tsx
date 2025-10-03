import { Link } from "react-router-dom";
import config from "../../data/config";
import { BsBag } from "react-icons/bs";
export default function SecondBanner() {
  return (
    <section
      className="h-[663px] w-full bg-no-repeat bg-cover bg-center my-20 "
      style={{
        backgroundImage: `url(${config.photos.banners.bn2.background})`,
      }}
    >
      <div className="container h-full flex flex-col md:flex-row md:justify-between md:items-center ">
        <div className="flex flex-col gap-6 max-w-[50%] ">
          <h1 className="md:text-[96px] text-6xl font-bold text-primary">
            FitZone Pulse One
          </h1>
          <p className="md:text-6xl text-3xl text-white">$220</p>
          <Link
            to="/products"
            className="text-[14px] text-white w-[272px] rounded-2xl bg-primary py-3 text-center flex items-center justify-center gap-2 mt-5"
          >
            <BsBag /> See Details
          </Link>
        </div>
        <div className="h-[80%] ">
          <img
            src={config.photos.banners.bn2.image}
            alt=""
            className="object-cover md:h-full  h-[70%]"
          />
        </div>
      </div>
    </section>
  );
}
