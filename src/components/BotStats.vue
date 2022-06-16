<template>
  <canvas id="chart">

  </canvas>
  <canvas id="chart2">

  </canvas>
</template>

<script>
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment'
import 'moment/locale/ko'

export default {
  name: "BotStats"
}

fetch('/api/graphql', {
  method: 'POST', headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }, body: JSON.stringify({
    query: `{
  hour: fetchTtsExecuteTimeInLastHour {
    startRange
    endRange
    data
  }
  day: fetchTtsExecuteTimeInLastDay {
    startRange
    endRange
    data
  }
}`
  })
})
    .then(r => r.json())
    .then(data => {

      for (const value of [["hour", "chart"], ["day", "chart2"]]) {

        const x = data.data[value[0]]

        let chartData = Object.values(x.data.reduce((arr, v) => {
          const key = new Date(v)
          key.setMinutes(Math.ceil(key.getMinutes() / 5) * 5)
          key.setSeconds(0)
          key.setMilliseconds(0)

          if (!arr[key]) arr[key] = {x: key, y: 0}
          arr[key].y++

          return arr
        }, {}));

        new Chart(document.querySelector(`#${value[1]}`), {
          locale: "ko-KR",
          type: 'line',
          data: {
            datasets: [{
              label: 'Number of Call',
              fill: false,
              data: chartData,
              backgroundColor: ['rgba(154, 208, 245, 0.5)',],
              borderColor: ['rgba(54, 162, 235, 1)',],
            }]
          },
          options: {
            responsive: true,
            interaction: {
              mode: 'nearest',
            },
            scales: {
              x: {
                type: 'time',
                min: x.startRange,
                max: x.endRange,
                ticks: {
                  major: {
                    enabled: true
                  },
                  font: function (context) {
                    if (context.tick && context.tick.major) {
                      return {
                        weight: 'bold',
                      };
                    }
                  }
                }
              },
            }
          }
        });
      }
    })
</script>

<style scoped>

</style>