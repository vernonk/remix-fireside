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

## Helpful snippets to save you (and me) time

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

### Some book info for testing our add form

```text
Title: Hypermedia Systems
Description: Explore a simpler approach to building applications on the Web and beyond with htmx and Hyperview.
Author: Carson Gross, Adam Stepinski, Deniz Aksimsek
Link: https://www.amazon.com/Hypermedia-Systems-Carson-Gross-ebook/dp/B0CC315VJK/ref=lp_16232546011_1_5
Cover Link: https://m.media-amazon.com/images/I/91m0YqE0MdL._SL1500_.jpg
```

```text
Title: JavaScript: The Definitive Guide
Description: The go-to guide for JavaScript programmers.
Author: David Flanagan
Link: https://www.amazon.com/JavaScript-Definitive-Most-Used-Programming-Language/dp/1491952024/ref=pd_bxgy_sccl_2/133-3960070-8880527
Cover Link: https://m.media-amazon.com/images/I/91hUer84PpL._SL1500_.jpg
```

```text
Title: Good Strategy Bad Strategy
Description: Creating real and meaningful strategies as a leader
Author: Richard Rumelt
Link: https://www.amazon.com/Good-Strategy-Bad-Difference-Matters-ebook/dp/B004J4WKEC/ref=sr_1_1
Cover Link: https://m.media-amazon.com/images/I/81qZbE4Yj8L._SL1500_.jpg
```

```text
Title: An Elegant Puzzle: Systems of Engineering Management
Description: Focuses on the particular challenges of engineering management and provides a path to the good solutions.
Author: Will Larson
Link: https://www.amazon.com/Elegant-Puzzle-Systems-Engineering-Management-ebook/dp/B07QYCHJ7V
Cover Link: https://m.media-amazon.com/images/I/71SebuRlAXL._SL1400_.jpg
```

```text
Title: Lean UX
Description: Applying lean principles to improve user experience
Author: Jeff Gothelf, Josh Seiden
Link: https://www.amazon.com/Lean-UX-Jeff-Gothelf-ebook/dp/B09BH8RF8M/ref=sr_1_1
Cover Link: https://m.media-amazon.com/images/I/71QOKKYYHvL._SL1500_.jpg
```
