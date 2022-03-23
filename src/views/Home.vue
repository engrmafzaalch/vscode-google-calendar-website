<template>
  <div class="home">
    <Header />
    <Card />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
export default {
  name: 'Home',
  components: {
    Header,
    Card,
    Footer,
  },
  created() {},
};
</script>
