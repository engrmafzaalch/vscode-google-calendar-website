<template>
  <div class="auth">
    <!-- <div class="left"> -->
    <template v-if="!signing">
      <h2>Sync your <br /><span>Events and Meetings</span></h2>
      <form @submit.prevent="authenticate">
        <label>
          <input type="checkbox" required name="" id="" />
          I Agree <router-link to="/terms">Terms & conditions</router-link> and
          <router-link to="/privacy">Privacy Policy</router-link> and
        </label>

        <button class="btn-start">Login</button>
      </form>
    </template>
    <template v-else>
      <h2>Do not Close Your window</h2>
    </template>
    <!-- </div> -->
  </div>
</template>

<script>
import firebase from "../fb.js";
import axios from "axios";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      signing: false,
    };
  },
  methods: {
    sendToken(accessToken, idToken, refreshToken) {
      axios
        .get(
          `${process.env.VUE_APP_IDE_URL}/auth?accessToken=${accessToken}&idToken=${idToken}&refreshToken=${refreshToken}`
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    saveEmail(email, ID_TOKEN, REFRESH_TOKEN) {
      axios
        .post(
          `${process.env.VUE_APP_BASE_URL}/save-user?idToken=${ID_TOKEN}&refreshToken=${REFRESH_TOKEN}`,
          {
            email,
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    authenticate() {
      this.signing = true;
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/calendar");
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          var accessToken = credential.accessToken;
          var user = result.user;
          const refreshToken = user.refreshToken;
          console.log("credential", credential);
          console.log(user);
          user.getIdToken(false).then((idToken) => {
            this.sendToken(accessToken, idToken, refreshToken);
            this.saveEmail(user.email, idToken, refreshToken);
          });
          this.signing = false;
          this.$router.push("/thanks");
        })
        .catch((error) => {
          console.log(error);
          this.sendToken(undefined);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.auth {
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  // padding-left: 6vw;
  // .left {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Pacaembu", sans-serif;
  h2 {
    font-size: 70px;
    // text-align: center;
    font-weight: 900;
    line-height: 1;
    margin-bottom: 10px;
    text-align: center;
    span {
      color: rgb(0, 107, 255);
    }
  }
  label {
    margin: 10px 0;
    display: block;
  }
  button {
    display: block;
    margin: 12px auto;
  }
}
</style>