<template>
  <section class="credits">
    <div>
      <span>All content copyright {{ author }} © {{ year }} • All rights reserved.</span>
    </div>
  </section>
</template>

<script>

import getYear from 'date-fns/get_year'
const year = getYear(new Date());

export default {
  name: 'credits',
  data () {
    return {
      author: 'Darren Woodiwiss',
      year,
    }
  }
}
</script>

<style lang="scss">
  .credits {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 60px;
  }

</style>
