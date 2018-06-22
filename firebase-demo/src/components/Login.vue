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
                    <el-button type="primary" :loading="loading" class="login-btn" @click="login">Login</el-button>
                    <br>
                    <small>Don't have an account yet? <router-link to="/Register">Create one</router-link></small>
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
            login() {
                this.loading = true
                firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password).then(
                    (user) => {
                        this.$router.replace('Home')
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