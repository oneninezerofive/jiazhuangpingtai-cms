<template>
   <div>
    <el-table
      :data="reception"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="公告ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="活动名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="banerLink"
        label="活动详情">
      </el-table-column>
    </el-table>
   </div>
</template>

<script>
export default {
  data() {
    return {
      reception: []
    };
  },
  async created() {
    let gonggao = await this.$axios(
      "https://www.easy-mock.com/mock/5d496c39b20a8503ca1a97f3/example/qian"
    );
    this.reception = gonggao.data.data.items;
  }
};
</script>

<style>
</style>
