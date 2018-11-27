<template>
  <div class="app-container">
    <!-- <breadcrumb class="breadcrumb-container"/> -->
    <p>dashboard</p>
    <p>https://github.com/ecomfe/vue-echarts/blob/master/demo/Demo.vue</p>
    <p>https://ecomfe.github.io/vue-echarts/demo/#bar</p>
    <p>https://github.com/ecomfe/vue-echarts/blob/master/README.zh_CN.md</p>
    <div>
      <chart
        :options="line"
        :init-options="initOptions"
        ref="line"
        theme="ovilia-green"
        auto-resize
      />
    </div>
    <div>
      <chart
        :options="bar"
        :init-options="initOptions"
        ref="bar"
        theme="ovilia-green"
        auto-resize
      />
    </div>
    <div>
      <chart
        :options="pie"
        :init-options="initOptions"
        ref="pie"
        auto-resize
      />
    </div>
  </div>
</template>

<script>
import qs from 'qs'
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/line'
import getBar from './data/bar'
import pie from './data/pie'
import line from './data/line'
// custom theme
import theme from './data/theme.json'
// registering custom theme
ECharts.registerTheme('ovilia-green', theme)

export default {
  name: 'dashboard',
  components: {
    'chart': ECharts
  },
  data: function () {
    let options = qs.parse(location.search, { ignoreQueryPrefix: true })

    return {
      line,
      bar: getBar(),
      pie,
      expand: {
        bar: true,
        pie: true
      },
      initOptions: {
        renderer: options.renderer || 'canvas'
      }
      // polarTheme: 'dark',
    }
  },
  computed: {
    // scoreRadar () {
    //   return this.$store.getters.scoreRadar
    // },
    // metrics () {
    //   return this.$store.state.scores.map(({ name }) => name)
    // },
    // isMax () {
    //   let { value, max } = this.$store.state.scores[this.metricIndex]
    //   return value === max
    // },
    // isMin () {
    //   return this.$store.state.scores[this.metricIndex].value === 0
    // }
  },
  methods: {
  }
}
</script>
<style lang="scss">
.echarts {
  width: 100%;
  height: 100%;
}
</style>
