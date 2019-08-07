<template>
    <div class="teampart">
        <div class="teamserch">
            <el-input placeholder="请输入内容" v-model="teaminput">
                <i slot="suffix" class="el-input__icon el-icon-search" @click="teamsearch(teaminput)"></i>
            </el-input>
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
      unruleteaminf: []
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
    }
  }
};
</script>

<style>
.teampart {
  line-height: 40px;
  padding-left: 20px;
}

.teamserch {
  width: 300px;
  margin-bottom: 20px;
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
