import Vue from 'vue'
// 第三方组件
// 搜索
import {
    // 布局容器
    Container,
    Aside,
    Main,
    Header,
    // 头像
    Avatar,
    // 行列
    Row,
    Col,
    // 分割线
    Divider,
    //导航
    Menu,
    Submenu,
    MenuItemGroup,
    MenuItem,
    Collapse,
    CollapseItem,
    // 输入框
    Input,
    // 按钮
    Button,
    // tabs
    Tabs,
    TabPane,
    // 表格
    Table,
    TableColumn,
    // 弹出框
    Popover,
    // 卡片
    Card,
    // 抽屉
    Drawer,
    // 表单
    Form,
    FormItem,
    // 选项
    Select,
    Option,
    // 对话框
    Dialog,
    // 上传
    Upload
} from 'element-ui';

export default () => {
    Vue.use(Container).use(Aside).use(Main).use(Header)
        .use(Avatar)
        .use(Row).use(Col)
        .use(Divider)
        .use(Collapse).use(CollapseItem)
        .use(Menu).use(Submenu).use(MenuItemGroup).use(MenuItem)
        .use(Collapse).use(CollapseItem)
        .use(Input)
        .use(Button)
        .use(Tabs).use(TabPane)
        .use(Table).use(TableColumn)
        .use(Popover)
        .use(Card)
        .use(Form).use(FormItem)
        .use(Drawer)
        .use(Select).use(Option)
        .use(Dialog)
        .use(Upload);
}