export default function HeroSection() {
  return (
    <section className="bg-tornado fixed top-0 z-10 w-full bg-opacity-50 bg-cover p-10">
      <div className="container mx-auto mt-24 grid grid-cols-2 justify-center text-center text-white">
        <div>
          <p className="rounded-md bg-white/20 p-10 text-5xl font-semibold">
            En <span className="text-brand">Vital</span>
            <span className="text-bgray">Fit</span> encontrarás todo lo que
            necesitas para tu estilo de vida fitness
          </p>
        </div>
        <div>Fotito para mostrar productos</div>
      </div>
    </section>
  );
}
