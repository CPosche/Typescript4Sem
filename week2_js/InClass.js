const superagent = require("superagent");
const fs = require("fs");

// CALLBACK HELL
// fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {
//   superagent
//     .get(`https://dog.ceo/api/breed/${data.trim().toLowerCase()}/images/random`)
//     .end((err, res) => {
//       if (err) return console.log(err.message);
//       console.log(res.body.message);

//       fs.writeFile("dog-img.txt", res.body.message, (err) => {
//         if (err) return console.log(err.message);
//         console.log("Random dog image saved to file!");
//       });
//     });
// });

// THEN SYNTAX
// fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {
//   superagent
//     .get(`https://dog.ceo/api/breed/${data.trim().toLowerCase()}/images/random`)
//     .then((res) => {
//       console.log(res.body.message);
//       fs.writeFile("dog-img.txt", res.body.message, (err) => {
//         if (err) return console.log(err.message);
//         console.log("Random dog image saved to file!");
//       });
//     })
//     .catch((err) => {
//       console.log(new Error(err.message));
//     });
// });

// PROMISES
const readFilePro = (file) => {
  // executor function
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) reject("I could not find that file 😢");
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("Could not write the file 😢");
      resolve(data);
    });
  });
};

// readFilePro(`${__dirname}/dog.txt`)
//   .then((data) => {
//     console.log(`Breed: ${data.charAt(0).toUpperCase() + data.slice(1)}`);
//     return superagent.get(
//       `https://dog.ceo/api/breed/${data.trim().toLowerCase()}/images/random`
//     );
//   })
//   .then((res) => {
//     console.log(res);
//     return writeFilePro("dog-img.txt", res.body.message);
//   })
//   .then((res) => {
//     console.log("Random dog image saved to file!");
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("I am done");
//   });

// ASYNC AWAIT
// const getDogPics = async () => {
//   try {
//     const breed = await readFilePro(`${__dirname}/dogg.txt`);
//     const res = await superagent.get(
//       `https://dog.ceo/api/breed/${breed.trim().toLowerCase()}/images/random`
//     );
//     const text = await writeFilePro("dog-img.txt", res.body.message);
//     return text;
//   } catch (err) {
//     throw new Error(err);
//   }
// };

// IFFI

// Waiting for multiple promises to resolve

const getDogPics = async () => {
  try {
    const breed = await readFilePro(`${__dirname}/dog.txt`);
    const res1 = await superagent.get(
      `https://dog.ceo/api/breed/${breed.trim().toLowerCase()}/images/random`
    );
    const res2 = await superagent.get(
      `https://dog.ceo/api/breed/${breed.trim().toLowerCase()}/images/random`
    );
    const res3 = await superagent.get(
      `https://dog.ceo/api/breed/${breed.trim().toLowerCase()}/images/random`
    );
    const all = await Promise.all([res1, res2, res3]);
    const images = all.map((el) => el.body.message);
    const text = await writeFilePro("dog-img.txt", images.join("\n"));
    return text;
  } catch (err) {
    throw new Error(err);
  }
};

(async () => {
  try {
    const data = await getDogPics();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
})();
