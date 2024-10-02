"use client";
import Link from "next/link";
import { useState } from "react";
import Btn from "@/components/Btn";
import InputField from "@/components/InputField";
import { signIn } from "@/firebase/auth";
import { handleInputs } from "@/helpers/handleInputs";

export default function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <h1 className="text-center font-bebas text-2xl text-bgray">Ingresar</h1>
      <form className="input-cont">
        <InputField
          label={"Email"}
          name={"email"}
          type="email"
          value={user.email}
          onChange={(e) => handleInputs(e, setUser)}
        />

        <InputField
          label={"Contraseña"}
          name={"password"}
          type="password"
          value={user.password}
          onChange={(e) => handleInputs(e, setUser)}
        />
        <Btn
          text={"Ingresar"}
          onClick={async (e) => {
            e.preventDefault();
            await signIn(user);
          }}
        />
      </form>
      <div className="mt-4">
        <p className="text-center text-sm text-bgray">
          <Link
            className="underline transition-colors duration-500 hover:text-brand"
            href={"/sign-up"}
          >
            ¿Olvidaste tu contraseña?{" "}
          </Link>
        </p>
        <p className="mt-4 text-center text-sm text-bgray">
          ¿Aún no tienes una cuenta?{" "}
          <Link
            className="underline transition-colors duration-500 hover:text-brand"
            href={"/sign-up"}
          >
            Registrarse
          </Link>
        </p>
      </div>
    </div>
  );
}
