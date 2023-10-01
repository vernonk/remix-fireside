import { json } from '@remix-run/node';

import { Link, useLoaderData } from '@remix-run/react';

import { db } from '~/utils/db.server';

export async function loader() {
  const books = await db.book.findMany({
    select: { id: true, title: true, coverLink: true }
  });
  return json(books);
}

export default function BooksIndexRoute() {
  const books = useLoaderData<typeof loader>();
  return (
    <div>
      <p>Choose a book from the bookshelf!</p>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={book.id}>
              <img src={book.coverLink} alt={book.title} height="275" />
              <div className="title">{book.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}