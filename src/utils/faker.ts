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
    date: faker.date.past(),
  }
}

const generateFakeComment = () => {
  return {
    id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    username: faker.internet.userName(),
    date: faker.date.past(),
    message: faker.lorem.paragraph(),
  }
}

const generateFakesComments = (length: number) => {
  return Array.from({ length }, generateFakeComment)
}


export { generateFakeUser, generateFakePost, generateFakeComment, generateFakesComments }