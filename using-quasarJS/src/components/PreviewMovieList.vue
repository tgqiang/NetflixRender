<template>
  <div v-if="showPreviews && moviePreviews.length" class="q-py-md">
    <p class="q-px-xs text-subtitle1 text-white">Preview</p>
    <div class="list-display">
      <PreviewMovieItem
        v-for="movie in moviePreviews"
        v-bind:key="movie.id"
      />
    </div>
  </div>
</template>

<script>
import PreviewMovieItem from 'components/PreviewMovieItem.vue'

export default {
  name: 'PreviewMovieList',
  components: { PreviewMovieItem },
  props: {
    moviePreviews: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      showPreviews: true
    }
  }
}
</script>
