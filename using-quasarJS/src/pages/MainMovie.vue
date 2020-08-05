<template>
  <div class="column justify-center content-center">
    <q-img src="~assets/home/mainposter.jpg" height="60vh"/>
    <div class="row justify-center">
      <q-btn class="q-mx-xs q-my-md mainmovie-options" color="black" icon="add" label="My List" stack no-caps />
      <q-btn class="q-mx-xs q-my-md col-grow" color="white" text-color="black" icon="play_arrow" label="Play" dense />
      <q-btn class="q-mx-xs q-my-md mainmovie-options" color="black" icon="info" label="Info" stack no-caps />
    </div>
  </div>
</template>

<style lang="sass">
// Enforced `min-width` to make both left & right buttons equal-width.
.mainmovie-options
  min-width: 25vw;
</style>

<script>
export default {
  name: 'MainMovie'
}
</script>
