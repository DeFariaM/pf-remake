"use client";

export default function Btn({
  onClick = () => {},
  text,
  color = "",
  className,
}) {
  return (
    <button
      onClick={onClick}
      className={`${color === "dark" ? "bg-bgray hover:bg-bgray hover:opacity-80" : color === "accent" ? "bg-accent hover:bg-brand" : "bg-brand hover:bg-accent"} ${className} rounded-md px-4 py-2 text-sm font-semibold uppercase text-white transition-all duration-300`}
    >
      {text}
    </button>
  );
}
