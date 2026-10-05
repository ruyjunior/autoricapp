import Hero from "@/app/ui/site/sections/hero";
import { Metadata } from 'next';
import Devs from "@/app/ui/site/deliveries/devs";
import Automation from "@/app/ui/site/deliveries/automation";

type PublicRepository = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  icon_url: string | null;
};

const repositoryIcons: Record<string, string> = {
  'sp-clp': 'https://raw.githubusercontent.com/Autoric-Automation-Systems/sp-clp/main/app/static/assets/icons/logo.png',
  'sp-th': 'https://raw.githubusercontent.com/Autoric-Automation-Systems/smartplantapp/main/public/images/logo/logo_SP-TH.png',
  'sp-ff': 'https://raw.githubusercontent.com/Autoric-Automation-Systems/smartplantapp/main/public/images/logo/logo_SP-FF.png',
  smartplantapp: 'https://raw.githubusercontent.com/Autoric-Automation-Systems/smartplantapp/main/public/images/logo/logo.png',
  'sp-is': 'https://raw.githubusercontent.com/Autoric-Automation-Systems/sp-is/master/assets/logo.png',
  'sp-ps': 'https://raw.githubusercontent.com/Autoric-Automation-Systems/smartplantapp/main/public/images/logo/logo_SP-PS.png',
  myplayapp: 'https://raw.githubusercontent.com/Autoric-Automation-Systems/myplayapp/main/public/icon.png',
};

const curatedSummaries: Record<string, string> = {
  'sp-clp': 'Aplicação local para monitoramento somente leitura de CLPs Siemens S7-1200.',
  'sp-th': 'Monitoramento de temperatura e umidade para plantas inteligentes.',
  'sp-ff': 'Medição inteligente de vazão para plantas inteligentes.',
  smartplantapp: 'Plataforma de telemetria para acompanhar plantas residenciais, comerciais e industriais.',
  'sp-ps': 'Módulo para monitoramento de estados de produção em linhas industriais.',
  myplayapp: 'Plataforma interativa desenvolvida com Next.js e React.',
};

function extractReadmeSummary(markdown: string): string | null {
  const paragraphs = markdown
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/^```[\s\S]*?^```/gm, '')
    .replace(/^\s*#+\s.*$/gm, '')
    .split(/\n\s*\n/);

  for (const paragraph of paragraphs) {
    const summary = paragraph
      .replace(/!?\[[^\]]*\]\([^)]*\)/g, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/[`*_~>#]/g, '')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    if (
      summary.length < 40 ||
      /^(installation|instalação|getting started|como usar|usage|uso|features|recursos|contributing|licen[cs]a)\b/i.test(summary)
    ) {
      continue;
    }

    const firstSentence = summary.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? summary;
    return firstSentence.length > 220
      ? `${firstSentence.slice(0, 217).trimEnd()}...`
      : firstSentence;
  }

  return null;
}

async function fetchReadmeSummary(repositoryName: string): Promise<string | null> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/Autoric-Automation-Systems/${encodeURIComponent(repositoryName)}/readme`,
      {
        headers: { Accept: 'application/vnd.github.raw+json' },
        next: { revalidate: 3600 },
      },
    );

    return response.ok ? extractReadmeSummary(await response.text()) : null;
  } catch (error) {
    console.error(`Failed to fetch README for ${repositoryName}:`, error);
    return null;
  }
}

async function fetchPublicRepositories(): Promise<PublicRepository[] | null> {
  try {
    const response = await fetch(
      'https://api.github.com/orgs/Autoric-Automation-Systems/repos?type=public&per_page=100&sort=updated',
      {
        headers: { Accept: 'application/vnd.github+json' },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`);
    }

    const repositories = await response.json() as PublicRepository[];

    return await Promise.all(repositories.map(async (repository) => ({
      ...repository,
      icon_url: repositoryIcons[repository.name] || null,
      description: repository.description || curatedSummaries[repository.name] || await fetchReadmeSummary(repository.name),
    })));
  } catch (error) {
    console.error('Failed to fetch public GitHub repositories:', error);
    return null;
  }
}

export const metadata: Metadata = {
  title: 'Entregas',
  description: 'AUTORIC ENTREGAS',
};

export default async function Page() {
  const repositories = await fetchPublicRepositories();

  return (
    <main >
      <div className="bg-gray text-gray-900">
        <Hero />
        <Devs repositories={repositories} />
        <Automation />
      </div>
    </main>
  );
}
