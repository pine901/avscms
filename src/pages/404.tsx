/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'

const NotFound = () => {
    return (
        <>
            <Head>
                <title>AVSCMS | 找不到網頁</title>
            </Head>
            <>
                <div className="grid min-h-[91vh] grid-cols-1 grid-rows-[1fr,auto,1fr] lg:grid-cols-[max(50%,36rem),1fr]">
                    <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
                        <div className="max-w-lg">
                            <p className="text-base font-semibold leading-8 text-primary-100">404</p>
                            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">找不到網頁</h1>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                抱歉，我們找不到您要查找的頁面。
                            </p>
                            <div className="mt-10">
                                <Link href="/" className="text-sm font-semibold leading-7 text-primary-100">
                                    <span aria-hidden="true">&larr;</span>回到家
                                </Link>
                            </div>
                        </div>
                    </main>
                    <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
                        <img
                            src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                </div>
            </>
        </>
    )
}

export default NotFound;