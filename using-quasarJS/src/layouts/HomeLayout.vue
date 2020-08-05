<template>
  <q-layout view="hHh lpr fFf">
    <q-toolbar class="fixed-top z-top my-overlay">
      <q-tabs class="text-white full-width" align="justify" shrink>
        <q-tab name="netflix">
          <q-img basic src="~assets/home/netflix.png" width="20px"/>
        </q-tab>
        <q-tab name="series" label="Series" no-caps />
        <q-tab name="films" label="Films" no-caps />
        <q-tab name="mylist" label="My List" no-caps />
      </q-tabs>
    </q-toolbar>
    <router-view name="mainMovie" />
    <PreviewMovieList
      v-bind:moviePreviews="moviePreviews"
    />
    <GenericMovieList
      v-bind:heading="list1.heading"
      v-bind:hasOptions="list1.hasOptions"
      v-bind:movies="list1.movies"
    />
    <GenericMovieList
      name="watchAgain"
      v-bind:heading="list2.heading"
      v-bind:hasOptions="list2.hasOptions"
      v-bind:movies="list2.movies"
    />
    <GenericMovieList
      name="trending"
      v-bind:heading="list3.heading"
      v-bind:hasOptions="list3.hasOptions"
      v-bind:movies="list3.movies"
    />
    <div class="spacer" />
    <q-toolbar class="fixed-bottom z-top my-overlay">
      <q-tabs class="text-white full-width" align="justify" dense shrink>
        <q-tab class="my-footer-nav" content-class="my-footer-nav-content" name="home" icon="home" label="Home" no-caps />
        <q-tab class="my-footer-nav" content-class="my-footer-nav-content" name="search" icon="search" label="Search" no-caps />
        <q-tab class="my-footer-nav" content-class="my-footer-nav-content" name="comingsoon" icon="video_library" label="Coming Soon" no-caps>
          <q-badge class="my-footer-nav-badge" color="red" floating>7</q-badge>
        </q-tab>
        <q-tab class="my-footer-nav" content-class="my-footer-nav-content" name="downloads" icon="vertical_align_bottom" label="Downloads" no-caps />
        <q-tab class="my-footer-nav" content-class="my-footer-nav-content" name="more" label="More" icon="menu" no-caps />
      </q-tabs>
    </q-toolbar>
  </q-layout>
</template>

<style lang="sass">
.my-footer-nav
  padding: 0;

.my-footer-nav-content div
  font-size: 0.8em;

// a work-around to reposition the badge within a tab,
// since the badge's anchor is on the badge's text-content by default.
//
// for some reason, not applying `!important` on the `right` property
// makes the badge stretch till the right edge of the tab.
.my-footer-nav-badge
  left: 40px;
  right: 10px !important;
</style>

<script>
import PreviewMovieList from 'components/PreviewMovieList.vue'
import GenericMovieList from 'components/GenericMovieList.vue'

export default {
  name: 'HomeLayout',
  components: { PreviewMovieList, GenericMovieList },
  data () {
    return {
      moviePreviews: [
        { id: 0 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 }
      ],
      list1: {
        heading: 'Continue Watching for User',
        hasOptions: true,
        movies: [
          { id: 0 },
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 }
        ]
      },
      list2: {
        heading: 'Watch It Again',
        hasOptions: false,
        movies: [
          { id: 0 },
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 }
        ]
      },
      list3: {
        heading: 'Trending Now',
        hasOptions: false,
        movies: [
          { id: 0 },
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 }
        ]
      }
    }
  }
}
</script>
