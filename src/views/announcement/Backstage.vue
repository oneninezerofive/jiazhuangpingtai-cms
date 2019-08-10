<template>
   <div>
    <el-table
      :data="backstage"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="公告ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="公告标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="banerLink"
        label="公告详情">
      </el-table-column>
    </el-table>
   </div>
</template>

<script>
export default {
  data() {
    return {
      backstage: []
    };
  },
  async created() {
    let gonggao = await this.$axios(
      "https://www.easy-mock.com/mock/5d496c39b20a8503ca1a97f3/example/hou"
    );
    this.backstage = gonggao.data.data.items;
  }
};
</script>

<style>
</style>
