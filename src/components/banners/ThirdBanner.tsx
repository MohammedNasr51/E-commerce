import config from "../../data/config";

export default function ThirdBanner() {
  return (
    <section className="my-8 sm:my-12 md:my-16 lg:my-20">
      {/* Mobile: Single column stack */}
      <div className="grid grid-cols-1 gap-4 sm:hidden">
        <div
          className="relative group h-64 bg-no-repeat bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${config.photos.banners.bn3[0]})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-3xl font-bold">25%</div>
              <div className="text-lg">OFF</div>
            </div>
          </div>
        </div>
        <div
          className="relative group h-48 bg-no-repeat bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${config.photos.banners.bn3[1]})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-2xl font-bold">25%</div>
              <div className="text-md">OFF</div>
            </div>
          </div>
        </div>
        <div
          className="relative group h-48 bg-no-repeat bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${config.photos.banners.bn3[2]})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-2xl font-bold">25%</div>
              <div className="text-md">OFF</div>
            </div>
          </div>
        </div>
        <div
          className="relative group h-48 bg-no-repeat bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${config.photos.banners.bn3[3]})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-2xl font-bold">25%</div>
              <div className="text-md">OFF</div>
            </div>
          </div>
        </div>
        <div
          className="relative group h-48 bg-no-repeat bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${config.photos.banners.bn3[4]})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-2xl font-bold">25%</div>
              <div className="text-md">OFF</div>
            </div>
          </div>
        </div>
        <div
          className="relative group h-48 bg-no-repeat bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${config.photos.banners.bn3[5]})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-2xl font-bold">25%</div>
              <div className="text-md">OFF</div>
            </div>
          </div>
        </div>
        <div
          className="relative group h-48 bg-no-repeat bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${config.photos.banners.bn3[6]})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-2xl font-bold">25%</div>
              <div className="text-md">OFF</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet: 2x3 grid with first item spanning 2 rows */}
      <div className="hidden sm:grid lg:hidden grid-cols-3 grid-rows-2 gap-4">
        <div
          className="relative group col-span-1 row-span-2 bg-no-repeat bg-cover bg-center h-[400px] overflow-hidden"
          style={{ backgroundImage: `url(${config.photos.banners.bn3[0]})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-4xl font-bold">25%</div>
              <div className="text-xl">OFF</div>
            </div>
          </div>
        </div>
        <div
          className="relative group col-span-1 row-span-1 bg-no-repeat bg-cover bg-center h-[192px] overflow-hidden"
          style={{ backgroundImage: `url(${config.photos.banners.bn3[1]})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-2xl font-bold">25%</div>
              <div className="text-lg">OFF</div>
            </div>
          </div>
        </div>
        <div
          className="relative group col-span-1 row-span-1 bg-no-repeat bg-cover bg-center h-[192px] overflow-hidden"
          style={{ backgroundImage: `url(${config.photos.banners.bn3[2]})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-2xl font-bold">25%</div>
              <div className="text-lg">OFF</div>
            </div>
          </div>
        </div>
        <div
          className="relative group col-span-1 row-span-1 bg-no-repeat bg-cover bg-center h-[192px] overflow-hidden"
          style={{ backgroundImage: `url(${config.photos.banners.bn3[3]})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-2xl font-bold">25%</div>
              <div className="text-lg">OFF</div>
            </div>
          </div>
        </div>
        <div
          className="relative group col-span-1 row-span-1 bg-no-repeat bg-cover bg-center h-[192px] overflow-hidden"
          style={{ backgroundImage: `url(${config.photos.banners.bn3[4]})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-2xl font-bold">25%</div>
              <div className="text-lg">OFF</div>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop and Desktop: 5x2 grid layout |aa|b|c|d| |aa|e|f|g| */}
      <div className="hidden lg:grid grid-cols-5 grid-rows-2 gap-4">
        {/* Item AA - spans 2 columns and 2 rows (cols 1-2, rows 1-2) */}
        <div
          className="relative group col-span-2 row-span-2 bg-no-repeat bg-cover bg-center h-[663px] overflow-hidden"
          style={{ backgroundImage: `url(${config.photos.banners.bn3[0]})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-5xl font-bold">25%</div>
              <div className="text-2xl">OFF</div>
            </div>
          </div>
        </div>

        {/* Item B - (col 3, row 1) */}
        <div
          className="relative group col-span-1 row-span-1 col-start-3 row-start-1 bg-no-repeat bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${config.photos.banners.bn3[1]})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-3xl font-bold">25%</div>
              <div className="text-xl">OFF</div>
            </div>
          </div>
        </div>

        {/* Item C - (col 4, row 1) */}
        <div
          className="relative group col-span-1 row-span-1 col-start-4 row-start-1 bg-no-repeat bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${config.photos.banners.bn3[2]})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-3xl font-bold">25%</div>
              <div className="text-xl">OFF</div>
            </div>
          </div>
        </div>

        {/* Item D - (col 5, row 1) */}
        <div
          className="relative group col-span-1 row-span-1 col-start-5 row-start-1 bg-no-repeat bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${config.photos.banners.bn3[3]})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-3xl font-bold">25%</div>
              <div className="text-xl">OFF</div>
            </div>
          </div>
        </div>

        {/* Item E - (col 3, row 2) */}
        <div
          className="relative group col-span-1 row-span-1 col-start-3 row-start-2 bg-no-repeat bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${config.photos.banners.bn3[4]})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-3xl font-bold">25%</div>
              <div className="text-xl">OFF</div>
            </div>
          </div>
        </div>

        {/* Item F - (col 4, row 2) */}
        <div
          className="relative group col-span-1 row-span-1 col-start-4 row-start-2 bg-no-repeat bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${config.photos.banners.bn3[5]})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-3xl font-bold">25%</div>
              <div className="text-xl">OFF</div>
            </div>
          </div>
        </div>

        {/* Item G - (col 5, row 2) */}
        <div
          className="relative group col-span-1 row-span-1 col-start-5 row-start-2 bg-no-repeat bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${config.photos.banners.bn3[6]})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-3xl font-bold">25%</div>
              <div className="text-xl">OFF</div>
            </div>
          </div>
        </div>|
      </div>

      {/* Tablet: Show remaining banners separately for better layout */}
      <div className="hidden sm:block lg:hidden mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div
            className="relative group h-48 bg-no-repeat bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${config.photos.banners.bn3[5]})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">25%</div>
                <div className="text-lg">OFF</div>
              </div>
            </div>
          </div>
          <div
            className="relative group h-48 bg-no-repeat bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${config.photos.banners.bn3[6]})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">25%</div>
                <div className="text-lg">OFF</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
