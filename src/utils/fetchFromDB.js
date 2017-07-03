export default async function fetchFromDB(resource) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const db = JSON.parse(localStorage.getItem("db"));

        resolve(db[resource]);
      } catch (error) {
        reject(error);
      }
    }, 500);
  });
}
