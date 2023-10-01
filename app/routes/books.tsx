import type { LinksFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

import booksStylesUrl from '~/styles/books.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: booksStylesUrl },
];


export default function BooksRoute() {
  return (
    <div>
      <h2>Books</h2>
      <Outlet />
    </div>
  )
}