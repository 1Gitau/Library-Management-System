-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "rollNo" TEXT NOT NULL,
    "Grade" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_rollNo_key" ON "Student"("rollNo");
