<template>
  <div>
    <mt-field label="用户名" class="error" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field
      label="邮箱"
      v-validate="'required|email'"
      placeholder="请输入邮箱"
      type="email"
      v-model="email"
      name="email"
    ></mt-field>
    <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-field
      v-validate="'required|phone'"
      label="手机号"
      placeholder="请输入手机号"
      type="tel"
      v-model="phone"
      name="phone"
    ></mt-field>
    <span v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
      phone: ""
    };
  },
  created() {
    this.$validator.extend("phone", {
      getMessage: field => `${field}格式不正确`,
      validate: (value, [args]) => {
        const reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        return reg.test(value);
      }
    });
  },
  methods: {
    submit() {
      this.axios
        .post("/api/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          if (res.data.code == "0") {
            this.$store.commit("setLogin", {
              username: this.username,
              token: res.data.data
            });
            this.$router.push("/table");
          } else {
            alert(res.data.message);
          }
        });
    },
    logout() {
      this.$store.commit("setLogin", null);
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  width: 400px;
  margin: auto;
  .error {
    border: 1px solid red;
  }
}
</style>
