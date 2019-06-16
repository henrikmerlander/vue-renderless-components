<template>
  <div>
    <h2>Dropdown extra</h2>
    <RenderlessExtra :value="value" @input="$emit('input', $event)" :max="max">
      <div slot-scope="{ added, max, setAdded }" class="button-extra">
        Extra bag
        <select :value="added" @input="setAdded($event.target.value)">
          <option value="0">0</option>
          <option v-for="i in max" :key="i" :value="i">{{ i }}</option>
        </select>
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
