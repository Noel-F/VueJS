<template>
  <el-row type="flex" justify="center" >
    <el-col :span="20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Welcome</span>
          <el-button :loading="loading" @click="logout" class="logout-btn" type="text">Logout</el-button>
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
        loading: false
      }
    },
    methods: {
      logout () {
        this.loading = true;
        firebase.auth().signOut().then(() => {
          this.$router.replace('Login')
          this.loading = false
        })
      }
    }
  }
</script>

<style scoped>
  .logout-btn {
    float: right; 
    padding: 3px 0;
  }
</style>
