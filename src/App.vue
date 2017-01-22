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
          <td>{{ times.start }}</td>
          <td>{{ times.end }}</td>
          <td>{{ times.current }}</td>
          <td>{{ times.hoursInDay }}</td>
          <td>{{ times.hoursLeftInDay }}</td>
          <td>{{ times.hoursSpentInDay }}</td>
        </tr>
      </tbody>
    </table>
    <section class="timeline">
      <div v-for="hours in times.hoursArray" class="timeline__hour"></div>
    </section>
  </div>
</template>

<script>
import dateFns from 'date-fns'

let start = dateFns.subHours(new Date(), 5);
let end = dateFns.addHours(new Date(), 3);
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
  hoursArray.push(i+1);
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
  margin-bottom: 50px;
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

.timeline {
  margin-top: 50px;
  background-color: #3473d6;
  width: 800px;
  height: 10px;
}

.timeline__hour {
  width: 100px;
  background-color: #e74430;
  height: 10px;
  float: left;
  border-right: 1px solid #2c2c2c;
}

</style>
