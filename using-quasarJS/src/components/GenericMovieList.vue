<template>
  <div v-if="movies.length" class="q-py-md">
    <p class="q-px-xs text-subtitle1 text-white">{{ heading }}</p>
    <div class="list-display">
      <GenericMovieItem
        v-for="movie in movies"
        v-bind:key="movie.id"
        v-bind:hasOptions="hasOptions"
      />
    </div>
  </div>
</template>

<script>
import GenericMovieItem from 'components/GenericMovieItem.vue'

export default {
  name: 'GenericMovieList',
  components: { GenericMovieItem },
  props: {
    heading: {
      type: String,
      required: true
    },
    hasOptions: {
      type: Boolean,
      required: true
    },
    movies: {
      type: Array,
      required: true
    }
  }
}
</script>
