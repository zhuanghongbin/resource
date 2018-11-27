export default {
  color: ['#5793f3', '#d14a61', '#675bba'],
  tooltip: {
    trigger: 'none',
    axisPointer: {
      type: 'cross'
    }
  },
  legend: {
    data: ['2015 降水量']
  },
  grid: {
    top: 70,
    bottom: 50
  },
  xAxis: [{
    type: 'category',
    axisTick: {
      alignWithLabel: true
    },
    axisLine: {
      onZero: false,
      lineStyle: {
        color: '#5793f3'
      }
    },
    axisPointer: {
      label: {
        formatter: function (params) {
          return '降水量  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
        }
      }
    },
    data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
  }],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '2016 降水量',
      type: 'line',
      smooth: true,
      data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
    }
  ]
}
