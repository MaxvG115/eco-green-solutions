export default function ContactForm() {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto max-w-lg">
          <h3 className="text-3xl font-bold text-center mb-8">Contáctanos</h3>
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700">Nombre</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Mensaje</label>
              <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"></textarea>
            </div>
            <button className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-800">Enviar</button>
          </form>
        </div>
      </section>
    );
  }
  