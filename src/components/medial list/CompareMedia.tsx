import { ReactNode } from "react";
import styles from "../../pages/K10.module.css";

const AlertInfo = () => {
    return (
        <div className={styles.frameParent27}>
            <div className={styles.localOfferParent}>
                <img
                    className={styles.localOfferIcon}
                    alt=""
                    src="/local-offer.svg"
                />
                <div className={styles.div15}>
                    シーズン限定メニュー
                </div>
            </div>
            <div className={styles.descriptionWrapper2}>
                <div className={styles.description10}>
                    直前割引情報があります！
                </div>
            </div>
        </div>
    )
}

const ChipButton = ({ active = false, value }: { active?: boolean, value: string }) => {
    return (
        <>
            <button className={`${active ? styles.chips1InputbTextOnlyA9 : styles.chips1InputbTextOnlyA10}`}>
                <label className={styles.label}>
                    <div className={`${active ? styles.label22 : styles.label24}`}>{value}</div>
                </label>
            </button>
        </>
    )
}

const Description = ({ data }: { data: string | ReactNode }) => {
    return (
        <div className={styles.descriptionWrapper}>
            <div className={styles.description6}>
                {data}
            </div>
        </div>
    )
}

const MediaCardTableInfo = ({ fieldName, children }: { fieldName: string, children: ReactNode }) => {
    return (
        <div className={styles.parent1}>
            <div className={styles.div11}>{fieldName}</div>
            {children}
        </div>
    )
}

const MediaCard = ({ hasAlertInfoBox, hasReleaseDateCard }: { hasAlertInfoBox: boolean, hasReleaseDateCard: boolean }) => {
    return (
        <div className={styles.frameParent14}>
            <div className={styles.frame2}>
                <div className={styles.content6}>
                    <img
                        className={styles.maskedIcon1}
                        alt=""
                        src="/masked-icon1.svg"
                    />
                    <img
                        className={styles.menufilledIcon}
                        alt=""
                        src="/icon11.svg"
                    />
                    <div className={styles.button8}>比較</div>
                </div>
            </div>
            <div className={styles.frameParent15}>
                <div className={styles.frameParent16}>
                    <div className={styles.frameParent17}>
                        <div className={styles.frameParent18}>
                            <img
                                className={styles.frameChild}
                                alt=""
                                src="/frame-366@2x.png"
                            />
                            <div className={styles.div10}>主なユーザー属性</div>
                            <div className={styles.frameParent19}>
                                <div className={styles.frameParent20}>
                                    <div className={styles.rectangleWrapper}>
                                        <div className={styles.frameItem} />
                                    </div>
                                    <div className={styles.frame3}>
                                        <div className={styles.content}>
                                            <div className={styles.frameInner} />
                                            <div className={styles.description}>
                                                男性 : 00%
                                            </div>
                                        </div>
                                        <div className={styles.content}>
                                            <div className={styles.rectangleDiv} />
                                            <div className={styles.description}>
                                                女性 : 00%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.frameContainer}>
                                    <div className={styles.frameParent22}>
                                        <section>
                                            <div className={styles.frameChild1} />
                                        </section>
                                        <div className={styles.frameChild2} />
                                    </div>
                                    <div className={styles.frameParent23}>
                                        <div className={styles.rectangleContainer}>
                                            <div className={styles.frameChild3} />
                                            <div className={styles.description}>
                                                30代 男性 : 00%
                                            </div>
                                        </div>
                                        <div className={styles.rectangleContainer}>
                                            <div className={styles.frameChild4} />
                                            <div className={styles.description}>
                                                20代 男性 : 00%
                                            </div>
                                        </div>
                                        <div className={styles.rectangleContainer}>
                                            <div className={styles.frameChild5} />
                                            <div className={styles.description}>
                                                30代 女性 : 00%
                                            </div>
                                        </div>
                                        <div className={styles.rectangleParent3}>
                                            <div className={styles.frameChild6} />
                                            <div className={styles.description}>
                                                その他 : 00%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.frameParent24}>
                            <div className={styles.choiceChipbActiveParent}>
                                <div className={styles.choiceChipbActive}>
                                    <div className={styles.avatar}>
                                        <img
                                            className={styles.maskedicon}
                                            alt=""
                                            src="/avatar9.svg"
                                        />
                                    </div>
                                    <div className={styles.label8}>
                                        <div className={styles.label20}>ライフスタイル</div>
                                    </div>
                                    <div className={styles.icon18}>
                                        <img
                                            className={styles.icon19}
                                            alt=""
                                            src="/-icon1.svg"
                                        />
                                    </div>
                                </div>
                                <b className={styles.title}>MediaTitleMediaTitle</b>
                            </div>
                            <div className={styles.frameParent25}>
                                <div className={styles.frameParent26}>
                                    <MediaCardTableInfo fieldName="対応ファネル" >
                                        <Description data={"概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト"} />
                                    </MediaCardTableInfo>
                                    <div className={styles.top3Group}>
                                        <div className={styles.div11}>対応ファネル</div>
                                        <div
                                            className={styles.chips1InputbTextOnlyAContainer}
                                        >
                                            <ChipButton active={true} value="hsdh" />
                                            <ChipButton value="興味" />
                                            <ChipButton value="理解" />
                                            <ChipButton active={true} value="リピート" />
                                            <ChipButton value="リピート" />
                                            <ChipButton value="推奨" />
                                        </div>
                                    </div>

                                    <MediaCardTableInfo fieldName="広告主の業種/商材Top3" >
                                        <Description data={
                                            <><p className={styles.p}>1.食品・飲料 00%</p>
                                                <p className={styles.p}>
                                                    2.家庭用品・トイレタリー 00%
                                                </p>
                                                <p className={styles.p}>3.化粧品 00%</p></>
                                        } />
                                    </MediaCardTableInfo>

                                    <MediaCardTableInfo fieldName="メディア種別" >
                                        <Description data={"ポータルメディア"} />
                                    </MediaCardTableInfo>

                                    <MediaCardTableInfo fieldName="閲覧/視聴/読者ターゲット" >
                                        <Description data={"女性 , 社会人"} />
                                    </MediaCardTableInfo>
                                </div>
                                {
                                    hasAlertInfoBox && <AlertInfo />
                                }
                            </div>
                        </div>
                    </div>
                    {
                        hasReleaseDateCard &&
                        <div className={styles.imageParent}>
                            <img
                                className={styles.imageIcon}
                                alt=""
                                src="/image@2x.png"
                            />
                            <div className={styles.frame4}>
                                <div className={styles.div16}>公開日 : 2022/12/20</div>
                                <b className={styles.title1}>
                                    記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル
                                </b>
                            </div>
                        </div>
                    }

                </div>
                <div className={styles.unstyledbuttonParent}>
                    <button className={styles.unstyledbutton8}>
                        <img
                            className={styles.menufilledIcon}
                            alt=""
                            src="/icon12.svg"
                        />
                        <div className={styles.button5}>お気に入り</div>
                        <div className={styles.unstyledbuttonChild} />
                        <div className={styles.button5}>10</div>
                    </button>
                    <button className={styles.buttonoutlined8}>
                        <div className={styles.unstyledbutton5}>
                            <div className={styles.button6}>お問い合わせ</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export const CompareMedia = () => {
    return (
        <div className={styles.frameParent13} style={{marginBottom: '20px'}}>
            <MediaCard hasAlertInfoBox={true} hasReleaseDateCard={true} />
            <MediaCard hasAlertInfoBox={false} hasReleaseDateCard={false} />
        </div>
    )
}
