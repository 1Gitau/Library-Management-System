import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const dashboardCountsController = async (_req, res) => {
  console.log("endpoint called");

  try {
    const [totalBooks, totalStudents, totalBorrowedBooks] = await Promise.all([
      prisma.book.count(), // Count total books
      prisma.student.count(), // Count total students
      // prisma.borrowedBook.count(),
    ]);

    res.status(200).json({
      totalBooks,
      totalStudents,
      // totalBorrowedBooks,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch counts", error: error.message });
  } finally {
    await prisma.$disconnect();
  }
};

export default dashboardCountsController;
