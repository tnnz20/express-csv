-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "location" VARCHAR(100) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "login" VARCHAR(100) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" VARCHAR(20) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "noTelp" VARCHAR(50) NOT NULL,
    "device" VARCHAR(50) NOT NULL,
    "interest" VARCHAR(100) NOT NULL,
    "locType" VARCHAR(100) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
