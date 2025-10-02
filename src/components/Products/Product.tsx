import { ProductItem } from "../../types/products";
import { useTranslation } from "react-i18next";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Product({ product }: { product: ProductItem }) {
  const { t } = useTranslation();
  return (
    <div className="border-2 border-border rounded-xl p-5 group">
      <div>
        <div
          className={`border-2 border-border rounded-2xl p-4 bg-no-repeat bg-center bg-cover h-[260px] relative flex flex-col justify-between `}
          style={{ backgroundImage: `url(${product.imageUrl})` }}
        >
          <div className="flex  justify-between">
            <div className="flex flex-col gap-1">
              <p className="rounded-full bg-primary text-background px-[18px] py-[8px] text-center">
                - {product.discount} %
              </p>
              <p className="rounded-full bg-foreground text-background px-[18px] py-[8px] text-center">
                {product.type}
              </p>
            </div>
            <span className="cursor-pointer h-fit group/heart">
              <AiOutlineHeart className=" inset-0 text-stone-600 group-hover/heart:hidden w-8 h-8" />
              {/* Fill (on hover) */}
              <AiFillHeart className=" inset-0 text-primary hidden group-hover/heart:block w-8 h-8" />
            </span>
          </div>
          <div className="w-full text-center ">
            <Link
              to={`/products/${product.id}`}
              className="rounded-2xl bg-foreground text-background px-[18px] py-[8px] text-center w-full hidden font-semibold group-hover:block"
            >
              {t("product.select_options")}
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-4 ">
        <p className="uppercase text-xl my-1">{product.title}</p>
        <div className="flex flex-col gap-4 text-xl font-bold mt-4">
          {/* Price */}
          <span className="text-primary">{product.price}</span>
          <span className="line-through text-canceled">{product.old_price}</span>
        </div>
      </div>
    </div>
  );
}
