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
  padding: 12vw 6vw 9vw 6vw;
  font-family: 'Pacaembu', sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 12vw 0 0 0;
    text-align: center;
  }

  @media only screen and (max-width: 480px) {
    padding: 20vw 6vw;
  }

  .left {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    @media only screen and (max-width: 768px) {
      place-items: center;
      padding-top: 15vw;
      margin-top: -30px;
    }

    @media only screen and (max-width: 480px) {
      height: 30vh;
      margin-top: 40px;
    }
  }
  h1 {
    font-size: 70px;
    font-weight: 900;
    line-height: 1;

    @media only screen and (max-width: 1200px) {
      font-size: 50px;
      margin-bottom: 10px;
    }

    @media only screen and (max-width: 991px) {
      font-size: 40px;
      margin-bottom: 5px;
    }

    @media only screen and (max-width: 768px) {
      font-size: 60px;
      margin-top: -30px;
    }

    @media only screen and (max-width: 480px) {
      font-size: 48px;
      margin-bottom: 20px;
    }

    @media only screen and (max-width: 480px) {
      font-size: 34px;
      margin-bottom: 5px;
    }

    span {
      color: rgb(0, 107, 255);
    }
  }
  p {
    font-size: 20px;
    max-width: 508px;

    @media only screen and (max-width: 768px) {
      font-weight: 300;
    }
  }
  .right {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

    .doodle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      z-index: -1;

      @media only screen and (max-width: 768px) {
        width: 50%;
      }

      @media only screen and (max-width: 480px) {
        width: 100%;
      }
    }
    .laptop {
      width: 100%;

      @media only screen and (max-width: 768px) {
        width: 50%;
      }

      @media only screen and (max-width: 480px) {
        width: 100%;
      }
    }
  }
}
</style>
