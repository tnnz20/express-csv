-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "employeeNumber" INTEGER NOT NULL,
    "locationName" VARCHAR(100) NOT NULL,
    "recordDate" TIMESTAMP(3) NOT NULL,
    "loginTime" VARCHAR(100) NOT NULL,
    "personName" VARCHAR(100) NOT NULL,
    "personAge" INTEGER NOT NULL,
    "personGender" VARCHAR(20) NOT NULL,
    "personEmail" VARCHAR(100) NOT NULL,
    "phoneNumber" VARCHAR(50) NOT NULL,
    "deviceBrand" VARCHAR(50) NOT NULL,
    "digitalInterest" VARCHAR(100) NOT NULL,
    "locationType" VARCHAR(100) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
