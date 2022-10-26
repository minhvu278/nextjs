import DefaultLayout from "../../components/Layout/DefaultLayout";
import Layout from "../../components/Layout";

const routers = [
    {
        pathname: '/login',
        titleHead: 'Đăng nhập',
        layout: DefaultLayout,
    },
    {
        pathname: '/',
        titleHead: 'Homepage',
        layout: Layout,
    }

]
export {Layout, DefaultLayout}
export default routers
