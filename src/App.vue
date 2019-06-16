<template>
  <div id="app">
    <ButtonExtra/>
    <DropdownExtra/>
  </div>
</template>

<script>
import ButtonExtra from "@/components/extra/ButtonExtra";
import DropdownExtra from "@/components/extra/DropdownExtra";

export default {
  components: {
    ButtonExtra,
    DropdownExtra
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
