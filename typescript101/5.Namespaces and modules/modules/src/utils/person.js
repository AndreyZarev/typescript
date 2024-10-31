export const getAvgAge = (persons) => {
    let sum = 0;
    persons.forEach((p) => {
        sum += p.age;
    });
    return sum / persons.length;
};
