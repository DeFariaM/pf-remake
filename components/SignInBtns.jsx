"use client";

import { signInWithGithub, signInWithGoogle } from "@/firebase/auth";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function SigninBtns() {
  return (
    <article className="mt-4 flex justify-evenly">
      <button
        onClick={() => signInWithGoogle()}
        className="flex space-x-3 rounded-md px-4 py-2 text-bgray transition-all duration-500 hover:bg-bgray hover:text-white"
      >
        <span>Google</span>
        <FaGoogle className="h-6 w-6" />
      </button>
      <button
        onClick={() => signInWithGithub()}
        className="flex space-x-3 rounded-md px-4 py-2 text-bgray transition-all duration-500 hover:bg-bgray hover:text-white"
      >
        <FaGithub className="h-6 w-6" />
        <span>Github</span>
      </button>
    </article>
  );
}
