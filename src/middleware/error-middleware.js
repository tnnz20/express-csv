import ResponseError from "../error/response-error.js";

export async function errorMiddleware(error, _, res, next) {
    if (!error) {
        next();
        return;
    }

    if (error instanceof ResponseError) {
        res.status(error.statusCode)
            .json({
                status: "error",
                message: error.message,
            })
            .end();
    } else {
        res.status(500)
            .json({
                status: "error",
                message: error.message || "Internal Server Error",
            })
            .end();
    }
}
