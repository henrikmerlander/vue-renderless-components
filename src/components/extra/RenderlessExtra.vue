<script>
export default {
  props: ["value", "max"],
  methods: {
    setAdded(added) {
      this.$emit("input", parseInt(added));
    }
  },
  render() {
    return this.$scopedSlots.default({
      added: this.value,
      max: this.max,
      setAdded: this.setAdded
    });
  }
};
</script>
