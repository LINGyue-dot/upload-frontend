<template>
  <div class="container">
    <Home/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 100vw;
  /*height: 100vh;*/
  display: flex;
  flex-direction: column-reverse;
}
</style>
<script>
import Home from "@/views/Home";

export default {
  components: {Home}
}
</script>
