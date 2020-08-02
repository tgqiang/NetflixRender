<template>
  <!-- Header only -->
  <q-layout view="hHh lpr fff">
    <q-header elevated>
      <q-btn color="black" unelevated label="Edit" class="absolute-right text-capitalize z-top" />
      <q-toolbar class="bg-black">
        <q-toolbar-title class="text-center">
          Who's Watching?
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'UsersLayout'
}
</script>
