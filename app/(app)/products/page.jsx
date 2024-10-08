import Card from "@/components/Card";

export default function Products() {
  return (
    <div className="container mx-auto grid grid-cols-4 gap-4 p-4">
      <div className="border-bgray/45 col-span-1 max-h-fit w-full rounded-md border-2 bg-white p-6 shadow-md">
        Filtros
      </div>
      <div className="w-fullp-6 relative col-span-3 flex flex-wrap gap-4">
        <Card title={"Titulo"} price={85000} />
        <Card title={"Titulo"} price={85000} />
        <Card title={"Titulo"} price={85000} />
        <Card title={"Titulo"} price={85000} />
        <Card title={"Titulo"} price={85000} />
        <Card title={"Titulo"} price={85000} />
      </div>
    </div>
  );
}
