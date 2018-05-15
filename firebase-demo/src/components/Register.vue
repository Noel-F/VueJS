<template>
    <el-row type="flex" justify="center" >
        <el-col :span="8">
        <el-card class="box-card">
            <div slot="header">
            <span>Firebase Demo</span>
            </div>
            <div>
            <el-form :model="user">
                <el-form-item label="Email">
                    <el-input v-model="user.email" clearable placeholder="Enter Email"></el-input>
                </el-form-item>
                <el-form-item label="Password">
                    <el-input v-model="user.password" clearable placeholder="Enater Password"></el-input>
                </el-form-item>
                <hr>
                    <el-button type="primary" :loading="loading" class="login-btn" @click="register">Register</el-button>
                <br>
                <small>or go back to <router-link to="/">Login</router-link></small>
            </el-form>
            </div>
        </el-card>
        </el-col>
  </el-row>
</template>

<script>
    import firebase from 'firebase'

    export default {
        data () {
            return {
                user: {
                    email: '',
                    password: ''
                },
                loading: false
            }
        },
        methods: {
            register() {
                this.loading = true
                firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password).then(
                    (user) => {
                        this.$router.replace('HelloWorld')
                        this.loading = false
                    }, (err) => {
                        this.loading = false
                        this.$notify.error({
                            title: 'Error',
                            message: err.message
                        })
                    }
                )
            }
        }
    }
</script>

<style>
    .login-btn {
        width: 100%;
    }
</style>