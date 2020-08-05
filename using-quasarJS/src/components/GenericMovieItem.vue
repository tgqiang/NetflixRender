<template>
  <q-card class="q-mx-xs list-item">
    <q-img src="~assets/home/filmposter.jpg" />
    <q-card-actions v-show="hasOptions" class="bg-grey-10" bordered="false" align="around">
      <q-btn flat padding="none" color="grey-9" icon="info" />
      <q-btn flat padding="none" color="grey-9" icon="more_vert" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'GenericMovieItem',
  props: {
    hasOptions: {
      type: Boolean,
      required: true
    }
  }
}
</script>
