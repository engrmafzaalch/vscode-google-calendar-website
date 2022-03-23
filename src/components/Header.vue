<template>
  <div class="hero">
    <div class="left">
      <h1>
        Reminders <br />
        on
        <span>VS Code</span>
      </h1>
      <p>
        VSCode Google Calendar Extension is your hub for get meetings reminders
        and efficiently, eliminating the hassle of back-and-forth emails so you
        can get back to work.
      </p>
      <a
        target="_blank"
        href="https://marketplace.visualstudio.com/items?itemName=RigRex.google-calendar-inegration"
        class="btn-start"
        >Install Now</a
      >
    </div>
    <div class="right">
      <img src="@/assets/hero.svg" class="doodle" alt="" />
      <img src="@/assets/macbook.svg" class="laptop" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  padding: 0 6vw;
  min-height: 100vh;
  font-family: 'Pacaembu', sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .left {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    min-height: 100vh;
  }
  h1 {
    font-size: 70px;
    // text-align: center;
    font-weight: 900;
    line-height: 1;
    span {
      color: rgb(0, 107, 255);
    }
  }
  p {
    font-size: 20px;
    max-width: 508px;
    // text-align: center;
  }
  .right {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    z-index: 2;
    .doodle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      z-index: -1;
    }
    .laptop {
      width: 100%;
    }
  }
}
</style>
