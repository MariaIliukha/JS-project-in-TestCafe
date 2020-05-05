import * as faker from 'faker';

export const userData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
}