export default function Footer() {
    return (
      <footer className="bg-green-600 text-white py-8">
        <div className="container mx-auto text-center">
          <p>© 2024 EcoGreen Solutions</p>
          <p className="mt-2">Síguenos en nuestras redes sociales</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#"><img src="/icons8-facebook.svg" alt="Facebook" className="w-10 h-10 hover:scale-110 transition duration-300 ease-in-out" /></a>
            <a href="#"><img src="/icons8-x.svg" alt="Twitter" className="w-10 h-10 hover:scale-110 transition duration-300 ease-in-out" /></a>
            <a href="#"><img src="/icons8-instagram.svg" alt="Instagram" className="w-10 h-10 hover:scale-110 transition duration-300 ease-in-out" /></a>
          </div>
        </div>
      </footer>
    );
  }
  