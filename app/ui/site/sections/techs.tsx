import Image from 'next/image';

const logosAutomacao = [
  { src: '/images/techs/abb.jpg', name: 'ABB' },
  { src: '/images/techs/beckoff.png', name: 'Beckhoff' },
  { src: '/images/techs/Codesys.png', name: 'CODESYS' },
  { src: '/images/techs/omron.png', name: 'Omron' },
  { src: '/images/techs/Rockwell.png', name: 'Rockwell Automation' },
  { src: '/images/techs/twincat.png', name: 'TwinCAT' },
  { src: '/images/techs/tiaportal.png', name: 'TIA Portal' },
  { src: '/images/techs/weg.png', name: 'WEG' },
];

const logosDev = [
  { src: '/images/techs/vscode.png', name: 'Visual Studio Code' },
  { src: '/images/techs/git.png', name: 'Git' },
  { src: '/images/techs/javascript.png', name: 'JavaScript' },
  { src: '/images/techs/typescript.png', name: 'TypeScript' },
  { src: '/images/techs/react.png', name: 'React' },
  { src: '/images/techs/sql.png', name: 'SQL' },
  { src: '/images/techs/neon.png', name: 'Neon' },
  { src: '/images/techs/nodejs.png', name: 'Node.js' },
  { src: '/images/techs/vercel.png', name: 'Vercel' },
  { src: '/images/techs/nextjs.png', name: 'Next.js' },
  { src: '/images/techs/oop.png', name: 'Programação orientada a objetos' },
  { src: '/images/techs/solid.png', name: 'Princípios SOLID' },
  { src: '/images/techs/htmlcss.png', name: 'HTML e CSS' },
];

const Techs = () => {
  return (
    <section id="techs" className="py-20 bg-gradient-to-b from-blue-50 to-white text-center">
      <h2 className="text-5xl font-extrabold mb-10 text-blue-900 tracking-tight drop-shadow">
        Tecnologias Conhecidas
      </h2>
      <h2 className="text-3xl font-bold mb-8 text-blue-800">Automação Industrial</h2>
      <div className="flex justify-center flex-wrap gap-8 mb-20">
        {logosAutomacao.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center bg-white px-6 py-6 rounded-xl shadow-lg border border-blue-100 hover:scale-105 transition-transform duration-200 min-w-[120px] min-h-[120px]"
          >
            <Image
              src={logo.src}
              width={100}
              height={100}
              alt={`Logo de ${logo.name}`}
              className="object-contain w-24 h-24"
            />
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-8 text-blue-800">Desenvolvimento de Sistemas</h2>
      <div className="flex justify-center flex-wrap gap-8">
        {logosDev.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center bg-white px-6 py-6 rounded-xl shadow-lg border border-blue-100 hover:scale-105 transition-transform duration-200 min-w-[120px] min-h-[120px]"
          >
            <Image
              src={logo.src}
              width={100}
              height={100}
              alt={`Logo de ${logo.name}`}
              className="object-contain w-24 h-24"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Techs;