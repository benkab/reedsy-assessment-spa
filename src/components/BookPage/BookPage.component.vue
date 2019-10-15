<template src="./BookPage.component.html"></template>
<style type="text/css" src="./../Home/Home.component.css"></style>
<style type="text/css" src="./../../partials/Book/Book.component.css"></style>
<style type="text/css" src="./BookPage.component.css"></style>

<script>
import { baseUrl } from "./../../config";
import Comment from "./../../partials/Comment/Comment.component";
import CommentInput from "./../../partials/CommentInput/CommentInput.component";
import { mapState } from "vuex";
export default {
  name: "BookPage",
  components: {
    CommentInput,
    Comment
  },
  data() {
    return {
      book: null
    };
  },
  computed: {
    ...mapState({
      commentStore: state => state.commentStore
    }),
    getComments() {
      return this.$store.getters.getComments;
    }
  },
  created() {
    this.loadBook();
  },
  methods: {
    loadBook() {
      this.$store.dispatch("GETBOOKBYSLUG", this.$route.params.slug).then(
        response => {
          this.book = response.body;
        },
        error => {}
      );
    },
    refractorImageSource(src) {
      let image_name = src.slice(-13);
      let image_src = baseUrl + "" + image_name;
      return image_src;
    },
    viewBooks() {
      this.$router.push({
        name: "Home"
      });
    }
  }
};
</script>
