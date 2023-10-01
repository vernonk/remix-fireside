import { Form } from '@remix-run/react';

export default function BooksNewRoute() {
  return (
    <div>
      <h2>Add a new book</h2>
      <Form method="post">
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" name="title" type="text" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input id="author" name="author" type="text" />
        </div>
        <div>
          <label htmlFor="link">Link</label>
          <input id="link" name="link" type="url" />
        </div>
        <div>
          <label htmlFor="coverLink">Cover Link</label>
          <input id="coverLink" name="coverLink" type="url" />
        </div>
        <button type="submit">Create</button>
      </Form>
    </div>
	);
}
