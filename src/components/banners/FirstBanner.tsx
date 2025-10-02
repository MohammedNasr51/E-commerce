import config from "../../data/config";

export default function FirstBanner() {
  return (
    <section className="my-8 sm:my-12 md:my-16 lg:my-20 ">
      {/* Mobile: Single column stack */}
      <div className="grid grid-cols-1 gap-4 sm:hidden">
        <div
          className="h-64 bg-no-repeat bg-cover bg-center "
          style={{ backgroundImage: `url(${config.photos.banners.bn1[0]})` }}
        ></div>
        <div
          className="h-48 bg-no-repeat bg-cover bg-center "
          style={{ backgroundImage: `url(${config.photos.banners.bn1[1]})` }}
        ></div>
        <div
          className="h-48 bg-no-repeat bg-cover bg-center "
          style={{ backgroundImage: `url(${config.photos.banners.bn1[2]})` }}
        ></div>
        <div
          className="h-48 bg-no-repeat bg-cover bg-center "
          style={{ backgroundImage: `url(${config.photos.banners.bn1[3]})` }}
        ></div>
      </div>

      {/* Tablet: 2x2 grid */}
      <div className="hidden sm:grid lg:hidden grid-cols-2 grid-rows-2 gap-4">
        <div
          className="col-span-1 row-span-2 bg-no-repeat bg-cover bg-center h-[400px] "
          style={{ backgroundImage: `url(${config.photos.banners.bn1[0]})` }}
        ></div>
        <div
          className="col-span-1 row-span-1 bg-no-repeat bg-cover bg-center h-[192px] "
          style={{ backgroundImage: `url(${config.photos.banners.bn1[1]})` }}
        ></div>
        <div
          className="col-span-1 row-span-1 bg-no-repeat bg-cover bg-center h-[192px] "
          style={{ backgroundImage: `url(${config.photos.banners.bn1[2]})` }}
        ></div>
      </div>

      {/* Laptop and Desktop: Original 4x2 grid layout (preserved) */}
      <div className="hidden lg:grid grid-cols-4 grid-rows-2 gap-4">
        <div
          className="col-span-2 row-span-2 bg-no-repeat bg-contain bg-center h-[663px] "
          style={{ backgroundImage: `url(${config.photos.banners.bn1[0]})` }}
        ></div>
        <div
          className="col-span-1 row-span-1 bg-no-repeat bg-contain bg-center "
          style={{ backgroundImage: `url(${config.photos.banners.bn1[1]})` }}
        ></div>
        <div
          className="col-span-1 row-span-1 bg-no-repeat bg-contain bg-center "
          style={{ backgroundImage: `url(${config.photos.banners.bn1[2]})` }}
        ></div>
        <div
          className="col-span-2 row-span-1 col-start-3 row-start-2 bg-no-repeat bg-contain bg-center "
          style={{ backgroundImage: `url(${config.photos.banners.bn1[3]})` }}
        ></div>
      </div>

      {/* Tablet: Show fourth banner separately for better layout */}
      <div className="hidden sm:block lg:hidden mt-4">
        <div
          className="h-48 bg-no-repeat bg-cover bg-center "
          style={{ backgroundImage: `url(${config.photos.banners.bn1[3]})` }}
        ></div>
      </div>
    </section>
  );
}
