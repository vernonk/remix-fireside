import {
  Link,
  LiveReload,
  Outlet,
} from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>Fireside Bookshelf</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="container">
          <div className="header">
            <h1>📚 Fireside Bookshelf</h1>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/books">Books</Link>
              <Link to="/books/new">Add Book</Link>
            </nav>
          </div>
          <Outlet />
        </div>
        <LiveReload />
      </body>
    </html>
  );
}
