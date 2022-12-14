import '../styles/globals.css'
import '/styles/app.scss'
import {Provider} from "react-redux";
import {useStore} from "../redux/store";
import RouteGuard from "../components/RouteGuard";
import {useRouter} from "next/router";
import routers, {DefaultLayout} from "../redux/constants/routers";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
    const router = useRouter()
    const route = routers.find(item => item.pathname === router.pathname)
    const Layout = route ? route.layout : DefaultLayout
  return (
      <>
          <Head>
              <link rel="shortcut icon" href="/favicon.ico" />
          </Head>
          <RouteGuard>
              <Provider store={store}>
                  <Layout>
                      <Component {...pageProps} />
                  </Layout>
              </Provider>
          </RouteGuard>
      </>
  )
}

export default MyApp
