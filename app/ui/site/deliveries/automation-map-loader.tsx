'use client';

import dynamic from 'next/dynamic';

const AutomationMap = dynamic(() => import('./automation-map'), {
  ssr: false,
  loading: () => (
    <div
      role="status"
      className="h-[360px] w-full animate-pulse bg-blue-50 sm:h-[440px]"
    >
      Carregando mapa de atendimentos...
    </div>
  ),
});

export default AutomationMap;