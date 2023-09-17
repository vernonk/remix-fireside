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
    },
    {
      title: "The DevOps Handbook",
      description: "How to Create World-Class Agility, Reliability, and Security in Technology Organizations",
      author: "Gene Kim, Patrick Debois, John Willis, Jez Humble",
      link: "https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations-ebook/dp/B09G2GS39R/ref=sr_1_1",
      coverLink: "https://m.media-amazon.com/images/I/817CPLV9r4L._SL1500_.jpg"
    },
    {
      title: "Enginering Management for the Rest of Us",
      description: "The book for those who didn't go into Engineering with the career goal of becoming a manager.",
      author: "Sarah Drasner",
      link: "https://www.amazon.com/Engineering-Management-Rest-Sarah-Drasner-ebook/dp/B0BGYVDX35/ref=sr_1_1",
      coverLink: "https://m.media-amazon.com/images/I/910mP4Y5dSL._SL1500_.jpg"
    },
    {
      title: "The Developer Advocacy Handbook",
      description: "This handbook will get you on the way to be a great developer advocate for any product or company.",
      author: "Christian Heilmann",
      link: "https://www.amazon.com/Developer-Advocacy-Handbook-Christian-Heilmann-ebook/dp/B0BKNTPDFJ/ref=sr_1_1",
      coverLink: "https://m.media-amazon.com/images/I/418qNXFmOkL._SL1000_.jpg"
    },
    {
      title: "The Pragmatic Programmer",
      description: "A classic with a new edition re-examining what it means to be a modern programmer.",
      author: "David Thomas, Andrew Hunt",
      link: "https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052",
      coverLink: "https://m.media-amazon.com/images/I/71f743sOPoL._SL1500_.jpg"
    },
    {
      title: "Human Compatible: Artificial Intelligence and the Problem of Control",
      description: "A book about the future of AI and how we can make sure it's a good one.",
      author: "Stuart Russell",
      link: "https://www.amazon.com/Human-Compatible-Artificial-Intelligence-Problem-ebook/dp/B07N5J5FTS/ref=sr_1_1",
      coverLink: "https://m.media-amazon.com/images/I/81nhGK0DNLL._SL1500_.jpg"
    }
  ]
}