<template>
  <div id="app">
    <h1>Renderless Vue Components</h1>
    <ButtonExtra v-model="$root.$data.added" :max="$root.$data.max"/>
    <DropdownExtra v-model="$root.$data.added" :max="$root.$data.max"/>
    <RangeExtra v-model="$root.$data.added" :max="$root.$data.max"/>
  </div>
</template>

<script>
import ButtonExtra from "@/components/extra/ButtonExtra";
import DropdownExtra from "@/components/extra/DropdownExtra";
import RangeExtra from "@/components/extra/RangeExtra";

export default {
  components: {
    ButtonExtra,
    DropdownExtra,
    RangeExtra
  },
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
