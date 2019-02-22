<template>
  <div class="page">
    <img src="https://raw.githubusercontent.com/woxjs/wox/master/logo.svg?sanitize=true" alt="vue logo" />
    <h1>Wox.js</h1>
    <p>A dynamic loader MVC architecture based on <a href="https://vuejs.org/" target="_blank">Vue.js</a> development which use web virtual service and web virtual request mode.</p>
    <div class="links">
      <a href="https://github.com/woxjs/wox" target="_blank">HOME</a>
      <a href="https://github.com/woxjs/wox/issues" target="_blank">ISSUE</a>
      <a href="https://woxjs.github.io/" target="_blank">INTRO</a>
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
    width:100%;
    box-sizing: border-box;
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
      font-size:10px;
      color:rgba(0,0,0,.1);
      transform: scale(.8);
      a:link,a:visited{
        color:rgba(0,0,0,.1);
      }
      a:hover{
        color:#46bd87;
      }
    }
  }  
</style>