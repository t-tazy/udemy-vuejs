<template>
  <div>
    <h2>{{ title | lowerCase }}</h2>
  </div>
</template>

<script>
import { tokyoNumber } from "@/tokyoNumber";
export default {
  mixins: [tokyoNumber]
};
</script>
