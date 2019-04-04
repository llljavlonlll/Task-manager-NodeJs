const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");

const userOne = {
    name: "Test",
    email: "test@example.com",
    password: "123what!!"
};

beforeEach(async () => {
    await User.deleteMany();
    await new User(userOne).save();
});

test("Should sign up a new user", async () => {
    await request(app)
        .post("/users")
        .send({
            name: "Javlon",
            email: "javlon@example.com",
            password: "MyPass777!"
        })
        .expect(201);
});
