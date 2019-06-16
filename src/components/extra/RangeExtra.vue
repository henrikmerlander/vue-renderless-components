<template>
  <div>
    <h2>Range extra</h2>
    <RenderlessExtra :value="value" @input="$emit('input', $event)" :max="max">
      <div slot-scope="{ added, max, setAdded }">
        Extra bag
        <input
          :value="added"
          @input="setAdded($event.target.value)"
          type="range"
          :min="0"
          :max="max"
        >
      </div>
    </RenderlessExtra>
  </div>
</template>

<script>
import RenderlessExtra from "@/components/extra/RenderlessExtra";

export default {
  props: ["value", "max"],
  components: {
    RenderlessExtra
  }
};
</script>
