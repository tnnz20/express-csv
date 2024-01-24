import validate from "../validators/validation.js";
import * as usersValidation from "../validators/users-validation.js";
import * as usersServices from "../services/users-service.js";
import ResponseError from "../error/response-error.js";

export async function GetUserProfile(req, res, next) {
    try {
        const id = req.params.id;
        const result = await usersServices.GetUserProfile(id);

        res.status(200).json({
            status: "success",
            message: "Data successfully retrieved.",
            data: result,
        });
    } catch (error) {
        next(error);
    }
}

export async function GetTopUsers(req, res, next) {
    try {
        const limit = req.query.limit || 5;
        const city = req.body.city;
        const validateCity = validate(usersValidation.GetTopUsersValidation, city);

        if (!validateCity) {
            throw new ResponseError(400, "Invalid City Name");
        }

        const result = await usersServices.GetTopUsers(validateCity, limit);
        res.status(200).json({
            status: "success",
            message: "Data successfully retrieved.",
            length: result.length,
            data: result,
        });
    } catch (error) {
        next(error);
    }
}
