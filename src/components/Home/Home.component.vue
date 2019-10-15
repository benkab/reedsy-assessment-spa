<template src="./Home.component.html"></template>
<style type="text/css" src="./Home.component.css"></style>

<script>
import Book from "./../../partials/Book/Book.component";
export default {
  name: "Home",
  components: {
    Book
  },
  data() {
    return {
      books: [],
      allBooks: [],
      limit: 3,
      showLoadMore: true
    };
  },
  created() {
    this.loadBooks();
  },
  methods: {
    loadBooks() {
      this.$store.dispatch("GETBOOKS").then(
        response => {
          this.books = response.body.books.slice(0, this.limit);
          this.allBooks = response.body.books;
        },
        error => {}
      );
    },
    search(event) {
      let searchTerm = event.target.value;
      let results = [];
      if (searchTerm === "") {
        this.showLoadMore = true;
        this.loadBooks();
      } else {
        for (var i = 0; i < this.allBooks.length; i++) {
          if (
            this.allBooks[i].title
              .toString()
              .toLowerCase()
              .includes(searchTerm.toString().toLowerCase()) ||
            this.allBooks[i].synopsis
              .toString()
              .toLowerCase()
              .includes(searchTerm.toString().toLowerCase())
          ) {
            results.push(this.allBooks[i]);
          }
        }
        this.books = results;
        this.showLoadMore = false;
      }
    },
    loadMore() {
      let newLimit = this.limit + 3;
      this.limit = newLimit;
      this.books = this.allBooks.slice(0, this.limit);
      if (this.books.length < this.allBooks.length) {
        this.showLoadMore = true;
      } else {
        this.showLoadMore = false;
      }
    }
  }
};
</script>
