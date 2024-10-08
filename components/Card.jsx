import { HeartIcon } from "@heroicons/react/24/outline";
import Btn from "./Btn";
import Image from "next/image";

export default function Card({ title, img, price }) {
  const user = true;
  return (
    <div className="border-bgray/40 grid h-[400px] w-[300px] grid-rows-12 gap-2 rounded-md border-2 bg-white p-6 shadow-md">
      <h2 className="font- row-span-2 text-center text-lg font-semibold text-bgray">
        {title}
      </h2>
      <div className="relative row-span-7 flex items-center justify-center rounded-md">
        <Image src={img || "img/bike.svg"} alt="" width={200} height={200} />
        {user && (
          <button className="absolute right-2 top-2 rounded-sm bg-black/40 p-1">
            <p className="h-6 w-6 text-white transition-all duration-500 hover:text-brand">
              <HeartIcon />
            </p>
          </button>
        )}
      </div>
      <p className="row-auto text-center font-bebas text-xl text-bgray">
        $ {price}
      </p>
      <div className="row-span-2 flex justify-center">
        <Btn
          text={"Agregar al carrito"}
          color="accent"
          className={"mx-auto max-h-10"}
        />
      </div>
    </div>
  );
}
