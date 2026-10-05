import React from 'react';
import { FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const CallToAction: React.FC = () => {
  return (
    <section id="call" aria-labelledby="contact-heading" className="py-20 text-center bg-gradient-to-b from-blue-50 to-white">
      <h2 id="contact-heading" className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-900 tracking-tight drop-shadow">
        Vamos conversar sobre seu projeto?
      </h2>
      <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
        Conte o que sua empresa precisa e fale diretamente com a nossa equipe.
      </p>
      <a
        href="https://wa.me/5551992274105"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
      >
        <FaWhatsapp size={22} aria-hidden="true" />
        <span>Fale com a Autoric pelo WhatsApp</span>
      </a>
      <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
        <a
          href="mailto:autoricbr@gmail.com"
          className="inline-flex min-h-11 items-center gap-2 text-gray-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        >
          <FaEnvelope className="text-blue-700" size={18} aria-hidden="true" />
          <span>autoricbr@gmail.com</span>
        </a>
        <a
          href="https://www.instagram.com/autoricbr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 text-gray-700 underline decoration-pink-300 underline-offset-4 transition hover:text-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
        >
          <FaInstagram className="text-pink-700" size={18} aria-hidden="true" />
          <span>@autoricbr</span>
        </a>
      </div>
    </section>
  );
};

export default CallToAction;