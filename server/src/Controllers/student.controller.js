import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const createStudents = async (req, res) => {
  const { roll, grade, password } = req.body;

  const userId = req.userId;
  console.log(userId);

  try {
    const student = await client.student.create({
      data: {
        rollNo: roll,
        Grade: grade,
        password,
      },
    });

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};

export { createStudents };
