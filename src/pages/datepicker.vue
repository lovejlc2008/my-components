<template>
  <div style="padding:20px;">
    <datepicker v-model="date" language="zh-cn" style="width:150px; margin-bottom:20px;"></datepicker>

    <vuejs-datepicker v-model="date1" :language="zh" :format="customFormatter"></vuejs-datepicker>
  </div>
</template>

<script>
import datepicker from 'vue-date'
import vuejsDatepicker from 'vuejs-datepicker'
import {zh} from 'vuejs-datepicker/dist/locale'

export default {
  name: 'datepickerDemo',
  components: {
    datepicker,
    vuejsDatepicker
  },
  data () {
    return {
      date: dateformat(new Date(), 'yyyy-MM-dd'),
      date1: dateformat(new Date(), 'yyyy-MM-dd'),
      zh: zh
    }
  },
  methods: {
    customFormatter (date) {
      console.log(date)
      return dateformat(date, 'yyyy-MM-dd')
    }
  },
  watch: {
    date () {
      console.log(this.date)
    }
  }
}

function dateformat (date, fmt) {
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}
</script>
