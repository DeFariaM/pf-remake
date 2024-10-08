import Image from "next/image";
import NavLink from "./NavLink";
import {
  ArrowLeftStartOnRectangleIcon,
  HeartIcon,
  ShoppingCartIcon,
  StarIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Btn from "./Btn";

export default function Navbar() {
  const user = true;
  return (
    <div className="fixed top-0 z-50 grid w-full grid-cols-3 bg-gray-200 px-10 py-2 shadow-md">
      <div className="col-auto flex items-center justify-start">
        <Image src={"img/logo.svg"} width={38} height={38} alt="" />
      </div>
      <div className="col-auto flex items-center justify-center gap-4">
        <NavLink title={"Inicio"} path={"/"} />
        <NavLink title={"Productos"} path={"/products"} />
      </div>
      <div className="col-auto flex items-center justify-end gap-4">
        {user ? (
          <>
            <NavLink
              title={"Reviews"}
              path={"/reviews"}
              justIcon={true}
              icon={<StarIcon />}
            />
            <NavLink
              title={"Favoritos"}
              path={"/favoritos"}
              justIcon={true}
              icon={<HeartIcon />}
            />
            <NavLink
              title={"Carrito"}
              path={"/carrito"}
              justIcon={true}
              icon={<ShoppingCartIcon />}
            />
            <NavLink
              title={"Usuario"}
              path={"/usuario"}
              justIcon={true}
              icon={<UserIcon />}
            />
            <button className="h-8 w-8 text-bgray">
              <ArrowLeftStartOnRectangleIcon />
            </button>
          </>
        ) : (
          <>
            <NavLink
              title={"Carrito"}
              path={"/carrito"}
              icon={<ShoppingCartIcon />}
              justIcon={true}
            />
            <Btn text={"Ingresar"} />
          </>
        )}
      </div>
    </div>
  );
}
