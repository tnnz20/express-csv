import { prisma } from "../applications/config/prisma.js";
import ResponseError from "../error/response-error.js";

export async function GetProfileById(id) {
    try {
        return await prisma.user.findUnique({
            where: {
                id: id,
            },
        });
    } catch (error) {
        throw new ResponseError(500, `Internal Server Error: \n ${error}`);
    }
}

export async function GetTopUsers(city, limit) {
    try {
        return await prisma.user.findMany({
            where: {
                locationName: city,
            },
            take: limit,
        });
    } catch (error) {
        throw new ResponseError(500, `Internal Server Error: \n ${error}`);
    }
}
