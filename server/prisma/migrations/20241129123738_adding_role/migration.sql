-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'Student';

-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "bookImage" TEXT NOT NULL,
    "owner" TEXT NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_owner_fkey" FOREIGN KEY ("owner") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
