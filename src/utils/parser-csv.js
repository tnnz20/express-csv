import fs from "fs";
import csv from "csv-parser";

async function csvParser(csvFile) {
    return new Promise((resolve, reject) => {
        const csvResult = [];
        const stream = fs.createReadStream(csvFile);

        const replacements = {
            Number: "employeeNumber",
            "Name of Location": "locationName",
            Date: "recordDate",
            "Login Hour": "loginTime",
            Name: "personName",
            Age: "personAge",
            gender: "personGender",
            Email: "personEmail",
            "No Telp": "phoneNumber",
            "Brand Device": "deviceBrand",
            "Digital Interest": "digitalInterest",
            "Location Type": "locationType",
        };

        const pattern = new RegExp(Object.keys(replacements).join("|"), "g");

        stream
            .pipe(
                csv({
                    mapHeaders: ({ header }) => {
                        return header.replace(
                            pattern,
                            (match) => replacements[match.trim()]
                        );
                    },
                })
            )
            .on("data", (data) => {
                csvResult.push(data);
            })
            .on("end", () => resolve(csvResult))
            .on("error", (error) =>
                reject(new Error(`Error reading CSV: ${error.message}`))
            );
    });
}

export default async function GetListCSV() {
    try {
        const result = await csvParser("./data/Dataset.csv");

        return result;
    } catch (error) {
        console.error(error);
    }
}
