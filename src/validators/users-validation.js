import Joi from "joi";

export const GetTopUsersValidation = Joi.string().max(100).required();
