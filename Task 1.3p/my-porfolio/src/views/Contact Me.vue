<template>
  <div class="contact">
    <h1>Contact Me</h1>
  </div>
  <EmailForm/>
</template>

<script>
import EmailForm from "../components/EmailForm.vue";

export default {
  name: "contact",
  components: {
    EmailForm,
  },
};
</script>
