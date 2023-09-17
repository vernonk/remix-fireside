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
