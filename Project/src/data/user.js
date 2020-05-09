import * as faker from 'faker';

const password = faker.internet.password();

export const userData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    countryCode: "UA",
    email: faker.internet.email(),
    password: password,
    confirmPassword: password
}