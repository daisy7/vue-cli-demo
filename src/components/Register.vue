<template>
    <div class="login">
        <div class="form-group">
            <label>用户名:</label>
            <input type="text" class="form-control" v-model="username">
        </div>
        <div class="form-group">
            <label for="pwd">密码:</label>
            <input type="password" class="form-control" id="pwd" v-model="password">
            <button type="submit" @click="register" class="btn btn-primary">注册</button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                username: "",
                password: ""
            };
        },
        methods: {
            register() {
                this.axios
                    .post("/api/register", {
                        username: this.username,
                        password: this.password
                    })
                    .then(res => {
                        if (res.data.code == "0") {
                            this.$router.push("/login");
                        } else {
                            alert(res.data.message);
                        }
                    });
            }
        }
    };
</script>
<style lang="scss" scoped>
    .login {
        width: 400px;
        margin: auto;
    }
</style>