export default function Hero() {
    return (
      <section className="bg-cover text-white h-screen flex items-center justify-center " style={{ backgroundImage: "url('/grass.jpg')" }}>
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold">Vive Verde, Vive Mejor</h2>
          <p className="mt-4 text-xl md:text-2xl">Productos ecológicos para un hogar sostenible</p>
          <button className="mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-lg transition hover:scale-105 duration-300 ease-in-out transform">Ayuda al medio ambiente!</button>
        </div>
      </section>
    );
  }
  