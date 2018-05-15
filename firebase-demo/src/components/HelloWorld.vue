<template>
  <div>
  <h1>Welcome</h1>
  <el-button type="primary"  :loading="loading" @click="logout">Logout</el-button>
  </div>
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
  
</style>
