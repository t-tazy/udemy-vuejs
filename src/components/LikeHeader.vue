<template>
  <div>
    <slot>
      <h2>デフォルトのコンテンツ</h2>
    </slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"]
};
</script>
