import Image from 'next/image';

const logos = [
  { src: '/images/clients/khs.png', name: 'KHS' },
  { src: '/images/clients/ambev.jpg', name: 'Ambev' },
  { src: '/images/clients/gestamp.jpg', name: 'Gestamp' },
  { src: '/images/clients/gm.jpg', name: 'General Motors' },
  { src: '/images/clients/parker.png', name: 'Parker' },
  { src: '/images/clients/zegla.jpg', name: 'Zegla' },
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-gradient-to-b from-white to-blue-50 text-center">
      <h2 className="text-4xl font-extrabold mb-4 text-blue-900 tracking-tight drop-shadow">
        Nossos Clientes
      </h2>
      <h2 className="text-lg font-medium mb-10 text-gray-700">
        Cada cliente é fundamental para nossa equipe e nossa história.
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center bg-white px-6 py-4 rounded-xl shadow-lg border border-blue-100 hover:scale-105 transition-transform duration-200"
          >
            <Image
              src={logo.src}
              width={200}
              height={200}
              alt={`Logo de ${logo.name}`}
              className="object-contain h-32 w-32"
            />
          </div>
        ))}
      </div>
      <p className="mt-10 text-base text-gray-500">
        Obrigado por confiarem na <span className="font-bold text-blue-800">AUTORIC</span>.
      </p>
    </section>
  );
};

export default Clients;