import Form from '@/app/ui/users/edit-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import {fetchUserById } from '@/app/lib/users/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Users',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const [user] = await Promise.all([
        fetchUserById(id),
      ]);
      if (!user) {
    notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                { label: 'Users', href: '/users' },
                {
                    label: 'Edit User',
                    href: `/users/${id}/edit`,
                    active: true,
                },
                ]}
            />
        <Form user={user} />
        </main>
  );
}