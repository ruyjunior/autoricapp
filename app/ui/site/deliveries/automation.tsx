import React from 'react';
import AutomationMap from './automation-map-loader';
import { automationDeliveryCount, automationLocations } from './automation-locations';

export default function Automation() {
    const folderId = "1LsKL_LmR3tjkCT0eyn3Imx6N3UyVriCO";
    return (
        <section id="automation" className="py-20 text-center bg-gradient-to-b from-white to-blue-50">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-900 tracking-tight drop-shadow">
                Entregas de Automação
            </h2>
            <p className="mb-8 text-lg text-gray-700 max-w-2xl mx-auto">
                Confira alguns projetos e serviços de automação industrial já entregues pela nossa equipe.
            </p>
            <div className="mx-auto mb-16 max-w-6xl px-4 text-left sm:px-8">
                <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                    <div>
                        <h3 className="text-2xl font-bold text-blue-900">Atuação no Brasil</h3>
                        <p className="mt-1 text-gray-700">
                            {automationDeliveryCount} atendimentos documentados em {automationLocations.length} municípios.
                        </p>
                    </div>
                    <p className="text-sm text-gray-600">Marcadores indicam municípios, não endereços de clientes.</p>
                </div>
                <div className="overflow-hidden rounded-lg border border-blue-100 shadow-sm">
                    <AutomationMap />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-white px-2 py-6 rounded-2xl shadow-xl border border-blue-100 max-w-3xl mx-auto">
                <div className="w-full h-[350px] md:h-[500px] rounded-lg overflow-hidden shadow">
                    <iframe
                        src={`https://drive.google.com/embeddedfolderview?id=${folderId}#list`}
                        width="100%"
                        height="100%"
                        style={{ border: "none", minHeight: 350 }}
                        allowFullScreen
                        loading="lazy"
                        title="Projetos de Automação"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}