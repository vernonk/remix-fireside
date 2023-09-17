import {
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
          <Outlet />
          <LiveReload />
        </div>
      </body>
    </html>
  );
}
