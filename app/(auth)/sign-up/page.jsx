"use client";
import Link from "next/link";
import { useState } from "react";
import Btn from "@/components/Btn";
import InputField from "@/components/InputField";
import { signUp } from "@/firebase/auth";
import { handleInputs } from "@/helpers/handleInputs";

export default function SignUp() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });

  return (
    <div>
      <h1 className="text-center font-bebas text-2xl text-bgray">
        Registrarse
      </h1>
      <form className="input-cont">
        <InputField
          label={"Nombre"}
          name={"name"}
          value={user.name}
          onChange={(e) => handleInputs(e, setUser)}
        />
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
          text={"Registrarse"}
          onClick={async (e) => {
            e.preventDefault();
            await signUp(user);
          }}
        />
      </form>
      <div className="mt-4">
        <p className="text-center text-sm text-bgray">
          ¿Ya tienes una cuenta?{" "}
          <Link
            className="text-bgray underline transition-colors duration-500 hover:text-brand"
            href={"/sign-in"}
          >
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
