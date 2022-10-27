import Layout from '@/components/Layout';
import DefaultLayout from '../components/Layout/DefaultLayout';
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
    },
    {
        pathname: '/skillsheet',
        titleHead: 'Xem skillsheet',
        layout: DefaultLayout,
    },

]
export {Layout, DefaultLayout}
export default routers
