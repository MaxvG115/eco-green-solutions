export default function Header() {
    return (
      <header className="bg-green-700 text-white p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img src="/Leaf_icon_03.svg" alt="Leaf Icon" className="w-8 h-8" />
            <h1 className="text-2xl font-bold text-center md:text-left">EcoGreen Solutions</h1>
          </div>
          <nav>
            <ul className="flex items-center flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li><a href="#" className="hover:underline">Inicio</a></li>
              <li><a href="#" className="hover:underline">Productos</a></li>
              <li><a href="#" className="hover:underline">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  