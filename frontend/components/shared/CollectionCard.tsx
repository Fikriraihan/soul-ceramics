import { ProductProps } from "@/types/types";
import Image from "next/image";
import React from "react";

export const CollectionCard = (props: ProductProps) => {
  const { image, title } = props;
  return (
    <div className="cursor-pointer bg-black rounded-none img-hover-zoom card w-full shadow-xl image-full">
      <figure>
        <Image src={image} alt="Shoes" width={900} height={100} className="xl:!h-[80vh]" />
      </figure>
      <div className="card-body sm:justify-end justify-start">
        <div className="card-actions text-white flex-col">
          <h1 className="sm:text-3xl text-lg font-medium">{title}</h1>
          <small className="underline sm:text-sm text-xs">SHOP THE RANGE</small>
        </div>
      </div>
    </div>
  );
};
