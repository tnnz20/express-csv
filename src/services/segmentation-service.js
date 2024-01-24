import * as segmentationRepositories from "../repositories/segmentation-repository.js";
import { calculatePercentage } from "../utils/util.js";

export async function segmentationAge() {
    const getAges = await segmentationRepositories.GetAgeUsers();

    const currentYears = new Date().getFullYear();

    const currentAges = getAges.map((item) => currentYears - item.personAge);

    const initialSegmentation = {
        "< 18": 0,
        "18 - 24": 0,
        "25 - 34": 0,
        "35 - 44": 0,
        "45 - 64": 0,
        "> 64": 0,
    };

    currentAges.forEach((age) => {
        if (age < 18) {
            initialSegmentation["< 18"] += 1;
        } else if (age <= 24) {
            initialSegmentation["18 - 24"] += 1;
        } else if (age <= 34) {
            initialSegmentation["25 - 34"] += 1;
        } else if (age <= 44) {
            initialSegmentation["35 - 44"] += 1;
        } else if (age <= 64) {
            initialSegmentation["45 - 64"] += 1;
        } else {
            initialSegmentation["> 64"] += 1;
        }
    });

    const percentageSegmentation = {
        "< 18": calculatePercentage(initialSegmentation["< 18"], currentAges.length),
        "18 - 24": calculatePercentage(initialSegmentation["18 - 24"], currentAges.length),
        "25 - 34": calculatePercentage(initialSegmentation["25 - 34"], currentAges.length),
        "35 - 44": calculatePercentage(initialSegmentation["35 - 44"], currentAges.length),
        "45 - 64": calculatePercentage(initialSegmentation["45 - 64"], currentAges.length),
        "> 64": calculatePercentage(initialSegmentation["> 64"], currentAges.length),
    };

    return percentageSegmentation;
}

export async function segmentationGender() {
    const getGenders = await segmentationRepositories.GetGenderUsers();
    const initialSegmentation = {
        Male: 0,
        Female: 0,
    };

    getGenders.forEach((item) => {
        const gender = item.personGender;
        initialSegmentation[gender]++;
    });

    const percentageSegmentation = {};
    Object.keys(initialSegmentation).forEach((gender) => {
        percentageSegmentation[gender] = calculatePercentage(
            initialSegmentation[gender],
            getGenders.length
        );
    });

    return percentageSegmentation;
}

export async function segmentationDevice() {
    const getDevices = await segmentationRepositories.GetDeviceUsers();

    const initialSegmentation = {};
    getDevices.forEach((item) => {
        const brand = item.deviceBrand;
        initialSegmentation[brand] = (initialSegmentation[brand] || 0) + 1;
    });

    const percentageSegmentation = {};
    Object.keys(initialSegmentation).forEach((device) => {
        percentageSegmentation[device] = calculatePercentage(
            initialSegmentation[device],
            getDevices.length
        );
    });

    return percentageSegmentation;
}
export async function segmentationInterest() {
    const getInterests = await segmentationRepositories.GetInterestUsers();

    const initialSegmentation = {};
    getInterests.forEach((item) => {
        const interests = item.digitalInterest;
        initialSegmentation[interests] = (initialSegmentation[interests] || 0) + 1;
    });

    const percentageSegmentation = {};
    Object.keys(initialSegmentation).forEach((interests) => {
        percentageSegmentation[interests] = calculatePercentage(
            initialSegmentation[interests],
            getInterests.length
        );
    });

    return percentageSegmentation;
}
