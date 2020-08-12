const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = {
    authors: ["J.K. Rowling"],
    description: "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
    image: "https://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70NhAbzr01CLtn-rhmR_twRnH7jAB_T7q0A2RsFa4nP_aewWfFADl73fx7OYNet_82bEPHrOqzfEycRGOW1k5w9z-DSziiJ0JKuE7z8Ap8MNGakp_GpIso2fiirs19ciuNq9HXf",
    link: "https://books.google.com/books?id=sxFHPgAACAAJ&newbks=0&hl=en&source=newbks_fb",
    title: "Harry Potter and the Sorcerer's Stone",
}

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });