import ResponseError from "../error/response-error.js";
import * as usersRepositories from "../repositories/users-repository.js";

export async function GetUserProfile(id) {
    const user = await usersRepositories.GetProfileById(parseInt(id));

    if (!user) throw new ResponseError(404, "User not found...");

    return user;
}

export async function GetTopUsers(city, limit) {
    const topUsers = await usersRepositories.GetTopUsers(city, parseInt(limit));
    if (!topUsers) throw new ResponseError(404, "City not found...");

    return topUsers;
}
