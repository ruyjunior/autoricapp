import Form from '@/app/ui/projects/view-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { fetchProjectById } from '@/app/lib/projects/data';
import { fetchCompanies } from '@/app/lib/companies/data';
import { fetchTasksByProject } from '@/app/lib/tasks/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchEmployees } from '@/app/lib/employees/data';

export const metadata: Metadata = {
  title: 'Print PDF Projects',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const [project, companies, tasks, employees] = await Promise.all([
    fetchProjectById(id),
    fetchCompanies(),
    fetchTasksByProject(id), //FetchTasksByProject
    fetchEmployees()
  ]);
  if (!project) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Projects' , href: '/dashboard/projects' },
          {
            label: project.title,
            href: `/dashboard/projects/${id}/view`,
            active: true,
          },
        ]}
      />
      <Form
        project={project}
        tasks={tasks}
        companies={companies}
        employees={employees}
      />
    </main>
  );
}