const {
    calculateTip,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    add
} = require("../src/math");

test("Should calculate total with tip", () => {
    const total = calculateTip(10, 30);
    expect(total).toBe(13);
});

test("Should calculate total with default tip", () => {
    const total = calculateTip(10);
    expect(total).toBe(12.5);
});

test("Should convert 32 F to 0 C", () => {
    const result = fahrenheitToCelsius(32);
    expect(result).toBe(0);
});

test("Should convert 0 to 32 F", () => {
    const result = celsiusToFahrenheit(0);
    expect(result).toBe(32);
});

test("Should add two numbers async/await", async () => {
    const sum = await add(10, 22);
    expect(sum).toBe(32);
});
