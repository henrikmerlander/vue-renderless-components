<template>
  <div>
    <h2>Dropdown extra</h2>
    <RenderlessExtra v-model="$root.$data.added" :max="$root.$data.max">
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
  components: {
    RenderlessExtra
  }
};
</script>
