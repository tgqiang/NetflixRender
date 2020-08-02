<template>
  <q-btn color="black" class="q-ma-sm">
    <div class="column items-center">
      <q-avatar rounded size="100px">
        <img src="~assets/user.jpg">
      </q-avatar>
      <div class="text-capitalize">{{ name ? name : 'User' }}</div>
    </div>
  </q-btn>
</template>

<script>
export default {
  name: 'User',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
