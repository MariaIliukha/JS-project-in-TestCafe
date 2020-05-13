import * as faker from 'faker';

const password = faker.internet.password();

export const userData = {
    firstName: 'Maria',
    lastName: faker.name.lastName(),
    address: faker.address.streetAddress(),
    zipCode: faker.address.zipCode('#####'),
    city: faker.address.city(),
    countryCode: "UA",
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber('+380#########'),
    password: password,
    confirmPassword: password
}