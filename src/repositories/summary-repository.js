import { prisma } from "../applications/config/prisma.js";
import ResponseError from "../error/response-error.js";

export async function GetUniqueUsersByDay() {
    try {
        return await prisma.user.groupBy({
            by: ["recordDate", "personEmail"],
            _count: {
                personEmail: true,
            },
        });
    } catch (error) {
        throw new ResponseError(500, `Internal Server Error: \n ${error}`);
    }
}

export async function GetTotalUniqueUsers() {
    try {
        return await prisma.user.groupBy({
            by: "personEmail",
            _count: {
                personEmail: true,
            },
        });
    } catch (error) {
        throw new ResponseError(500, `Internal Server Error: \n ${error}`);
    }
}

export async function GetNewAndReturningUsers() {
    try {
        return await prisma.user.groupBy({
            by: ["recordDate", "personEmail"],
            _count: true,
        });
    } catch (error) {
        throw new ResponseError(500, `Internal Server Error: \n ${error}`);
    }
}

export async function GetCountBusyDays() {
    try {
        return await prisma.user.groupBy({
            by: ["recordDate"],
            _count: true,
        });
    } catch (error) {
        throw new ResponseError(500, `Internal Server Error: \n ${error}`);
    }
}

export async function GetCountBusyHours() {
    try {
        return await prisma.user.groupBy({
            by: ["recordDate", "loginTime"],
            _count: true,
        });
    } catch (error) {
        throw new ResponseError(500, `Internal Server Error: \n ${error}`);
    }
}

export async function GetTotalData() {
    try {
        return await prisma.user.aggregate({
            _count: {
                id: true,
            },
        });
    } catch (error) {
        throw new ResponseError(500, `Internal Server Error: \n ${error}`);
    }
}
