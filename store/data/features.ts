export interface IFeature {
    description: string;
    title: string;
}

const features: IFeature[] = [
    {
        title: "新的響應模板",
        description: '完全重新設計的響應式模板，基於新的 Bootstrap 4。可配置的縮略圖列數量（小/大縮略圖）。 預測搜索。 綜合下拉菜單。 重新設計的訂閱源頁面。'
    },
    {
        title: '視頻轉換隊列',
        description: '為了優化服務器CPU資源，上傳視頻現在放置在轉換隊列中進行轉碼，而不是同時轉碼。'
    },
    {
        title: '分塊上傳',
        description: '一種快速可靠的方式來上傳大型視頻文件，將其分成一系列部分，繞過 Cloudflare 的 100MB 上傳限制和託管公司的最大文件大小上傳限制。'
    },
    {
        title: '嵌套註釋',
        description: '現在，所有評論部分都包含帶有回复、點贊和排序選項的嵌套評論，從而改善了網站的社交網絡方面。'
    },
    {
        title: '視頻縮略圖',
        description: '在鼠標懸停時播放視頻預覽序列，而不是經典的旋轉縮略圖。'
    },
    {
        title: '標籤部分',
        description: '網站上的一個新部分，可以幫助用戶輕鬆找到他想要的內容，以及網站的搜索引擎優化。'
    },
    {
        title: '視頻+照片+博客',
        description: '您現在可以將成人視頻、照片庫和博客全部集中在一個網站中。'
    },
    {
        title: '搜索引擎優化',
        description: 'AdultVideoScript 具有新的搜索引擎友好 URL，以便在搜索引擎中更好地建立索引和排名。'
    },
    {
        title: '響應式模板',
        description: '允許訪問者通過適合任何屏幕的響應式（基於 Bootstrap）界面瀏覽您的網站、觀看和上傳視頻或照片，從而在台式機、筆記本電腦、平板電腦和智能手機上提供完美的體驗。'
    },
    {
        title: '高級會員制度',
        description: '借助新的高級會員系統，您現在可以通過為每個用戶級別啟用和配置多個權限和限制，將訪客（來賓）轉換為免費會員，並將免費會員轉換為付費（高級）會員。'
    },
    {
        title: '高清和移動視頻',
        description: '通過新的視頻轉換引擎，上傳的視頻可以轉換為多種分辨率和質量的網絡就緒和移動就緒格式，可通過管理面板進行配置。'
    },
    {
        title: '多語言系統',
        description: '多語言系統使用語言文件，允許訪問者以他們選擇的語言使用網站。 您的願望現在可以真正反映互聯網的全球性。'
    },
    {
        title: 'Facebook / Google 報名',
        description: '新的 AVS 允許用戶直接使用 Facebook 或 Google 帳戶註冊/登錄，通過自動提取所有信息來簡化註冊/登錄過程，從而改進了社區的社交組件。'
    },
    {
        title: 'HTML5 視頻播放器',
        description: '訪問者現在可以使用新的 HTML5 播放器在任何設備上播放視頻，其中包括舊 Flash 播放器的所有選項，以及時間線預覽等新功能。'
    },
    {
        title: '高度可定制',
        description: 'AVS 使用 Smarty 模板引擎和 Bootstrap CSS 來輕鬆定制佈局。 訪問未編碼的源代碼可以實現完整的功能定制以及與其他腳本的集成。'
    },
    {
        title: '多語言系統',
        description: '我們的多服務器架構為您的網站提供高可擴展性、可靠性和性能。 從無限數量的輔助服務器存儲和流式傳輸視頻，平衡您的網站負載並優化流量。'
    },
    {
        title: '支持 20 多種視頻格式',
        description: 'AdultVideoScript 旨在允許您的會員上傳各種視頻格式，並受編解碼器庫支持，其中包括：AVI、WMV、QuickTime、DIVX、MPEG、3GP、FLV 等等！'
    },
    {
        title: '貨幣化選項',
        description: '多語言系統, 使用語言文件，允許訪問者以其選擇的語言使用網站。 您的願望現在可以真正反映互聯網的全球性。'
    },
    {
        title: '實時視頻轉換',
        description: '上傳到 AdultVideoScript 網站的視頻會自動即時轉換為網絡和移動設備就緒格式，並使用 HTML5 視頻播放器流式傳輸到所有設備，無需昂貴的服務器流媒體軟件。'
    },
    {
        title: '廣泛的會員資料',
        description: '會員個人資料可以顯示很多信息，例如個人信息、朋友、訂閱者、最新視頻、照片、最新博客條目、個人資料上的評論、最喜歡的視頻、播放列表等。與會員和會員互動的方式也有很多種 輪廓。'
    },
    {
        title: '評論和評級',
        description: '使用 AJAX 技術，會員將能夠即時評價和評論視頻、照片、博客和個人資料。'
    },
    {
        title: '旋轉縮略圖',
        description: '視頻縮略圖顯示為具有 20 個不同幀的短動畫。'
    }
]

export default features;