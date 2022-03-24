<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <div class="footer_primary">
        <!-- logo -->
        <router-link to="/">
          <img src="@/assets/logo.svg" alt="logo" class="footer_logo" />
        </router-link>
      </div>

      <div class="footer_secondary">
        <div class="social_links">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-twitter"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="copyright">
        <p class="copyright_description">Copyright &copy; RigRex {{ year }}</p>
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
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 30px 6vw;
  font-family: "Pacaembu", sans-serif;
  &-wrapper {
    display: flex;
    justify-content: space-between;
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
    .footer_secondary {
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

        a {
          color: #000;
          font-size: 18px;
        }
      }
    }

    .footer_primary {
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
  }
  .foot {
    .copyright {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;

      @media only screen and (max-width: 768px) {
        flex-direction: column-reverse;
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
          list-style-type: none;

          @media only screen and (max-width: 480px) {
            padding: 0;
          }

          .link {
            color: #000;
            text-decoration: none;
            &:hover {
              color: #4b4b4b;
            }
          }
        }
      }
    }
  }
}
</style>
