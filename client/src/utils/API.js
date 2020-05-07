import axios from "axios"; //TODO: Why are we importing axios in client\src\utils\API.js and we set axios to a const in controllers\googleController.js?

export default {
  // Gets books from the Google API
  getBooks: function (q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // Gets all saved books
  getSavedBooks: function () {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
};
