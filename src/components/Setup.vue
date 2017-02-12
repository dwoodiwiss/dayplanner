<template>
  <section class="setup">
    <div>
      <p>You can use Day Planner to help visualize your schedule for the day.</p>
      <p>Enter some activities below to get started!</p>
      <section class="setup__new-activity">
        <h2>New Activity</h2>
        <div class="new-activity__form">
          <input type="text" name="name" placeholder="Name">
          <input type="text" name="duration" placeholder="Duration">
          <button type="button">Add</button>
        </div>

      </section>

      <h2>Activities</h2>

    </div>
  </section>
</template>

<script>

export default {
  name: 'setup',
  data () {
    return {
      title: 'SETUP'
    }
  }
}
</script>

<style lang="scss">

$primary-color: #5596E6;

.setup {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding-top: 50px;

  div {
    width: 1000px;

  }
}

.setup__new-activity {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;

}

.new-activity__form {
  display: flex;

  input {
    height: 40px;
    border: 1px solid #C8D2D2;
    padding: 10px;
    font-style: italic;
    flex: 1;
    margin-right: 10px;
  }

  button {
    transition: all .20s ease;
    height: 40px;
    border: 2px solid $primary-color;
    background-color: #fff;
    color: $primary-color;
    padding: 8px 20px;

    &:hover, &:active, &:focus {
      background-color: $primary-color;
      color: #fff;
      cursor: pointer;
    }
  }
}

</style>
