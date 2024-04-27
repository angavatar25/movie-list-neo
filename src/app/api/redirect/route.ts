import { redirect } from 'next/navigation';

export async function POST() {
  const redirectTo = '/';

  redirect(redirectTo)
};