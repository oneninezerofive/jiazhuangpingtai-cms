<template>
   <div>
    <el-table
      :data="lou"
      style="width: 100%">
      <el-table-column
        prop="cmtName"
        label="区域名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="详细地址"
        width="180">
      </el-table-column>
      <el-table-column
        prop="levelPrice"
        label="相关价格"
        width="180">
      </el-table-column>
      <el-table-column
        prop="area"
        label="相关参数"
        width="180">
      </el-table-column>
        <el-table-column
        prop="latitude"
        label="单层高度"
        width="180">
      </el-table-column>
        <el-table-column
        prop="longitude"
        label="单层宽度"
        width="180">
      </el-table-column>
        <el-table-column
        prop="communityId"
        label="近期排行"
        width="180">
      </el-table-column>
       <el-table-column
      fixed="right"
      label="操作"
      width="100">
           <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, lou)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
    </el-table>

   </div>
</template>

<script>
export default {
  data() {
    return {
        lou:[]
    };
  },
  async created() {
    let shopList = await this.$axios(
      "https://www.easy-mock.com/mock/5d402b8f99acfe0359e01860/example/shopmenu"
    );
    // console.log(shopList.data.data.items);
    this.lou = shopList.data.data.items;
  },
  methods :{
    deleteRow(index, rows) {
        rows.splice(index, 1);
      }
  }
};
</script>

<style>
</style>
