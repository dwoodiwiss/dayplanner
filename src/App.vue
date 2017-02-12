<template>
  <section class="topbar">
    <div>
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>

<script>

import dateFns from 'date-fns'
import Credits from './components/Credits.vue'

let start = dateFns.startOfToday();
start = dateFns.addHours(start, 8);

let end = dateFns.addHours(start, 15);
let current = new Date();
let hoursInDay = dateFns.differenceInHours(start, end);
let hoursLeftInDay = dateFns.differenceInHours(current, end);
let hoursSpentInDay = dateFns.differenceInHours(start, current);

start = format(start);
end = format(end);
current = format(current);
hoursInDay = Math.abs(hoursInDay);
hoursLeftInDay = Math.abs(hoursLeftInDay);
hoursSpentInDay = Math.abs(hoursSpentInDay);

let hoursArray = [];

for (var i = 0; i < hoursSpentInDay; i++) {
  hoursArray.push(true);
}

for (var i = 0; i < hoursLeftInDay; i++) {
  hoursArray.push(false);
}

const times = {
  start,
  end,
  current,
  hoursInDay,
  hoursLeftInDay,
  hoursSpentInDay,
  hoursArray,
}

function format(date) {
  return dateFns.format(date, 'HH:mm');
}

export default {
  name: 'app',
  data () {
    return {
      title: 'DayPlanner',
      times,
    }
  }
}
</script>

<style lang="scss">
  $primary-color: #5596E6;

  .topbar {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: $primary-color;
    color: #fff;

    div {
      display: flex;
      align-items: center;

      height: 100%;
      width: 1000px;
    }
  }

</style>
