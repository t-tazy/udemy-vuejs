export const tokyoNumber = {
  data() {
    return {
      title: "Welcome to Tokyo"
    }
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  }
}
