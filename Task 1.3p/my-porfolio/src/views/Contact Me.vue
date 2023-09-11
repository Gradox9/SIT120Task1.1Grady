<!--
  Although this Contact Me view doesnt actually send out an email.
  It could easily be set up with an API to allow for processing emails to me.
  This view was just to show case handling user inputs.

  https://www.abstractapi.com/api/email-verification-validation-api
-->

<template>
  <div class="contact">
    <h1>Contact Me</h1>
  </div>

  <form @submit="onSubmit" class="emailForm">
    <p>Fill out the form below if you'd like to get in contact with me:</p>
    <label for="email">
      <h3>Email:</h3>
    </label>
    <input
      placeholder="Enter your email"
      v-model="email"
      required
      type="email"
    />
    <br>
    <h3>Subject:</h3>
    <input v-model="message" placeholder="subject" />
    <p style="white-space: pre-line">{{ message }}</p>
    <textarea v-model="message" placeholder=""></textarea>
    <br>
    <br>
    <input type="submit" value="Submit" class="submitButton" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      errorMessage: "",
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(event);
    },
    validateEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        this.errorMessage = "";
      } else {
        this.errorMessage = "Invalid Email";
      }
    },
  },
  watch: {
    email(value) {
      this.email = value;
      this.validateEmail(value);
    },
  },
};
</script>
