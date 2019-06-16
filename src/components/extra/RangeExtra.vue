<template>
  <div>
    <h2>Range extra</h2>
    <RenderlessExtra v-model="$root.$data.added" :max="$root.$data.max">
      <div slot-scope="{ added, max, setAdded }" class="button-extra">
        Extra bag
        <input :value="added" @input="setAdded($event.target.value)" type="range" :min="0" :max="max">
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
