import type { LoaderFunctionArgs } from '@remix-run/node';

import { json } from '@remix-run/node';

import { useLoaderData } from '@remix-run/react';

import { db } from '~/utils/db.server';

export async function loader ({ params }: LoaderFunctionArgs) {
  const book = await db.book.findUnique({
    where: { id: params.bookId },
  });
  if (!book) {
    // we'll come back here
    return json({ title: '', description: '', coverLink: '' });
  }
  return json(book);
}

export default function BooksDetailsRoute() {
  const book = useLoaderData<typeof loader>();

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <img src={book.coverLink} alt={book.title} height="350" />
    </div>
  );
}
