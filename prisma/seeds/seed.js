import GetListCSV from "../../src/utils/parser-csv.js";
import { prisma } from "../../src/applications/config/prisma.js";

const data = await GetListCSV();

async function seedData() {
    try {
        for (const item of data) {
            await prisma.user.create({
                data: {
                    id: parseInt(item.id),
                    employeeNumber: parseInt(item.employeeNumber),
                    locationName: item.locationName,
                    recordDate: new Date(item.recordDate),
                    loginTime: item.loginTime,
                    personName: item.personName,
                    personAge: parseInt(item.personAge),
                    personGender: item.personGender,
                    personEmail: item.personEmail,
                    phoneNumber: item.phoneNumber,
                    deviceBrand: item.deviceBrand,
                    digitalInterest: item.digitalInterest,
                    locationType: item.locationType,
                },
            });
        }

        console.log("Data seeded successfully");
    } catch (error) {
        console.error("Error seeding data:", error);
    } finally {
        await prisma.$disconnect();
    }
}

seedData();
