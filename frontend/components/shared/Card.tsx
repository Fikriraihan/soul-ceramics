import { JournalProps, ProductProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ShopCard = (props: ProductProps) => {
  const { href, category, image, price, title, size, discount, additionalClassName, wrapperClassname, additionalHeight } = props;
  const dimension = size === "medium" ? "md:h-[300px] h-[300px]" : size === "small" ? "md:h-[200px] h-[300px]" : additionalHeight;

  return (
    <div className={`md:col-span-2 max-w-[340px] col-span-5 ${wrapperClassname}`}>
      <div className={`img-hover-zoom w-full flex ${dimension} ${additionalClassName} `} style={{ position: "relative", width: "100%" }}>
        <Image src={image} alt="shop" layout="fill" objectFit="cover" />
      </div>
      <div className="mt-2">
        <p className="gray-title">{category}</p>
        <p className="subtitle-text">{title}</p>
        <p className="subtitle-text">
          {discount ? (
            <>
              <del>$ {price}</del> <span>$ {(price ? price * (100 - discount) : 0) / 100}</span>
            </>
          ) : (
            "$ " + price
          )}
        </p>
        {size && <p className="capitalize text-xs font-medium">Size: {size}</p>}
      </div>
      {href && <Link href={href}>Go to product detail</Link>}
    </div>
  );
};

export const JournalCard = (props: JournalProps) => {
  const { category, headImage, subDetail, size, title, description } = props;

  const dimension = size === "small" ? "[100%]" : size === "medium" ? "[150%]" : size === "large" ? "[200%]" : null;
  const heightSize = size === "small" ? "h-[271.74px]" : size === "medium" ? "h-[419px]" : size === "large" ? "h-[557.14px]" : null;

  return (
    <div className="md:col-span-3 col-span-9 hover:opacity-80 h-fit">
      <div className={`w-full flex ${heightSize}`} style={{ position: "relative", width: "100%" }}>
        <Image src={headImage} alt="shop" layout="fill" objectFit="cover" />
      </div>
      <div className="mt-2">
        <p className="gray-title">{category}</p>
        <p className="text-2xl font-semibold leading-7 mt-[10px]">{title}</p>
        <p className="subtitle-text mt-2">{description}</p>
        <div className="mt-8">
          <button className="underline uppercase text-xs">Read article</button>
        </div>
      </div>
    </div>
  );
};
