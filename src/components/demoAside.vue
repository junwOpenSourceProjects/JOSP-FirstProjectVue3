<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      default-active="demoUser"
      style="min-height: calc(100vh - 50px)"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>测试数据1</span>
        </template>
        <el-menu-item-group title="分组一">
          <el-menu-item index="demoUser">合并数据库</el-menu-item>
          <!--这里就是设置默认的响应式的active-->
          <el-menu-item index="1-2">项目2</el-menu-item>
        </el-menu-item-group>
        <!--目前这里全部都是硬编码的，后面可以考虑用vuex来管理-->
        <el-menu-item-group title="分组二">
          <el-menu-item index="1-3">项目3</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>项目4</template>
          <el-menu-item index="1-4-1">项目141</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon>
          <icon-menu />
        </el-icon>
        <span>测试数据2</span>
      </el-menu-item>
      <el-menu-item disabled index="3">
        <el-icon>
          <document />
        </el-icon>
        <span>测试数据3</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting />
        </el-icon>
        <span>测试数据4</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "demoAside",
};
</script>

<style scoped></style>
