<template>
  <div class="page">
    <img src="https://cn.vuejs.org/images/logo.png" alt="vue logo" />
    <h1>Wox Application</h1>
    <p>A dynamic loader MVC architecture based on <a href="https://vuejs.org/" target="_blank">Vue.js</a> development.</p>
    <div class="links">
      <a href="https://github.com/woxjs" target="_blank">HOME</a>
      <a href="https://github.com/woxjs/wox/issues" target="_blank">ISSUE</a>
      <a href="https://github.com/woxjs/wox/tree/master/docs" target="_blank">INTRO</a>
      <a href="https://www.npmjs.com/package/@wox/wox" target="_blank">NPM</a>
      <a href="https://www.npmjs.com/package/@wox/cli" target="_blank">CLI</a>
    </div>
    <p class="copyright">Copyright@wox.js.org 2018-present - <a href="mailto:evio@vip.qq.com">evio@vip.qq.com</a></p>
  </div>
</template>
<script>
  export default {
    name: "IndexPage"
  }
</script>
<style lang="less">
  .page{
    padding: 100px 0;
    a{
      color:#46bd87;
      transition:all .3s ease-in;
      &:link,&:visited{
        text-decoration:underline;
      }
      &:hover{
        text-decoration: none;
      }
    }
    img{
      width: 100px;
    }
    &,h1, p, .links{
      text-align: center;
    }
    .links{
      margin-top: 30px;
      a{
        padding: 0 8px;
      }
    }
    .copyright{
      padding: 30px 0;
      font-size:12px;
      color:#ccc;
      a:link,a:visited{
        color:#ccc;
      }
      a:hover{
        color:#46bd87;
      }
    }
  }  
</style>