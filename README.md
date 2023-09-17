# Remix 101 Fireside

- [Remix Docs](https://remix.run/docs)

## Getting things ready

* Clone the repository
* Make sure you're on Node 18 
* Run `git fetch origin` so you have reference to the necessary branches
* Run `npm ci`
* Create a `.env` file in the root of your repo with the following:

```sh
DATABASE_URL="file:./dev.db"
SESSION_SECRET=anythingyouwanthere
```

* From the terminal run `npx prisma db push` and then `npx prisma db seed`
  
You're ready to go for the Fireside!

## Running the app

* Run `npm run dev` to start the app

## Helpful snippet to save you (and me) time

### Add new book form

```tsx
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
```