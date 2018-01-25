<template>
  <div style="height:100%">
    <menu-mask></menu-mask>
    <el-row>
      <el-col :span="8" :xs="12">
        <el-button type="primary">添加</el-button>
      </el-col>
      <el-col :span="8" :xs="12">
        <el-button type="primary">添加</el-button>
      </el-col>
      <el-col :span="8" :xs="12">
        <el-button type="primary">添加1</el-button>
      </el-col>
  </el-row>
  </div>
</template>
<script>
import menuMask from "../components/menu.vue";
export default {
  components: {
    menuMask
  }
};
</script>
