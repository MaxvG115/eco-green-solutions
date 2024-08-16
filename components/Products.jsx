const products = [
    { id: 1, name: 'Detergente Ecológico', description: 'Un detergente amigable con el ambiente', image: '/detergent.jpg' },
    { id: 2, name: 'Bolsas Reutilizables', description: 'Perfectas para reducir el uso de plástico', image: '/bags.jpg' },
  ];
  
  export default function Products() {
    return (
      <section className="container mx-auto py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Principales Productos</h3>
        <div className="flex flex-wrap justify-center">
          {products.map(product => (
            <div key={product.id} className="max-w-xs mx-4 mb-8">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
              <h4 className="text-xl font-semibold mt-4">{product.name}</h4>
              <p className="mt-2 text-gray-700">{product.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  