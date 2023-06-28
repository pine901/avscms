import { IProductProps } from './../../src/components/pricing-and-ordering/product';

const products: IProductProps[] = [
    {
        title: ['Video Grabber', 'Plugin'],
        description: '允許您自動從其他視頻網站導入視頻及其標題、描述、標籤和縮略圖。',
        price: 79,
        href: '/plugins/video-grabber'
    },
    {
        title: ['Mass Embedder', 'Plugin'],
        description: '通過從其他視頻網站批量導入數千個嵌入式視頻及其信息，可以在幾分鐘內將它們填充到您的網站中。',
        price: 79,
        href: '/plugins/mass-video-embedder'
    },
    {
        title: 'Video Grabber + Mass  Embedder Pack',
        description: '以折扣價獲取視頻抓取器插件和海量視頻嵌入器插件。',
        price: 119,
        labels: ['Video Grabber', 'Mass Video Embedder'],
        href: ['/plugins/video-grabber', '/plugins/mass-video-embedder']
    },
    {
        title: ['Multi Server System', 'Plugin'],
        description: '使用我們的多服務器系統，您可以在無限數量的服務器上存儲視頻，從而平衡您的網站的負載。',
        price: 79,
        href: '/plugins/multi-server-system'
    },
    {
        title: ['Script Installation', 'Service'],
        description: "如果您在部署我們的腳本時遇到問題，我們可以專業地將其安裝在您的服務器上，固定費用為 29 美元。",
        price: 29,
        href: '/services/script-installation'
    },
    {
        title: ['Server Setup', 'Service'],
        description: "如果您的服務器不滿足腳本要求，我們可以為您安裝這些腳本並正確配置所有內容。",
        price: 49,
        href: '/services/server-setup'
    },
    {
        title: ['Nginx Streaming Setup', 'Service'],
        description: '我們可以在您的服務器上安裝和配置 Nginx，啟用 Nginx Streaming、視頻盜鏈保護和帶寬限制。',
        price: 79,
        href: '/plugins/lighttpd-streaming'
    },
    {
        title: 'Branding-Free',
        description: '只需 39 美元，您就可以刪除任何對我們公司的視覺引用，包括腳本所有頁面上的“Powered by”鏈接。',
        price: 39,
        href: '/services/branding-free'
    },
    {
        title: ['One Year', 'Free Updates'],
        description: '將免費下載和使用較新版本的腳本以及購買的模塊的期限延長一年。',
        price: 49,
        href: '/services/one-year-updates'
    },
    {
        title: ['Lifetime', 'Free Updates'],
        description: '通過購買此選項，您將能夠免費下載和使用腳本的所有未來版本以及購買的模塊。',
        price: 99,
        href: '/services/lifetime-updates'
    },
    {
        title: ['CSV Embed', 'Importer'],
        description: '我們易於使用的插件可讓您通過從 CSV 文件批量導入嵌入視頻，在幾秒鐘內填充您的 YouTube 網站。',
        price: 79,
        href: '/plugins/csv-importer'
    },
    {
        title: ['Automatic ', 'Video Embedder'],
        description: '使用 CRON 作業，以自動駕駛模式填充您的 YouTube 網站，並提供最新的嵌入式視頻。',
        price: 79,
        href: '/plugins/automatic-video-embedder'
    }
]

export default products;