import * as segmentationServices from "../services/segmentation-service.js";

export async function segmentationAge(_, res, next) {
    try {
        const result = await segmentationServices.segmentationAge();

        res.status(200).json({
            status: "success",
            message: "Data successfully retrieved.",
            data: result,
        });
    } catch (error) {
        next(error);
    }
}

export async function segmentationGender(_, res, next) {
    try {
        const result = await segmentationServices.segmentationGender();

        res.status(200).json({
            status: "success",
            message: "Data successfully retrieved.",
            data: result,
        });
    } catch (error) {
        next(error);
    }
}
export async function segmentationDevice(_, res, next) {
    try {
        const result = await segmentationServices.segmentationDevice();

        res.status(200).json({
            status: "success",
            message: "Data successfully retrieved.",
            data: result,
        });
    } catch (error) {
        next(error);
    }
}
export async function segmentationInterest(_, res, next) {
    try {
        const result = await segmentationServices.segmentationInterest();

        res.status(200).json({
            status: "success",
            message: "Data successfully retrieved.",
            data: result,
        });
    } catch (error) {
        next(error);
    }
}
