import Navbar from "@/components/Navbar";

export default function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="mt-28">{children}</div>
    </>
  );
}
