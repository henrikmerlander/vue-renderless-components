<template>
  <div>
    <h2>Button extra</h2>
    <RenderlessExtra :value="value" @input="$emit('input', $event)" :max="max">
      <div slot-scope="{ added, max, setAdded }" class="button-extra">
        Extra bag
        <button @click="setAdded(added - 1)" :disabled="added <= 0" type="button">-</button>
        {{ added }}
        <button
          @click="setAdded(added + 1)"
          :disabled="added >= max"
          type="button"
        >+</button>
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
