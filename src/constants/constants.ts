type NavigationItemsType = {
    icon : string
    name: string
}[]

export const navigationItems: NavigationItemsType = [
    {
        icon: '/japan-test/icon.svg',
        name: "ホーム",
    },
    {
        icon: "/japan-test/icon2.svg",
        name: "登録情報",
    },
    {
        icon: "/japan-test/icon3.svg",
        name: "与件一覧",
    },
    {
        icon: "/japan-test/icon4.svg",
        name: "担当者一覧",
    },
    {
        icon: "/japan-test/icon5.svg",
        name: "商談管理",
    },
    {
        icon: "/japan-test/icon6.svg",
        name: "メディア一覧",
    },
    {
        icon: "/japan-test/icon7.svg",
        name: "お気に入りメディア",
    },
    {
        icon: "/japan-test/icon8.svg",
        name: "お知らせ",
    },
]




type AdvertisersType = {
    icon : string
    name: string
}[]

export const advertisers:AdvertisersType = [{
    icon: "/japan-test/image-11@2x.png",
    name: "株式会社KOUKOKUNUSHI"
}]


// 対応ファネル
// compatible funnel data
export const compatibleFuneel:string[] = ["認知", '興味', '理解', '購買 / 来店促進', 'リピート', '推奨']


// ターゲット
// target type
export const targetTypeData: string[] = ['toC', 'toB', '両方']