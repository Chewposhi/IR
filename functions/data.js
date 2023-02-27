/* eslint-disable */

const admin = require("firebase-admin");
const {faker} = require("@faker-js/faker");
const serviceAccount = require("../information-retrieval-b4c4a-firebase-adminsdk-rq8fz-2875261bbb.json");

// Initialize Firebase Admin 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const addFakeIt = () => {
  return db.collection("users").add({
    username: faker.name.findName(),
    email: faker.internet.email(),
    bio: faker.hacker.phrase(),
    avatar: faker.internet.avatar(),
  });
};

Array(10).fill(0).forEach(addFakeIt);