import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const createBooks = async (req, res) => {
  const { title, bookImage } = req.body;

  const userId = req.userId;
  console.log(userId);

  try {
    const book = await client.book.create({
      data: {
        title,
        bookImage,
        owner: userId,
      },
    });

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await client.book.findMany();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};

export { createBooks, getBooks };
