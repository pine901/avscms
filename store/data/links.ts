import { ILink } from "@/components/common/navbar";

const links: ILink[] = [
    {
        label: "home",
        href: "/",
    },
    {
        label: "product",
        hasDropdown: true,
        subLinks: [
            { label: "download", href: "/product/download" },
            { label: "highlights", href: "/product/highlights" },
            { label: "features", href: "/product/features" },
            { label: "server requirements", href: "/product/server-requirements" },
            { label: "live demo", href: "/product/live-demo" },
            { label: "pricing & ordering", href: "/product/pricing-and-ordering" },
            { label: "templates", href: "/product/templates" },
            {
                label: "plugins", href: "/product/plugins", hasDropdown: true, subLinks: [
                    { label: 'Video Grabber', href: '/plugins/video-grabber' },
                    { label: 'Mass Video Embedder', href: '/plugins/mass-video-embedder' },
                    { label: 'Multi Server System', href: '/plugins/multi-server-system' },
                    { label: "lighttpd-streaming", href: '/plugins/lighttpd-streaming' },
                    { label: 'CSV Importer', href: '/plugins/csv-importer' },
                    { label: "Automatic Embedder", href: '/plugins/automatic-video-embedder' }
                ]
            },
        ]
    },
    {
        label: "services",
        hasDropdown: true,
        subLinks: [
            { label: "script installation", href: "/services/script-installation", description: '我們為您提供專業的腳本安裝服務' },
            { label: "server setup", href: "/services/server-setup", description: '為您安裝並確保一切配置正確' },
            { label: "Lighttpd Setup", href: "/services/lighttpd-setup", description: '啟用 Lighttpd 流式傳輸' },
            { label: "Branding Free", href: "/services/branding-free", description: '只需 49 美元，您就可以刪除任何...' },
            { label: "hosting", href: "/services/hosting", description: '提供價格實惠的託管服務器' },
            { label: "servers", href: "/services/servers", description: '提供專用服務器供數據中心使用' },
            { label: "custom work", href: "/services/custom-work", description: '提供各種模板設計' },
            { label: 'logo design', href: '/support/contact', description: '獲得標誌設計服務' }
        ]
    },
    {
        label: "support",
        hasDropdown: true,
        subLinks: [
            { label: "Contact Form & Info", href: "/support/contact", description: '需要幫忙？ 聯繫我們' },
            { label: "helpdesk", href: "https://helpdesk.adultvideoscript.com/", description: '從我們的支持團隊獲得快速回复' },
            { label: "client area", href: "https://my.adultvideoscript.com/", description: '下載腳本分發' },
            { label: "community forums", href: "https://github.com/avscms/avscms/issues", description: '獲得建議' },
            { label: "bug tracker", href: "https://github.com/avscms/avscms/issues", description: '報告您發現的錯誤' },
            { label: "monetize your site", href: "/support/monetize-your-site", description: '盈利指南' },
            { label: "Affiliate Program", href: "/support/affiliate-program", description: '提供有競爭力的機會' },
            { label: "Privacy policy", href: "/support/privacy-policy", description: '購買、下載和安裝...' },
        ]
    },
    {
        label: "Order",
        href: "/product/pricing-and-ordering",
    }
]

export default links;