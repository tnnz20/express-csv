import express from "express";
import * as summaryControllers from "../controllers/summary-controller.js";
import * as segmentationControllers from "../controllers/segmentation-controller.js";
import * as usersControllers from "..//controllers/users-controller.js";

const router = new express.Router();

const BASE_API = "/api/v1";

const BASE_API_SUMMARY = `${BASE_API}/summary`;
const BASE_API_SEGMENTATION = `${BASE_API}/segmentation`;
const BASE_API_USERS = `${BASE_API}/users`;

// SUMMARY
router.get(`${BASE_API_SUMMARY}/unique`, summaryControllers.findTotalUniqueUsers);
router.get(`${BASE_API_SUMMARY}/unique/days`, summaryControllers.findUniqueUsersByDay);
// Don't Get it
router.get(`${BASE_API_SUMMARY}/new-returning`, summaryControllers.totalNewAndReturningUsers);
router.get(
    `${BASE_API_SUMMARY}/new-returning/days`,
    summaryControllers.calculateNewAndReturningUsers
);
router.get(`${BASE_API_SUMMARY}/busy/days`, summaryControllers.totalBusyDays);
router.get(`${BASE_API_SUMMARY}/busy/hours`, summaryControllers.totalBusyHours);
router.get(`${BASE_API_SUMMARY}/total`, summaryControllers.totalData);

// SEGMENTATION
router.get(`${BASE_API_SEGMENTATION}/ages`, segmentationControllers.segmentationAge);
router.get(`${BASE_API_SEGMENTATION}/genders`, segmentationControllers.segmentationGender);
router.get(`${BASE_API_SEGMENTATION}/devices`, segmentationControllers.segmentationDevice);
router.get(`${BASE_API_SEGMENTATION}/interests`, segmentationControllers.segmentationInterest);

// // Users
router.get(`${BASE_API_USERS}/top`, usersControllers.GetTopUsers);
router.get(`${BASE_API_USERS}/profile/:id`, usersControllers.GetUserProfile);

export { router };
