<template>
  <div class="navbar">
    <router-link to="/">
      <img src="@/assets/logo.svg" alt="" />
    </router-link>
    <ul>
      <li>
        <router-link to="/terms"> Terms & Conditions </router-link>
      </li>
      <li>
        <router-link to="/privacy"> Privacy Policy </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  z-index: 11;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  a {
    display: inline-block;
    margin-left: 6vw;
    text-decoration: none;
    img {
      height: 60px;
    }
  }
  ul {
    margin-right: 6vw;
    list-style-type: none;
    height: 60px;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 600px) {
      display: none;
    }
    li {
      display: inline-block;
    }
    a {
      font-family: 'Pacaembu', sans-serif;
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>
