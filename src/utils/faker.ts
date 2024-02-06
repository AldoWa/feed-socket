import { faker } from '@faker-js/faker'


const generateFakeUser = () => {
  return {
    username: faker.internet.userName(),
    avatar: faker.image.avatar()
  }
}

const generateFakePost = () => {
  return {
    content: faker.lorem.paragraph(),
    date: `${faker.date.anytime()}`,
  }
}

export { generateFakeUser, generateFakePost }