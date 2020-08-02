<template>
  <div class="row wrap justify-center content-center" id="users">
    <User
      v-for="user of users"
      v-bind:name="user.name"
      :key="user.id"
    />
  </div>
</template>

<style lang="sass">
/*
 * Introduced min-height to the container instead of letting it wrap its contents tightly,
 * so that list of users would not look flushed to the top.
 * This hardcoded value covers all use cases decently.
 */
#users
  min-height: 80vh;
</style>

<script>
import User from 'components/User.vue'

const users = [
  { id: 0, name: 'User 1' },
  { id: 1, name: 'User 2' },
  { id: 2, name: 'User 3' },
  { id: 3, name: 'User 4' },
  { id: 4, name: 'User 5' },
  { id: 5, name: 'Add Profile' }
]

export default {
  name: 'Users',
  components: { User },
  data () {
    return {
      users
    }
  }
}
</script>
