<template>
  <div class="teampart">
    <div class="teamserch">
      <el-input placeholder="请输入内容" v-model="teaminput">
        <i slot="suffix" class="el-input__icon el-icon-search" @click="teamsearch(teaminput)"></i>
      </el-input>
      <el-button type="primary" icon="el-icon-edit" @click="dialog = true">添加团队</el-button>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="优质团队" name="onlieteam">
        <div>
          <template>
            <el-table :data="teaminf" height="500" border style="width: 100%">
              <el-table-column prop="date" label="创建日期" width="180">
              </el-table-column>
              <el-table-column prop="name" label="名称" width="180">
              </el-table-column>
              <el-table-column prop="address" label="地址">
              </el-table-column>
              <el-table-column prop="style" label="装修风格">
              </el-table-column>
              <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                  <el-button type="text" size="small">
                    <el-popover placement="right" width="900" trigger="click">
                      <el-card :body-style="{ padding: '0px',display:'flex'}">
                        <img :src="scope.row.src" class="cardimage">
                        <div class="cardinf" style="padding: 14px;">
                          <h3>联系人: {{scope.row.name}}</h3>
                          <p>联系地址: {{scope.row.address}}</p>
                          <p>装修风格: {{scope.row.style}}</p>
                          <p>已完成订单数: {{scope.row.tips}}</p>
                          <p>平台注册日期: {{scope.row.date}}</p>
                        </div>
                      </el-card>
                      <el-button type="text" size="small" slot="reference">查看详情</el-button>
                    </el-popover>
                  </el-button>
                  <el-button type="text" size="small" @click="unrule">违规</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </div>
      </el-tab-pane>
      <el-tab-pane label="违规团队" name="reteam">
        <div>
          <template>
            <el-table :data="unruleteaminf" height="500" border style="width: 100%">
              <el-table-column prop="date" label="创建日期" width="180">
              </el-table-column>
              <el-table-column prop="name" label="名称" width="180">
              </el-table-column>
              <el-table-column prop="unrule" label="违规原因">
              </el-table-column>
              <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="delteam">删除</el-button>
                  <el-button type="text" size="small" @click="removeteam">解禁</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </div>
      </el-tab-pane>
    </el-tabs>

    <el-drawer title="添加新的团队" size="50%" :before-close="handleClose" :visible.sync="dialog" direction="rtl" custom-class="demo-drawer" ref="drawer">
      <div class="demo-drawer__content">
        <el-form :model="form">
          <el-form-item label="团队名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="团队地址" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="设计风格" :label-width="formLabelWidth">
            <el-input v-model="form.style" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="上传例子" :label-width="formLabelWidth">
            <el-upload :limit="upnumb" action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="dialog = false">取 消</el-button>
          <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
// 引入消息盒子
import { Message, MessageBox } from "element-ui";
export default {
  data() {
    return {
      activeName: "onlieteam",
      teaminput: "",
      teaminf: [],
      unruleteaminf: [],

      table: false,
      dialog: false,
      loading: false,
      showtip: true,
      form: {
        date: "",
        name: "",
        address: "",
        style: "",
        tips: 0,
        rule: true,
        unrule: "",
        src: ""
      },
      formLabelWidth: "80px",

      upnumb: 1,
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  async created() {
    //   获取团队数据
    let teaminfList = await this.$axios(
      "https://www.easy-mock.com/mock/5d4a3f75c3fce6452c931cf8/cmsteam/teaminf"
    );
    this.teaminf = teaminfList.data;
    //获取违规团队数据
    let unruleteaminfList = await this.$axios(
      "https://www.easy-mock.com/mock/5d4a3f75c3fce6452c931cf8/cmsteam/unruleteam"
    );
    this.unruleteaminf = unruleteaminfList.data;
  },
  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event);
    },
    teamsearch(teamname) {
      console.log(teamname);
      // 点击搜索的时候获取对应数据
    },
    unrule() {
      MessageBox.prompt("请输入违规事件或者违规原因！", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(({ value }) => {
          Message({
            type: "success",
            message: "转入违规团队成功!理由是：" + value
          });
        })
        .catch(() => {
          Message({
            type: "info",
            message: "已取消转入违规团队"
          });
        });
    },
    delteam() {
      MessageBox.confirm(
        "此操作将删除此团队记录和注销其账号，是否继续？",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
          Message({
            type: "success",
            message: "删除成功！"
          });
        })
        .catch(() => {
          Message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    removeteam() {
      MessageBox.confirm("此操作将取消此团队的违规禁制，是否继续？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          Message({
            type: "success",
            message: "取消成功！"
          });
        })
        .catch(() => {
          Message({
            type: "info",
            message: "取消失败"
          });
        });
    },
    handleClose(done) {
      MessageBox.confirm("确定要提交表单吗？")
        .then(_ => {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            done();
          }, 2000);
        })
        .catch(_ => {});
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

<style>
.teampart {
  line-height: 40px;
  padding: 0 20px;
}

.teamserch {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.el-input {
  width: 300px !important;
}

.el-tabs__nav-wrap::after {
  display: none;
}

.cardimage {
  width: 400px;
  height: 100%;
}
.cardinf {
  line-height: 40px;
}
</style>
