<template>
  <div>
    <h2>Button extra</h2>
    <RenderlessExtra v-model="$root.$data.added" :min="$root.$data.min" :max="$root.$data.max">
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
  components: {
    RenderlessExtra
  }
};
</script>
