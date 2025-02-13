'use client';
import { Proposal } from '@/app/lib/proposals/definitions';
import { ProposalPDF } from '@/app/lib/proposals/definitions';
import { Policie } from '@/app/lib/policies/definitions';
import { User } from '@/app/lib/users/definitions';
import { Client } from '@/app/lib/clients/definitions';
import { Plan } from '@/app/lib/plans/definitions';
import { Cost } from '@/app/lib/costs/definitions';
import { Companie } from '@/app/lib/companies/definitions';
import {  PDFDownloadLink } from '@react-pdf/renderer'
import { formatDateToLocal } from '@/app/lib/utils';
import {DocPDF, DocPDF2} from './docPDF';

import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('@react-pdf/renderer').then(mod => mod.PDFViewer), {
  ssr: false
});

export default function PdfProposalForm({
  proposal,
  clients,
  users,
  policies,
  plans,
  costs,
  companies 
}: {
  proposal: Proposal;
  clients: Client[],
  users: User[],
  policies: Policie[],
  plans: Plan[],
  costs: Cost[], 
  companies: Companie[]
}) {

  const data: ProposalPDF = {
    proposal,
    client: clients.find((c) => c.id === proposal.idclient) as Client,
    user: users.find((c) => c.id === proposal.iduser) as User,
    policie: policies.find((c) => c.id === proposal.idpolicie) as Policie,
    plan: plans.find((c) => c.id === proposal.idplan) as Plan,
    cost: costs.find((c) => c.id === proposal.idcost) as Cost,
    companie: companies.find((c) => c.id === policies.find((c) => c.id === proposal.idpolicie)?.idcompany) as Companie,
  };

  return (
    <div>
      <PDFViewer style={{ width: '100%', height: '500px', marginTop: 20 }}>
        <DocPDF data={data}/>
      </PDFViewer>     
    </div>
);
}
/*
<DocPDF data={data}/>
        <DocPDF2 />

<PDFDownloadLink 
document={<DocPDF data={data}/>}
fileName={
  proposal.number + '-' + data.client?.name + '.pdf'
}>
{({ loading }) => (loading ? 'Gerando PDF...' : 'Download ')}
</PDFDownloadLink>
*/