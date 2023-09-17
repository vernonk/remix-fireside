import type { ActionFunctionArgs } from "@remix-run/node";

import { createUserSession, login } from '~/utils/session.server';
import { badRequest } from "~/utils/request.server";

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const username = form.get('username');
  const password = form.get('password');

  if (typeof username !== 'string' || typeof password !== 'string') {
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: 'Invalid form data',
    });
  }

  const user = await login({ username, password });

  if (!user) {
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: 'Invalid user information',
    });
  }

  return createUserSession(user.id, "/books");
}

export default function LoginRoute() {
  return (
    <div>
      <h2>Login</h2>
      <form method="post">
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
