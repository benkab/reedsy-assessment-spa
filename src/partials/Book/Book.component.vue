<template src="./Book.component.html"></template>
<style type="text/css" src="./Book.component.css"></style>

<script>
import { baseUrl } from "./../../config";
export default {
  name: "Book",
  props: ["book", "index"],
  data() {
    return {};
  },
  methods: {
    refractorImageSource(src) {
      let image_name = src.slice(-13);
      let image_src = baseUrl + "" + image_name;
      return image_src;
    },
    indexCheck() {
      let newIndex = this.index + 1;
      if (newIndex % 2 === 0) {
        return true;
      } else {
        return false;
      }
    },
    viewBookPage() {
      this.$router.push({
        name: "BookPage",
        params: {
          slug: this.book.slug
        }
      });
    },
    truncateText(content) {
      return content.substring(0, 200) + "...";
    }
  }
};
</script>