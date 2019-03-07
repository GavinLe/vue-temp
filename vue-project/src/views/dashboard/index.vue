<template>
  <div class="dashboard-container">
  Welcome dashboard page.
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Dashboard',
  components: { },
  data () {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created () {
  }
};
</script>
