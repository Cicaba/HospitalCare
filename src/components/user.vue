<template>
  <div class="userMsg">
    <div>
      <div>
        <div>
          <img width="140px" src="../static/u1185.png" alt="">
        </div>
        <div>内科</div>
      </div>
    </div>
    <div>
      <ul>
        <li>姓名 张小花</li>
        <li>职务 护士长</li>
        <li>邮箱 46649123@qq.com</li>
        <li>电话 18997833242</li>
      </ul>
    </div>
  </div>
</template>
<style>
  .userMsg{
    width: 100%;
    height: 100%;
    background-color: rgba(242, 242, 242, 1);
  }
  .userMsg>div{
    height: 200px;
  }
  .userMsg>div>div{
    height: 200px;
    width: 200px;
    margin: 0 auto;
  }
  .userMsg>div>div>div:nth-of-type(1){
    text-align: center;
    height: 140px;
  }
  .userMsg>div>div>div:nth-of-type(2){
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 18px;
    color: white;
    background-color: rgba(204, 204, 204, 1);
    margin-top: 15px;
    border-radius: 8px;
  }
  .userMsg>div:nth-of-type(2){
    background-color: white; 
    border-bottom: solid 1px rgba(204, 204, 204, 1);
  }
  .userMsg>div:nth-of-type(2)>ul>li{
    text-indent: 36px;
    height: 50px;
    line-height: 50px;
    border: solid 1px rgba(204, 204, 204, 1);
    border-bottom-width: 0px;
  }
</style>
