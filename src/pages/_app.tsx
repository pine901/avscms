import MainLayout from '@/components/layouts/mainLayout'
import '@/styles/globals.css'
import '@/styles/nprogress.css'
import type { AppProps } from 'next/app'
// @ts-ignore
import NProgress from "nprogress";
import Router from "next/router";
import { RecoilRoot } from 'recoil';

NProgress.configure({
  showSpinner: false,
});

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </RecoilRoot>
  )
}
