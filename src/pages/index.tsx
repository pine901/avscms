import Advantages from "@/components/home/advantages"
import HomeBanner from "@/components/home/banner"
import Reviews from "@/components/home/reviews"
import SubFooter from "@/components/home/subFooter"
import WhyUs from "@/components/home/whyUs"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    // window.location.hostname.includes("localhost") && router.push('/product')
  }, [])
  return (
    <>
      <Head>
        <title>AVSCMS | 歡迎</title>
      </Head>
      <main className="w-full min-h-screen lg:space-y-16 md:space-y-12 sm:space-y-9 space-y-6"
      >
        <HomeBanner />
        <Advantages />
        <div className="min-h-[20vh] bg-center bg-no-repeat bg-cover py-5 main-padding  flex md:flex-row flex-col items-center justify-between gap-6"
          style={{
            backgroundImage: 'url(/images/prev-bg.svg)'
          }}
        >
          <Image src={'/images/video-prev.png'} alt="preview" width={600} height={500} />
          <div className="flex flex-col lg:gap-5 md:gap-4 sm:gap-3 gap-2 items-center md:items-start">
            <div className="space-y-3 max-w-3xl">
              <h2 className="lg:text-3xl md:text-2xl sm:text-xl text-base text-grayish-100 font-medium text-center md:text-start">
                使用我們靈活、強大且可靠的視頻、照片庫和遊戲託管解決方案
              </h2>
              <p className="lg:text-xl md:text-lg sm:text-base text-sm text-grayish-200 lg:pb-5 md:pb-3 pb-2 text-center md:text-start">
                您現在可以輕鬆地將偉大的想法轉化為高利潤的成人視頻網站，就像pornhub、redtube、youjizz、xvideos、tube8、youporn 或xhamster 一樣。
              </p>
            </div>
            <Link href={'https://new.avscms.com/product/pricing-and-ordering'}>
              <button className="filled-btn w-fit">
                加入價值數十億美元的成人產業
              </button>
            </Link>
          </div>
        </div>
        <WhyUs />
        <Reviews />
        <SubFooter />
      </main>
    </>
  )
}
