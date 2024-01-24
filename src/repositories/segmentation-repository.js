import { prisma } from "../applications/config/prisma.js";
import ResponseError from "../error/response-error.js";

export async function GetAgeUsers() {
    try {
        return await prisma.user.groupBy({
            by: ["personEmail", "personAge"],
        });
    } catch (error) {
        throw new ResponseError(500, `Internal Server Error: \n ${error}`);
    }
}

export async function GetGenderUsers() {
    try {
        return await prisma.user.groupBy({
            by: ["personEmail", "personGender"],
        });
    } catch (error) {
        throw new ResponseError(500, `Internal Server Error: \n ${error}`);
    }
}

export async function GetDeviceUsers() {
    try {
        return await prisma.user.groupBy({
            by: ["personEmail", "deviceBrand"],
        });
    } catch (error) {
        throw new ResponseError(500, `Internal Server Error: \n ${error}`);
    }
}

export async function GetInterestUsers() {
    try {
        return await prisma.user.groupBy({
            by: ["personEmail", "digitalInterest"],
        });
    } catch (error) {
        throw new ResponseError(500, `Internal Server Error: \n ${error}`);
    }
}
