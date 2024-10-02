import Btn from "@/components/Btn";
import InputField from "@/components/InputField";
import Link from "next/link";

export default function SignIn() {
  return (
    <div>
      <h1 className="text-center font-bebas text-2xl text-bgray">Ingresar</h1>
      <form className="input-cont">
        <InputField label={"Email"} name={"email"} type="email" />
        <InputField label={"Contraseña"} name={"password"} type="password" />
        <Btn text={"Registrarse"} />
      </form>
      <div className="mt-4">
        <p className="text-center text-sm text-bgray">
          ¿Aún no tienes una cuenta?{" "}
          <Link
            className="text-bgray underline transition-colors duration-500 hover:text-brand"
            href={"/sign-up"}
          >
            Registrarse
          </Link>
        </p>
      </div>
    </div>
  );
}
