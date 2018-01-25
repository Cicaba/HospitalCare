<template>
  <div id="login">
    <div class="content">
      <div class="login_center">
        <p class="login_header">欢迎使用护理文书系统</p>
        <div class="input_user">
          <input type='text' placeholder="请输入用户名"><img src="../static/u1213.png"/>
        </div>
        <div class="input_user password">
          <input type='text' placeholder="密码"><img src="../static/u1215.png"/>
        </div>
        <div class="rember">
          <input type="checkbox"> 记住密码
        </div>
        <div class="rember">
     <el-button type="primary" style="width:100%">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  #login .content, #login, #app, body, html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0
  }

  #login .content {
    background: rgba(22, 155, 213, 1);

  }

  #login .input_user ,.rember{
    position: relative;
    width: 350px;
    height: 35px;
    margin: auto;
    margin-bottom:20px;
  }
  #login .input_user.password {
    margin-bottom:30px;
  }
  #login .input_user img {
    position: absolute;
    top: 6px;
    left: 10px;
  }
  #login .input_user input {
    position: relative;
    width: 350px;
    height: 35px;
    border: none;
    padding-left: 45px;
    box-sizing:border-box;
    border-radius: 5px;
    background: rgba(153, 153, 153, 0.5);
  }

  .login_header {

    font-size: 24px;
    color: #199ED8;
    text-align: center;
    margin: 60px auto;

  }

  .login_center {
    width: 470px;
    height: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 10px;
    border: 1px solid #777;
  }
</style>
