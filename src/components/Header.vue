<template>
  <div class="hero">
    <div class="left">
      <h1
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="linear"
        
      >
        Reminders <br />
        on
        <span>VS Code</span>
      </h1>
      <p
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="500"
        data-aos-easing="linear"
      >
        VSCode Google Calendar Extension is your hub for get meetings reminders
        and efficiently, eliminating the hassle of back-and-forth emails so you
        can get back to work.
      </p>
      <a
       data-aos="fade-right"
        data-aos-delay="550"
        data-aos-duration="500"
        data-aos-easing="linear"
        target="_blank"
        href="https://marketplace.visualstudio.com/items?itemName=RigRex.google-calendar-inegration"
        class="btn-start"
        >Install Now</a
      >
    </div>
    <div class="right">
      <img src="@/assets/hero.svg" class="doodle" alt="" />
      <img
        src="@/assets/macbook.png"
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="linear"
        class="laptop"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  padding: 12vw 6vw 9vw 6vw;
  font-family: "Pacaembu", sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 12vw 0 0 0;
    text-align: center;
    justify-content: center;
    row-gap: 100px;
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
      // padding-top: 15vw;
      // margin-top: -30px;
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
    margin-bottom: 30px;

    @media only screen and (max-width: 1200px) {
      font-size: 50px;
      margin-bottom: 10px;
    }

    @media only screen and (max-width: 991px) {
      font-size: 40px;
      margin-bottom: 20px;
    }

    @media only screen and (max-width: 768px) {
      font-size: 60px;
      // margin-top: -30px;
    }

    @media only screen and (max-width: 480px) {
      font-size: 34px;
      margin-bottom: 20px;
    }

    span {
      color: #006bff;
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
        min-height: 200px;
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

// background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1045%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(0%2c 107%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c379.296C73.575%2c386.003%2c154.778%2c376.304%2c211.135%2c328.532C265.978%2c282.043%2c263.151%2c199.171%2c290.79%2c132.8C317.239%2c69.288%2c373.134%2c15.519%2c370.107%2c-53.213C366.995%2c-123.883%2c319.945%2c-183.646%2c274.469%2c-237.829C228.416%2c-292.7%2c178.15%2c-354.276%2c107.497%2c-366.102C38.196%2c-377.702%2c-22.342%2c-324.413%2c-87.63%2c-298.439C-146.061%2c-275.193%2c-220.75%2c-273.85%2c-255.733%2c-221.594C-290.561%2c-169.571%2c-263.631%2c-100.285%2c-262.187%2c-37.697C-260.997%2c13.875%2c-259.36%2c62.94%2c-248.007%2c113.261C-233.872%2c175.913%2c-231.561%2c245.189%2c-187.765%2c292.168C-139.743%2c343.681%2c-70.134%2c372.902%2c0%2c379.296' fill='%23004fbd'%3e%3c/path%3e%3cpath d='M1440 892.299C1505.656 893.725 1567.795 877.579 1629.295 854.548 1705.262 826.0989999999999 1796.4270000000001 811.133 1839.797 742.581 1883.883 672.897 1881.291 578.124 1853.23 500.587 1827.04 428.219 1740.5059999999999 401.223 1694.052 339.863 1642.705 272.042 1650.157 146.14100000000002 1568.049 123.904 1485.343 101.505 1430.295 222.83100000000002 1347.83 246.098 1263.899 269.779 1157.055 200.43099999999998 1091.7930000000001 258.277 1028.371 314.49199999999996 1055.399 420.039 1055.9769999999999 504.786 1056.479 578.388 1057.751 654.063 1094.9270000000001 717.5889999999999 1130.3609999999999 778.138 1193.326 814.751 1255.916 846.44 1313.5 875.595 1375.471 890.898 1440 892.299' fill='%234292ff'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1045'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
</style>

