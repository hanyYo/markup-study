<template>
  <div>
    <template v-if="isMarkupIndex">
      <header id="header">
        <h1>마크업 UIO</h1>
      </header>
      <main id="main" role="main">
        <h2>blabla..</h2>
        <ul class="lst-view">
          <li><router-link to="/sample">sample</router-link></li>
        </ul>
      </main>
    </template>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'markupIndex',
  data () {
    return {
      isMarkupIndex: false
    }
  },
  created () {
    if (this.$route.name === 'markupIndex') {
      this.isMarkupIndex = true
    }
  },
  watch: {
    $route () {
      if (this.$route.fullPath === '/') {
        this.isMarkupIndex = true
      } else {
        this.isMarkupIndex = false
      }
    }
  }
}
</script>

<style scoped>
  #header{border-bottom:2px}
  #header h1{padding-bottom:5px;border-bottom:2px solid #2f2f2f;font-size:20px;color:#111}
  #main{padding-bottom:20px}
  #main h2{margin-top:15px;padding:10px 0 5px;border-bottom:1px solid #2f2f2f;font-size:16px;color:#111}
  .lst-view li{position:relative;border-bottom:1px solid #d9d9d9;}
  .lst-view li span{display:block;}
  .lst-view li a{display:block;padding:8px 30px 8px 8px;font-size:14px;}
  .lst-view li  a:after{position:absolute;right:15px;top:50%;margin-top:-7px;content:'〉';line-height:1}
</style>
