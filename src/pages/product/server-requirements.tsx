import HavingTrouble from '@/components/common/HavingTrouble';
import ServerRequirement from '@/components/serverRequirements/requirement';
import Head from 'next/head';


export interface IRequirement {
    name: string;
    list?: string[];
}

const requirements: IRequirement[] = [
    { name: "任何Linux操作系統" },
    {
        name: "Apache 或 NGINX Web 服務器",
        list: [
            '支持 AcceptPathInfo',
            '支持多視圖 (或 mod 重寫哪個更慢)'
        ]
    },
    {
        name: "PHP 5.x and 7.x upto 7.3 (mod_php/CGI)",
        list: [
            '支持 GD2 庫',
            '支持 MySQLi',
            '支持捲曲',
            '支持 uploadprogress PHP 擴展（僅當您想在上傳時顯示進度條時）'
        ]
    },
    {
        name: 'PHP CLI 5.x (往上看 + register_argc_argv ON)'
    },
    {
        name: 'FFmpeg (推薦版本 3.0+)'
    },
    {
        name: 'MySQL 5.x',
        list: [
            '推薦配置',
            'interactive_timeout = 1000',
            'connect_timeout = 1000',
            'wait_timeout = 1000'
        ]
    },
    {
        name: ' 推薦的 PHP 配置',
        list: [
            'safe_mode off',
            'open_basedir off',
            'max_execution_time 7200',
            'max_input_time 7200',
            'memory_limit (比最大視頻上傳大小多 1MB)',
            'post_max_size (最大視頻上傳大小)',
            'upload_max_size (最大視頻上傳大小)',
            'exec() 應該被允許'
        ]
    }
]

const ServerRequirements = () => {
    return (
        <>
            <Head>
                <title>AVSCMS | 服務器要求</title>
            </Head>
            <main className='w-full flex flex-col items-center gap-5 page'>
                <h2 className='page-title'>服務器要求</h2>
                <div className='bg-white rounded-2xl md:space-y-8 sm:space-y-6 space-y-4 md:p-8 sm:p-6 p-4  w-full'>
                    <div className=' flex flex-col md:flex-row justify-between w-full'>
                        <div className='space-y-6'>
                            {
                                requirements.slice(0, 5).map((requirement) => (
                                    <ServerRequirement {...requirement} key={requirement.name} />
                                ))
                            }
                        </div>
                        <div className='space-y-6'>
                            {
                                requirements.slice(5).map((requirement) => (
                                    <ServerRequirement {...requirement} key={requirement.name} />
                                ))
                            }
                        </div>
                    </div>
                    <div className='bg-grayish-400 rounded-2xl p-6 flex flex-col items-center gap-2'>
                        <h4 className='lg:text-xl sm:text-lg text-base  text-grayish-100 font-medium'>支持亞馬遜AWS EC2</h4>
                        <p className='max-w-3xl text-center text-grayish-100/80 lg:text-xl sm:text-lg text-base'>
                            不再需要 mencoder、mplayer、flvtool2、mediainfo、mp4box、neroAACencoder 以及舊版 AVS 使用的所有其他服務器模塊。
                        </p>
                    </div>
                </div>
                <HavingTrouble />
            </main>
        </>
    )
}

export default ServerRequirements