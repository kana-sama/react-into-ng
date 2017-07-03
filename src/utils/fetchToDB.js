import { assoc, keys, append } from "ramda";

export default async function fetchToDB(resource, item) {
  return new Promise(resolve => {
    setTimeout(() => {
      const db = JSON.parse(localStorage.getItem("db"));

      const items = db[resource];
      const newItemID = Math.max(-1, ...keys(items)) + 1;
      const newItem = assoc("id", newItemID, item);
      const newItems = append(newItem, items);
      const newDB = assoc(resource, newItems, db);

      localStorage.setItem("db", JSON.stringify(newDB));

      resolve(newItem);
    }, 200);
  });
}
