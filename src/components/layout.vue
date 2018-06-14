<template>
  <div class="container"  @click="resetConponent" :style="{minHeight:clientHeight + 'px'}">
    <div v-wechat-title="$route.meta.title"></div>
    <router-view/>
  </div>
</template>

<script>
import { eventBus } from '../eventBus'
import '../mock/mock'
export default {
  name: 'layout',
  data () {
    return {
      clientHeight: document.documentElement.clientHeight
    }
  },
  methods: {
    resetConponent () {
      eventBus.$emit('reset-conponent')
    }
  }
}
</script>

<style>
body, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, legend, input, button,textarea, p, blockquote, th, td {margin:0; padding:0; word-wrap:break-word; -webkit-text-size-adjust:none;}
body {position:relative; min-width: 1200px; font:12px/1.5 "Microsoft YaHei","Hiragino Sans GB",Tahoma,Helvetica,Arial,sans-serif; color:#333; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;}
ol,ul {list-style:none;}
fieldset,img {border:0;}
img {max-width:100%;}
abbr, acronym {border:0; font-variant:normal;}
h1, h2, h3, h4, h5, h6 {font-size:100%;}
address, caption, cite, code, dfn, em, var {font-style:normal;}
table {border-collapse:collapse;}
caption,th {text-align:left;}
blockquote, q {quotes:none;}
blockquote:before, blockquote:after, q:before, q:after {content:''; content:none;}
a {color:#333; text-decoration:none;}
a:hover {color:#196ab6; text-decoration:underline;}
input, button, textarea, select, optgroup, option {font-family:inherit; font-size:inherit; font-style:inherit; font-weight:inherit; resize:none;}
input, button, textarea, select {*font-size:100%;}
input:focus, button:focus, textarea:focus, select:focus {outline: 0;}
pre{white-space:pre-wrap; white-space:-moz-pre-wrap; white-space:-pre-wrap; white-space:-o-pre-wrap; *word-break:break-all; *word-wrap:break-word; _word-break:break-all; _word-wrap:break-word;}
.left {float:left;}
.right {float:right;}
.clear {clear:both;}
.clearfix:after {content:"."; clear:both; display:block; height:0; font-size:0; visibility:hidden; overflow:hidden;}
* html .clearfix {height:1%;}
.clearfix {display: block;}
*+html .clearfix{min-height:1%;}
::-webkit-input-placeholder {color: #b2b2b2 !important;}
:-moz-placeholder {color: #b2b2b2 !important;}
::-moz-placeholder {color: #b2b2b2 !important;}
:-ms-input-placeholder {color: #b2b2b2 !important;}
#overlay {
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.8;
  z-index: 9900;
  background-color: #000;
  background: -moz-radial-gradient(center,ellipse cover,rgba(0,0,0,0.6) 0,rgba(0,0,0,0.9) 100%);
  background: -webkit-gradient(radial,center center,0px,center center,100%,color-stop(0%,rgba(0,0,0,0.6)),color-stop(100%,rgba(0,0,0,0.9)));
  background: -webkit-radial-gradient(center,ellipse cover,rgba(0,0,0,0.6) 0,rgba(0,0,0,0.9) 100%);
  background: -o-radial-gradient(center,ellipse cover,rgba(0,0,0,0.6) 0,rgba(0,0,0,0.9) 100%);
  background: -ms-radial-gradient(center,ellipse cover,rgba(0,0,0,0.6) 0,rgba(0,0,0,0.9) 100%);
  background: radial-gradient(center,ellipse cover,rgba(0,0,0,0.6) 0,rgba(0,0,0,0.9) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#66000000',endColorstr='#e6000000',GradientType=1);
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
  filter: alpha(opacity=50);
  -webkit-transition: all 0.3s ease-out;
     -moz-transition: all 0.3s ease-out;
      -ms-transition: all 0.3s ease-out;
       -o-transition: all 0.3s ease-out;
          transition: all 0.3s ease-out;
}
.container {max-width: 1200px; margin: 0 auto; padding-top: 20px;}
</style>
