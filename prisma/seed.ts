import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

async function seed() {
  const user = await db.user.create({
    data: {
      username: 'fireside',
      // 'password' hashed with bcrypt
      passwordHash: '$2y$10$9qIetCEIXQ92waS39i5rZOmI.x30qGjEotghsWxwRrBZfCf1aXM2G'
    }
  });
  await Promise.all(
    getBooks().map((book) => {
      const data = { userId: user.id, ...book };
      return db.book.create({ data })
    })
  );
}

seed();

function getBooks() {
  return [
    {
      title: 'Accelerate',
      description: 'The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations',
      author: 'Nicole Forsgren, Jez Humble, Gene Kim',
      link: 'https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339',
      coverLink: 'https://m.media-amazon.com/images/I/41PuOqi0f1L.jpg'
    },
    {
      title: 'The Phoenix Project',
      description: 'A Novel about IT, DevOps, and Helping Your Business Win',
      author: 'Gene Kim, Kevin Behr, George Spafford',
      link: 'https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/0988262592',
      coverLink: 'https://m.media-amazon.com/images/I/914-sUgELZL.jpg'
    },
    {
      title: 'Righting Software',
      description: 'A Method for System and Project Design',
      author: 'Juval Löwy',
      link: 'https://www.amazon.com/Righting-Software-System-Project-Design/dp/0136524036',
      coverLink: 'https://m.media-amazon.com/images/I/41OBeb0pijL.jpg'
    },
    {
      title: 'Computer Science Distilled',
      description: 'Learn the Art of Solving Computational Problems',
      author: 'Wladston Ferreira Filho',
      link: 'https://www.amazon.com/Computer-Science-Distilled-Computational-Problems/dp/0997316020',
      coverLink: 'https://m.media-amazon.com/images/I/711IEWacYAL.jpg'
    },
    {
      title: 'Become an Effective Software Engineering Manager',
      description: 'How to Be a Good Software Development Manager',
      author: 'James Stanier',
      link: 'https://www.amazon.com/Become-Effective-Software-Engineering-Manager/dp/1680507249',
      coverLink: 'https://m.media-amazon.com/images/I/91qaJd4Yr9L.jpg'
    }
  ]
}