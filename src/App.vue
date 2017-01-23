<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <table>
      <thead>
        <tr>
          <th>START</th>
          <th>END</th>
          <th>CURRENT</th>
          <th>HOURS IN DAY</th>
          <th>HOURS LEFT</th>
          <th>HOURS SPENT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="time" name="start" v-model="times.start"></td>
          <td><input type="time" name="end" v-model="times.end"></td>
          <td>{{ times.current }}</td>
          <td>{{ times.hoursInDay }}</td>
          <td>{{ times.hoursLeftInDay }}</td>
          <td>{{ times.hoursSpentInDay }}</td>
        </tr>
      </tbody>
    </table>
    <section class="timeline">
      <div v-for="hours in times.hoursArray">
        <div v-if="hours == true" class="timeline__hour timeline__hour--spent"></div>
        <div v-else class="timeline__hour timeline__hour--left"></div>
      </div>
    </section>
  </div>
</template>

<script>
import dateFns from 'date-fns'

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
      title: 'Welcome to DayPlanner',
      times,
    }
  }
}
</script>

<style lang="scss">

$primary-color: #2c2c2c;
$white: #fff;
$primary-font: "HelveticaNeue";
$body-font-weight: 100;
$header-font-weight: 600;

#app {
  width: 100%;
}

body {
  background-color: $primary-color;
  color: $white;
  display: flex;
  // justify-content: center;
  font-family: $primary-font;
}

h1 {
  font-size: 28px;
  @extend %headingFont;
}

%bodyFont {
  font-weight: $body-font-weight;
  font-size: 16px;
}

%headingFont {
  font-weight: $header-font-weight;
  margin-bottom: 50px;
}

table {
  width: 100%;
}

th {
  @extend %headingFont;
  width: 16%;
  text-align: left;
}

td {
  @extend %bodyFont;
  width: 16%;
  text-align: left;
}

input {

  background-color: #2c2c2c;
  border: 0;
  color: #fff;
  width: 80px;
  border-bottom: 2px solid white;
  font-family: "HelveticaNeue"!important;
  font-size: 16px;
  line-height: 1;
}

.timeline {
  margin-top: 50px;
  background-color: #ccc;
  width: 100%;
  height: 10px;
  display: flex;

  div {
    flex: 1;
  }
}

.timeline__hour {
  &--spent {
    background-color: #e74430;
    width: 100%;
  }

  &--left {
    background-color: #3473d6;
    width: 100%;
  }

  height: 10px;
  float: left;
}

</style>
