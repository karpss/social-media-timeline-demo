import { faker } from "@faker-js/faker";

import { AppUser, Posts } from "../types/timeline";

export function createFollower(): AppUser {
  return {
    id: faker.string.uuid(),
    photo: faker.image.avatar(),
    name: faker.person.firstName() + " " + faker.person.lastName(),
    verified: Math.random() >= 0.5
  };
}

export function createUser(): AppUser {
  return {
    id: faker.string.uuid(),
    photo: faker.image.avatar(),
    name: faker.person.firstName() + " " + faker.person.lastName(),
    verified: Math.random() >= 0.5,
    followers: new Array(Math.floor(Math.random() * 15))
      .fill(null)
      .map(() => createFollower())
  };
}

export function createTimeline(): Posts {
  const author = createUser();
  return {
    id: faker.string.uuid(),
    author,
    content: faker.lorem.paragraph(),
    image: Math.random() > 0.5 ? faker.image.url() : undefined,
    replies: new Array(Math.floor(Math.random() * 10)).fill(null).map(() => ({
      id: faker.string.uuid(),
      author: createUser(),
      content: faker.lorem.sentence(),
      likes: Math.floor(Math.random() * 1000),
      createdAt: faker.date.recent().toISOString()
    })),
    repliesCount: Math.floor(Math.random() * 100),
    likesCount: Math.floor(Math.random() * 1000),
    createdAt: faker.date.recent().toISOString()
  };
}

export function generateTimeline(): Posts[] {
  return new Array(40).fill(null).map(() => createTimeline());
}
