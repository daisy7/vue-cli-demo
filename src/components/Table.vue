<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">添加品牌</h3>
            </div>
        </div>
        <div class="card-body">
            <label for="">
                Name:
                <input type="text" name="" id="" v-model="name">
            </label>
            <input type="button" value="添加" class="btn btn-primary" @click="add">
            <label for="">
                搜索关键字：
                <input type="text" v-model="keywords" v-focus>
            </label>
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Ctime</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in search(keywords)" :key="item._id">
                        <td>{{item._id}}</td>
                        <td>{{item.name|carFormat('汽车')}}</td>
                        <td>{{item.ctime|dateFormat}}</td>
                        <td>
                            <a href="" @click.prevent="del(item._id)">删除</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style lang="scss" scoped>
</style>
<script>
Date.prototype.Format = function(fmt) {
  //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};
export default {
  data: () => {
    return {
      id: "",
      name: "",
      keywords: "",
      list: []
    };
  },
  created() {
    request("/api/cars").then(response => {
      this.list = response.data;
    });
  },
  methods: {
    add() {
      let that = this;
      this.axios
        .post("/api/cars", {
          name: this.name
        })
        .then(function(response) {
          console.log(response);
          if (response.status == 200 && response.data.code == 0) {
            that.list.push(response.data.data);
          } else {
            alert(response.data.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    del(id) {
      let that = this;
      this.axios
        .delete("/api/cars/" + id)
        .then(response => {
          console.log(response);
          if (response.status == 200 && response.data.code == 0) {
            let index = that.list.findIndex(v => {
              if (v._id == id) {
                return true;
              }
            });
            that.list.splice(index, 1);
          } else {
            alert(response.data.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    search(keywords) {
      return this.list.filter(v => {
        if (v.name.includes(keywords)) {
          return v;
        }
      });
    }
  },
  filters: {
    dateFormat: (dateStr, pattern = "yyyy-MM-dd hh:mm:ss") => {
      return new Date(dateStr).Format(pattern);
    },
    carFormat: (msg, arg) => {
      return msg + arg;
    }
  },
  directives: {
    focus: {
      inserted: el => {
        el.focus();
      }
    }
  }
};
</script>
