import * as summaryServices from "../services/summary-service.js";

export async function findUniqueUsersByDay(_, res, next) {
    try {
        const result = await summaryServices.findUniqueUsersByDay();

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

export async function findTotalUniqueUsers(_, res, next) {
    try {
        const result = await summaryServices.findTotalUniqueUsers();

        res.status(200).json({
            status: "success",
            message: "Data successfully retrieved.",
            data: { totalUniqueUsers: result.length },
        });
    } catch (error) {
        next(error);
    }
}

export async function calculateNewAndReturningUsers(_, res, next) {
    try {
        const result = await summaryServices.calculateNewAndReturningUsers();

        res.status(200).json({
            status: "success",
            message: "Data successfully retrieved.",
            data: result,
        });
    } catch (error) {
        next(error);
    }
}

export async function totalNewAndReturningUsers(_, res, next) {
    try {
        const result = await summaryServices.totalNewAndReturningUsers();

        res.status(200).json({
            status: "success",
            message: "Data successfully retrieved.",
            data: result,
        });
    } catch (error) {
        next(error);
    }
}

export async function totalBusyDays(_, res, next) {
    try {
        const result = await summaryServices.totalBusyDays();

        res.status(200).json({
            status: "success",
            message: "Data successfully retrieved.",
            data: result,
        });
    } catch (error) {
        next(error);
    }
}
export async function totalBusyHours(_, res, next) {
    try {
        const result = await summaryServices.totalBusyHours();

        res.status(200).json({
            status: "success",
            message: "Data successfully retrieved.",
            data: result,
        });
    } catch (error) {
        next(error);
    }
}

export async function totalData(_, res, next) {
    try {
        const result = await summaryServices.totalData();

        res.status(200).json({
            status: "success",
            message: "Data successfully retrieved.",
            data: result,
        });
    } catch (error) {
        next(error);
    }
}
