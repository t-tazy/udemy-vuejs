<template>
  <div>
    <LikeHeader>
      <template v-slot:title>
        <h2>こんにちは</h2>
      </template>
      <template v-slot:number>
        <p>{{ number }}</p>
      </template>
    </LikeHeader>
    <LikeNumber :number="number"></LikeNumber>
    <LikeNumber :number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      number: 10
    };
  },
  components: {
    LikeHeader
  }
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
