<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar';
export default {
  components: {
    Navbar,
  },
};
</script>
<style lang="scss">
@font-face {
  font-family: 'Pacaembu';
  src: url('./assets/PacaembuVar-subset.woff2') format('woff2');
  unicode-range: U+5, U+20, U+21, U+24, U+25, U+27, U+2B-2E, U+30-3A, U+3F,
    U+41-5A, U+61-7A, U+D7, U+2019;
  font-weight: 100 1000;
  font-display: swap;
}
.btn-start {
  font-family: 'Pacaembu', sans-serif;
  font-size: 18px;
  font-weight: 500;
  height: 48px;
  width: 160px;
  border-radius: 24px;
  background-color: #006bff;
  border: 1px solid #006bff;
  color: #fff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: 0px 4px 10px 0 #aaa6a6;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 30px;
    margin-top: -10px;
  }

  @media only screen and (max-width: 480px) {
    padding: 10px;
  }
}
</style>
