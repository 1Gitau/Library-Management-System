import express from "express";
import { PrismaClient } from "@prisma/client";

const dashboardCounts = async (_req, res) => {
  try {
    const [totalBooks, totalStudents] = await Promise.all([
      prisma.book.count(), // Count total books
      prisma.student.count(), // Count total students
    ]);

    res.status(200).json({
      totalBooks,
      totalStudents,
    });
  } catch (error) {
    console.error("Error fetching counts:", error);
    res.status(500).json({ message: "Failed to fetch counts" });
  }
};

export default dashboardCounts;
