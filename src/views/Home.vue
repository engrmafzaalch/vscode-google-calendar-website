<template>
  <div class="home">
    <Header />
    <Card />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Card from '@/components/Card';
export default {
  name: 'Home',
  components: {
    Header,
    Card,
  },
  created() {},
};
</script>
