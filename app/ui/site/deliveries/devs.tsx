'use client';

import React from 'react';
import Image from 'next/image';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

type Repository = {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    homepage: string | null;
    language: string | null;
    stargazers_count: number;
    icon_url: string | null;
};

export default function Devs({ repositories }: { repositories: Repository[] | null }) {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollCarousel = (direction: number) => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        carousel.scrollBy({
            left: direction * carousel.clientWidth * 0.85,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        });
    };

    return (
        <section id="dev" className="py-20 text-center bg-gradient-to-b from-white to-blue-50">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-10 mt-20 text-blue-900 tracking-tight drop-shadow">
                Projetos Desenvolvidos
            </h2>
            {repositories === null ? (
                <p className="px-4 text-gray-600">Não foi possível carregar os projetos agora.</p>
            ) : repositories.length === 0 ? (
                <p className="px-4 text-gray-600">Nenhum repositório público encontrado.</p>
            ) : (
                <>
                    <div className="mb-5 flex justify-end gap-2 px-4 sm:px-8 lg:px-12">
                        <button
                            type="button"
                            onClick={() => scrollCarousel(-1)}
                            aria-label="Ver projetos anteriores"
                            title="Ver projetos anteriores"
                            aria-controls="repository-carousel"
                            className="flex size-10 items-center justify-center rounded-md border border-blue-200 bg-white text-blue-800 shadow-sm transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                        >
                            <FaChevronLeft aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollCarousel(1)}
                            aria-label="Ver próximos projetos"
                            title="Ver próximos projetos"
                            aria-controls="repository-carousel"
                            className="flex size-10 items-center justify-center rounded-md border border-blue-200 bg-white text-blue-800 shadow-sm transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                        >
                            <FaChevronRight aria-hidden="true" />
                        </button>
                    </div>
                    <div
                        id="repository-carousel"
                        ref={carouselRef}
                        role="region"
                        aria-label="Projetos públicos da Autoric"
                        aria-roledescription="carrossel"
                        tabIndex={0}
                        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 motion-reduce:scroll-auto sm:px-8 lg:px-12"
                    >
                        {repositories.map((repository) => (
                        <article
                            key={repository.id}
                            className="flex min-h-[280px] basis-[85%] snap-start flex-col items-center rounded-lg border border-blue-100 bg-white p-8 text-center shadow-xl transition-transform duration-200 hover:-translate-y-1 sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)]"
                        >
                            <div className="mb-4 flex size-24 shrink-0 items-center justify-center overflow-hidden p-2">
                                {repository.icon_url ? (
                                    <Image
                                        src={repository.icon_url}
                                        alt={`Ícone do projeto ${repository.name}`}
                                        width={96}
                                        height={96}
                                        className="h-full w-full object-contain"
                                    />
                                ) : (
                                    <FaGithub size={40} className="text-gray-500" aria-hidden="true" />
                                )}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-800">{repository.name}</h3>
                            {repository.description && (
                                <p className="mb-4 line-clamp-3 min-h-[4.5rem] text-base text-gray-600">{repository.description}</p>
                            )}
                            <div className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-500">
                                {repository.language && <span>{repository.language}</span>}
                                <span>{repository.stargazers_count} estrelas</span>
                            </div>
                            <div className="mt-auto flex gap-4 pt-2">
                                <a
                                    href={repository.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`Ver código de ${repository.name} no GitHub`}
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold hover:bg-blue-200 transition"
                                >
                                    <FaGithub size={20} aria-hidden="true" />
                                    <span>Código</span>
                                </a>
                                {repository.homepage && (
                                    <a
                                        href={repository.homepage}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`Abrir o site de ${repository.name}`}
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition"
                                    >
                                        <FaExternalLinkAlt size={16} aria-hidden="true" />
                                        <span>Projeto</span>
                                    </a>
                                )}
                            </div>
                        </article>
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}