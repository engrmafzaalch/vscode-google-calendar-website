<template>
  <footer class="footer">
    <div class="footer_primary">
      <!-- logo -->
      <router-link to="/">
        <img src="@/assets/logo.svg" alt="logo" class="footer_logo" />
      </router-link>
    </div>

    <div class="footer_secondary">
      <div class="social_links">
        <svg
          class="svg svg-twitter"
          viewBox="0 0 15 12"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M4.71737 12C10.378 12 13.4736 7.38369 13.4736 3.38083C13.4736 3.24967 13.4709 3.11919 13.4647 2.98921C14.0656 2.56165 14.588 2.02796 15 1.42071C14.4486 1.66187 13.8552 1.82426 13.2327 1.89748C13.868 1.52248 14.356 0.929006 14.5861 0.221672C13.9914 0.56879 13.3329 0.821025 12.632 0.957051C12.0702 0.368277 11.2704 0 10.3855 0C8.68578 0 7.30747 1.35673 7.30747 3.02901C7.30747 3.2668 7.3346 3.49788 7.38715 3.71972C4.82962 3.59327 2.56162 2.38767 1.04392 0.554851C0.779318 1.00239 0.626969 1.52265 0.626969 2.07733C0.626969 3.12826 1.17034 4.05609 1.99658 4.59902C1.49176 4.58374 1.01748 4.44704 0.602743 4.21999C0.602061 4.23259 0.602061 4.24535 0.602061 4.25862C0.602061 5.72585 1.66305 6.95075 3.07104 7.22835C2.81257 7.2977 2.54063 7.33499 2.25982 7.33499C2.06158 7.33499 1.86879 7.3155 1.6813 7.28041C2.07301 8.48382 3.20923 9.35975 4.55632 9.38444C3.50284 10.1971 2.17588 10.6812 0.734108 10.6812C0.48588 10.6812 0.240893 10.6673 0 10.6392C1.36193 11.4984 2.97908 12 4.71737 12Z"
          ></path>
        </svg>
        <svg
          class="svg svg-facebook"
          viewBox="0 0 23 23"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M9.33473 8.3061H6.83473V11.9728H9.33473V22.9728H13.5014V11.9728H16.5014L16.8347 8.3061H13.5014V6.74776C13.5014 5.92276 13.6681 5.5561 14.4181 5.5561H16.8347V0.972763H13.6681C10.6681 0.972763 9.33473 2.43943 9.33473 5.18943V8.3061Z"
          ></path>
        </svg>
        <svg
          class="svg svg-instagram"
          viewBox="0 0 23 23"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M11.5 2.10833C14.5667 2.10833 14.95 2.10833 16.1958 2.20417C19.3583 2.3 20.7958 3.83333 20.8917 6.9C20.9875 8.14583 20.9875 8.43333 20.9875 11.5C20.9875 14.5667 20.9875 14.95 20.8917 16.1C20.7958 19.1667 19.2625 20.7 16.1958 20.7958C14.95 20.8917 14.6625 20.8917 11.5 20.8917C8.43333 20.8917 8.05 20.8917 6.9 20.7958C3.7375 20.7 2.3 19.1667 2.20417 16.1C2.10833 14.8542 2.10833 14.5667 2.10833 11.5C2.10833 8.43333 2.10833 8.05 2.20417 6.9C2.3 3.83333 3.83333 2.3 6.9 2.20417C8.05 2.10833 8.43333 2.10833 11.5 2.10833ZM11.5 0C8.3375 0 7.95417 0 6.80417 0.0958333C2.5875 0.2875 0.2875 2.5875 0.0958333 6.80417C0 7.95417 0 8.3375 0 11.5C0 14.6625 0 15.0458 0.0958333 16.1958C0.2875 20.4125 2.5875 22.7125 6.80417 22.9042C7.95417 23 8.3375 23 11.5 23C14.6625 23 15.0458 23 16.1958 22.9042C20.4125 22.7125 22.7125 20.4125 22.9042 16.1958C23 15.0458 23 14.6625 23 11.5C23 8.3375 23 7.95417 22.9042 6.80417C22.7125 2.5875 20.4125 0.2875 16.1958 0.0958333C15.0458 0 14.6625 0 11.5 0ZM11.5 5.55833C8.24167 5.55833 5.55833 8.24167 5.55833 11.5C5.55833 14.7583 8.24167 17.4417 11.5 17.4417C14.7583 17.4417 17.4417 14.7583 17.4417 11.5C17.4417 8.24167 14.7583 5.55833 11.5 5.55833ZM11.5 15.3333C9.39167 15.3333 7.66667 13.6083 7.66667 11.5C7.66667 9.39167 9.39167 7.66667 11.5 7.66667C13.6083 7.66667 15.3333 9.39167 15.3333 11.5C15.3333 13.6083 13.6083 15.3333 11.5 15.3333ZM17.6333 4.025C16.8667 4.025 16.2917 4.6 16.2917 5.36667C16.2917 6.13333 16.8667 6.70833 17.6333 6.70833C18.4 6.70833 18.975 6.13333 18.975 5.36667C18.975 4.6 18.4 4.025 17.6333 4.025Z"
          ></path>
        </svg>
        <svg
          class="svg svg-linkedin"
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M4.16667 2.17391C4.16667 3.3913 3.25 4.34783 2.08333 4.34783C0.916667 4.34783 0 3.3913 0 2.17391C0 0.956522 0.916667 0 2.08333 0C3.25 0 4.16667 0.956522 4.16667 2.17391ZM4.16667 6.08696H0V20H4.16667V6.08696ZM10.8333 6.08696H6.66667V20H10.8333V12.6957C10.8333 8.6087 15.8333 8.26087 15.8333 12.6957V20H20V11.2174C20 4.34783 12.5833 4.6087 10.8333 8V6.08696Z"
          ></path>
        </svg>
      </div>
      <div class="copyright">
        <p class="copyright_description">Copyright Calendly 2022</p>
        <div class="privacy">
          <ul class="list">
            <li class="item">
              <router-link to="/terms" class="link">
                Terms & Conditions
              </router-link>
            </li>
            <span>/</span>
            <li class="item">
              <router-link to="/privacy" class="link">
                Privacy Policy
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      items: ['Home', 'About', 'Contact', 'Services'],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  padding: 10px 10vw;
  font-family: 'Pacaembu', sans-serif;
  transition: all 0.2s;

  @media only screen and (max-width: 1300px) {
    padding: 0 10px;
    padding-top: 10px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 480px) {
    padding: 10px;
  }

  &_primary {
    display: flex;
    align-items: center;

    @media only screen and (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
    }

    @media only screen and (max-width: 480px) {
      flex-direction: row;
      align-items: center;
    }

    .footer_logo {
      width: 80px;

      @media only screen and (max-width: 480px) {
        width: 60px;
      }
    }
  }

  &_secondary {
    display: flex;
    align-items: center;
    gap: 20px;

    @media only screen and (max-width: 1300px) {
      flex-direction: column;
      gap: 0;
    }
    @media only screen and (max-width: 1060px) {
      padding-top: 10px;
    }
    .social_links {
      display: flex;
      align-items: center;
      gap: 10px;

      .svg {
        fill: #006bff;
        width: 20px;
        transition: all 0.2s;

        &:hover {
          cursor: pointer;
          fill: #4b4b4b;
        }
      }
    }

    .copyright {
      display: flex;
      align-items: center;
      font-size: 14px;

      @media only screen and (max-width: 480px) {
        flex-direction: column;
      }

      &_description {
        color: #8096ad;

        @media only screen and (max-width: 480px) {
          margin: 0;
          margin-top: 10px;
        }
      }

      .privacy {
        .list {
          padding: 10px;
          display: flex;
          gap: 10px;

          @media only screen and (max-width: 480px) {
            padding: 0;
          }

          .link {
            color: #000;

            &:hover {
              color: #4b4b4b;
            }
          }
        }
      }
    }
  }
  .list {
    list-style: none;

    .link {
      text-decoration: none;
    }
  }
}
</style>
