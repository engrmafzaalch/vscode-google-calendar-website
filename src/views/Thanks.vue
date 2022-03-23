<template>
  <div class="auth">
    <div class="left">
      <h2>Thanks for <br /><span>Signin in!</span></h2>
    </div>
    <div class="right">
      <img src="@/assets/auth.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.auth {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 6vw;
  .left {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    min-height: 100vh;
    font-family: "Pacaembu", sans-serif;
    h2 {
      font-size: 70px;
      // text-align: center;
      font-weight: 900;
      line-height: 1;
      margin-bottom: 10px;
      span {
        color: rgb(0, 107, 255);
      }
    }
    label {
      margin: 10px 0;
      display: block;
    }
  }
  .right {
  }
}
</style>