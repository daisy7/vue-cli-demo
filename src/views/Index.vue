<template>
  <div>
    <div class="index-bg"></div>
    <div class="index-header">
        <div class="index-header-content">
          <a class="title" href="/">FindCl</a>
          <a class="right" href="/declare">声明</a>
          <a class="right" href="/help">帮助</a>
          <a class="right" href="https://github.com/ssstk/antcolony" target="_blank">Fork me on Github</a>
        </div>
    </div>
    <div class="index-main">
        <h1>FindCl.com</h1>
        <div class="index-search  justify-content align-items ub">
            <form id="form" class="ub ub-f1" method="GET" action="/list">
                <input class="ub-f1" id="input" type="text" name="q" autocomplete="off" maxlength="40">
                <button type="submit">搜 索</button>
            </form>
        </div>
    </div>
    <div class="index-foot">
        <p>
          <a class="J_Lang" href="javascript:;" data-lang="cn">中文（简体）</a>
          <a class="J_Lang" href="javascript:;" data-lang="tw">中文（繁體）</a>
          <a class="J_Lang" href="javascript:;" data-lang="en">English</a>
        </p>
        <p>Copyright © 2014 FindCl.com<a href="http://cn.mikecrm.com/7cjpxTA" target="_blank">联系我们</a></p>
    </div>
  </div>
  
</template>
<script>
import vFooter from "@/components/Footer.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    vFooter
  }
};
</script>

<style lang="scss" scoped>
.index-bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #bbb;
  background: #333 url("../assets/images/bg.jpg") no-repeat center center;
}

.index-header {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  .index-header-content {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 3;
    overflow: hidden;
  }
  a {
    font-size: 16px;
    line-height: 50px;
    padding: 0 15px;
    color: #fff;
  }
  a.title {
    font-size: 20px;
    font-weight: bold;
    float: left;
  }
  a.right {
    float: right;
  }
}

.index-main {
  position: absolute;
  top: 30%;
  left: 50%;
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
  height: 160px;
  max-width: 600px;
  transform: translateX(-50%);
  -ms-transform: translateX(-50%); /* IE 9 */
  -webkit-transform: translateX(-50%); /* Safari and Chrome */
  -o-transform: translateX(-50%); /* Opera */
  -moz-transform: translateX(-50%); /* Firefox */
  h1 {
    overflow: hidden;
    height: 60px;
    font-size: 0;
    background: url("../assets/images/logo.png") no-repeat center;
    background-size: contain;
    margin: 24px 0;
  }
}
.index-search {
  width: 100%;
  height: 50px;
  text-align: center;
  input {
    font-size: 18px;
    line-height: 28px;
    height: 50px;
    padding: 0 10px;
    border: none;
    outline: none;
  }
  button {
    font-size: 20px;
    line-height: 50px;
    width: 100px;
    height: 50px;
    padding: 0;
    cursor: pointer;
    text-align: center;
    color: #fff;
    border: none;
    background-color: #00b7ff;
  }
}

.index-foot {
  position: absolute;
  z-index: 1;
  bottom: 10px;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 50px;
  p {
    font-size: 13px;
    line-height: 25px;
    height: 25px;
    margin: 0;
    text-align: center;
    color: #fff;
    a {
      padding: 0 10px;
      color: #f0f0f0;
    }
  }
}
</style>
