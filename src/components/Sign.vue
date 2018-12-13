<template>
    <div>
        <!-- 月份 -->
        <div class="month">
            <button @click="isNext(false)">❮</button>
            <span>{{current.getMonth()+1}}月{{current.getDate()}}</span>
            <button @click="isNext(true)">❯</button>
        </div>
        <!-- 星期 -->
        <ul class="weekdays">
            <li>日</li>
            <li>一</li>
            <li>二</li>
            <li>三</li>
            <li>四</li>
            <li>五</li>
            <li>六</li>
        </ul>
        <ul class="days">
            <li v-for="dayobject in days" :key="Date.parse(dayobject.date)">
                <span v-if="dayobject.date.getMonth() != current.getMonth()" class="other-month">{{dayobject.date.getDate()}}</span>
                <span v-else>
                    <span v-if="dayobject.isSign==true" class="active">{{dayobject.date.getDate()}}</span>
                    <span v-else>{{ dayobject.date.getDate()}}</span>
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      current: null,
      days: [],
      max: null,
      active_days: []
    };
  },
  methods: {
    init() {
      var current_date = new Date();
      var tmp1 = Date.parse(new Date("2018/11/15"));
      var tmp5 = Date.parse(new Date("2018/11/17"));
      var tmp2 = Date.parse(new Date("2018/11/18"));
      var tmp3 = Date.parse(new Date("2018/11/19"));
      var tmp4 = Date.parse(new Date("2018/11/20"));
      var tmp6 = Date.parse(new Date("2018/11/22"));
      var tmp7 = Date.parse(new Date("2018/10/22"));
      var tmp8 = Date.parse(new Date("2018/12/22"));
      var tmp9 = Date.parse(new Date("2018/12/23"));

      this.active_days = [tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9];
      this.current = current_date;
      this.render(current_date);
    },
    render(date) {
      this.days = [];
      var begin_date = new Date(date);
      begin_date.setDate(1);
      var weekday = begin_date.getDay();
      var days =
        new Date(
          begin_date.getFullYear(),
          begin_date.getMonth() + 1,
          0
        ).getDate() +
          weekday <=
        35
          ? 35
          : 42;
      begin_date.setDate(begin_date.getDate() - weekday);
      var active_days = this.timestamp2Date(this.active_days);
      this.max = this.getMax(active_days);
      for (var i = 0; i < days; i++) {
        var tmp = new Date(begin_date);
        tmp.setDate(tmp.getDate() + i);
        this.days.push({
          date: tmp,
          isSign: active_days.includes(tmp.getDate())
        });
      }
    },
    isNext(status) {
      var date = this.current;
      var day = date.getDate();
      if (status) status = 1;
      else status = -1;
      date.setDate(
        date.getDate() +
          new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() *
            status
      );
      date.setDate(day);
      this.render(date);
    },
    timestamp2Date(timestamps) {
      var days = [];
      timestamps.forEach(i => {
        var tmp = new Date(i);
        if (tmp.getMonth() == this.current.getMonth()) days.push(tmp.getDate());
      });
      return days;
    },
    getMax(arr) {
      if (arr.length <= 0) return 0;
      arr = arr.sort();
      var max = 1,
        tmp = 1;
      arr.reduce((prev, cur) => {
        if (cur - prev === 1) tmp++;
        else {
          if (tmp > max) max = tmp;
          else tmp = 1;
        }
        return cur;
      });
      return max > tmp ? max : tmp;
    }
  },
  created() {
    this.init();
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
}

.month {
  text-align: center;
  button {
    width: 50px;
    height: 30px;
  }
}

.weekdays {
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  li {
    display: inline-block;
    width: 13.6%;
    text-align: center;
  }
}

.days {
  height: 400px;
  padding: 0;
  background: #ffffff;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  li {
    list-style-type: none;
    display: inline-block;
    width: 14.2%;
    height: 70px;
    text-align: center;
    padding-bottom: 15px;
    padding-top: 15px;
    font-size: 1rem;
    color: #000;
    .active {
      padding: 6px 10px;
      border-radius: 50%;
      background: #00b8ec;
      color: #fff;
    }
    .other-month {
      padding: 5px;
      color: gainsboro;
    }
    &:hover {
      background: #e1e1e1;
    }
  }
}
</style>
