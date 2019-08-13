import Vue from 'vue'
// 第三方组件
// 搜索
import {
    // 布局容器
    Container,
    Aside,
    Main,
    // 头像
    Avatar,
    // 分割线
    Divider,
    //导航
    Menu,
    Submenu,
    MenuItemGroup,
    MenuItem,
    Collapse,
    CollapseItem,
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
    Upload,
    Pagination,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    OptionGroup,
    ButtonGroup,
    DatePicker,
    TimeSelect,
    TimePicker,
    Tooltip,
    Breadcrumb,
    BreadcrumbItem,
    Tag,
    Tree,
    Alert,
    Slider,
    Icon,
    Row,
    Col,
    Progress,
    Badge,
    Rate,
    Steps,
    Step,
    Carousel,
    CarouselItem,
    Cascader,
    ColorPicker,
    //   Transfer,
    Header,
    Footer,
    Loading,
    MessageBox,
    Message,
    Notification
} from 'element-ui';

export default () => {
    Vue.use(Main).use(Header)
        .use(Row).use(Col)
        .use(Divider)
        .use(Drawer);
    Vue.use(Avatar)
    Vue.use(Pagination)
    Vue.use(Dialog)
    Vue.use(Autocomplete)
    Vue.use(Dropdown)
    Vue.use(DropdownMenu)
    Vue.use(DropdownItem)
    Vue.use(Menu)
    Vue.use(Submenu)
    Vue.use(MenuItem)
    Vue.use(MenuItemGroup)
    Vue.use(Input)
    Vue.use(InputNumber)
    Vue.use(Radio)
    Vue.use(RadioGroup)
    Vue.use(RadioButton)
    Vue.use(Checkbox)
    Vue.use(CheckboxButton)
    Vue.use(CheckboxGroup)
    Vue.use(Switch)
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(OptionGroup)
    Vue.use(Button)
    Vue.use(ButtonGroup)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(DatePicker)
    Vue.use(TimeSelect)
    Vue.use(TimePicker)
    Vue.use(Popover)
    Vue.use(Tooltip)
    Vue.use(Breadcrumb)
    Vue.use(BreadcrumbItem)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Tabs)
    Vue.use(TabPane)
    Vue.use(Tag)
    Vue.use(Tree)
    Vue.use(Alert)
    Vue.use(Slider)
    Vue.use(Icon)
    Vue.use(Upload)
    Vue.use(Progress)
    Vue.use(Badge)
    Vue.use(Card)
    Vue.use(Rate)
    Vue.use(Steps)
    Vue.use(Step)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Collapse)
    Vue.use(CollapseItem)
    Vue.use(Cascader)
    Vue.use(ColorPicker)
    Vue.use(Container)
    Vue.use(Aside)
    Vue.use(Footer)

    Vue.use(Loading.directive)

    Vue.prototype.$loading = Loading.service
    Vue.prototype.$msgbox = MessageBox
    Vue.prototype.$alert = MessageBox.alert
    Vue.prototype.$confirm = MessageBox.confirm
    Vue.prototype.$prompt = MessageBox.prompt
    Vue.prototype.$notify = Notification
    Vue.prototype.$message = Message
}