"use client";
import { usePathname } from "next/navigation";
import SigninBtns from "@/components/SignInBtns";
import Image from "next/image";

export default function AuthLayout({ children }) {
  const path = usePathname();
  return (
    <div className="flex h-[100vh] items-center justify-center bg-opacity-80 bg-pattern lg:grid lg:grid-cols-3 lg:bg-none">
      <div className="hidden h-[400px] flex-col items-center justify-end border-b-[1px] border-gray-300 p-12 lg:flex">
        <Image
          alt=""
          src={"img/bike.svg"}
          width={480}
          height={480}
          className="inset-0 object-cover"
          priority
        />
      </div>
      <div className="min-h-[500px] max-w-[600px] flex-col items-center justify-center gap-3 rounded-lg bg-gray-100 px-6 py-3 shadow-md">
        <div className="flex flex-col items-center justify-evenly gap-4 lg:flex-row">
          <Image
            alt=""
            src={"img/logo.svg"}
            width={40}
            height={80}
            className="inset-0 object-cover"
            priority
          />
          <p className="font-bebas text-4xl uppercase text-bgray">
            {path === "/sign-up" ? (
              <span>
                ¡Bienvenido a <span className="text-brand">Vital</span>Fit!
              </span>
            ) : (
              <span>
                ¡Que bueno verte de <span className="text-brand">nuevo</span>!
              </span>
            )}
          </p>
        </div>
        <div>{children}</div>
        <div className="mt-4 flex items-center border-bgray text-sm font-light text-bgray">
          <hr className="flex-grow border-t border-bgray" />
          <span className="px-3">O continuar con</span>
          <hr className="flex-grow border-t border-bgray" />
        </div>
        <SigninBtns />
      </div>
      <div className="hidden h-[400px] flex-col items-center border-b-[1px] border-gray-300 p-12 lg:flex">
        <Image
          alt=""
          src={"img/personal-training.svg"}
          width={500}
          height={500}
          className="inset-0 object-cover"
          priority
        />
      </div>
    </div>
  );
}
