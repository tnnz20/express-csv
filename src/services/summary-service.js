import * as summaryRepositories from "../repositories/summary-repository.js";

export async function findUniqueUsersByDay() {
    const uniqueUsersByDay = await summaryRepositories.GetUniqueUsersByDay();

    const transformedResult = uniqueUsersByDay.map((item) => {
        return {
            date: item.recordDate.toISOString().slice(0, 10),
            uniqueUsers: item._count.personEmail,
        };
    });
    return transformedResult;
}

export async function findTotalUniqueUsers() {
    const uniqueUsers = await summaryRepositories.GetTotalUniqueUsers();

    return uniqueUsers;
}

export async function calculateNewAndReturningUsers() {
    const userCountsByDate = await summaryRepositories.GetNewAndReturningUsers();

    const userCounts = {};

    userCountsByDate.forEach(({ recordDate, _count }) => {
        const parsedDate = new Date(recordDate);

        const year = parsedDate.getFullYear();
        const month = parsedDate.getMonth() + 1;
        const day = parsedDate.getDate();

        // Format the date in YYYY-MM-D format
        const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
            day < 10 ? "0" : ""
        }${day}`;

        if (!userCounts[formattedDate]) {
            userCounts[formattedDate] = {
                newUsers: 0,
                returningUsers: 0,
            };
        }

        if (_count === 1) {
            userCounts[formattedDate].newUsers += 1;
        } else {
            userCounts[formattedDate].returningUsers += 1;
        }
    });

    return userCounts;
}

export async function totalNewAndReturningUsers() {
    const userCountsByDate = await summaryRepositories.GetNewAndReturningUsers();

    const userCounts = {
        newUsers: 0,
        returningUsers: 0,
    };

    const userVisits = {};

    userCountsByDate.forEach(({ personEmail, recordDate, _count }) => {
        if (!userVisits[personEmail]) {
            userVisits[personEmail] = { dates: [] };
        }

        if (_count === 1) {
            userCounts.newUsers += 1;
            userVisits[personEmail].dates.push(recordDate);
        } else if (_count > 1) {
            if (!userVisits[personEmail].dates.includes(recordDate)) {
                userCounts.returningUsers += 1;
                userVisits[personEmail].dates.push(recordDate);
            }
        }
    });

    return userCounts;
}

export async function totalBusyDays() {
    const countBusyDays = await summaryRepositories.GetCountBusyDays();
    const transformedResult = countBusyDays.map((item) => {
        return {
            date: item.recordDate.toISOString().slice(0, 10),
            users: item._count,
        };
    });
    return transformedResult;
}

export async function totalBusyHours() {
    const countBusyDays = await summaryRepositories.GetCountBusyHours();
    const transformedResult = countBusyDays.map((item) => {
        return {
            date: item.recordDate.toISOString().slice(0, 10),
            time: item.loginTime,
            users: item._count,
        };
    });
    return transformedResult;
}

export async function totalData() {
    const total = await summaryRepositories.GetTotalData();

    const transformedResult = {
        total: total._count.id,
    };

    return transformedResult;
}
