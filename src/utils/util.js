export const calculatePercentage = (value, len, decimal = 1) => {
    const percent = ((value / len) * 100).toFixed(decimal);
    return percent;
};
