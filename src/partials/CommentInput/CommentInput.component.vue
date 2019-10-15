<template src="./CommentInput.component.html"></template>

<script>
export default {
  name: "CommentInput",
  data() {
    return {
      content: "",
      showCommentButton: false
    };
  },
  watch: {
    content: function(val, oldVal) {
      if (!this.content) {
        this.showCommentButton = false;
      } else {
        this.showCommentButton = true;
      }
    }
  },
  methods: {
    saveComment() {
      let comment = {
        id: Math.floor(Math.random() * 1000000000),
        content: this.content,
        date: new Date()
      };
      this.$store.dispatch("ADDCOMMENT", comment);
      this.content = "";
    }
  }
};
</script>