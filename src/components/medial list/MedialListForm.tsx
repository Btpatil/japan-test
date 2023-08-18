import { ReactNode } from "react";
import styles from "../../pages/K10.module.css";
import { compatibleFuneel, targetTypeData } from "../../constants/constants";
import { MenuItem, TextField } from "@mui/material";
import { relative } from "path";

const RowFieldName = ({ fieldName }: { fieldName: string }) => {
    return (
        <div className={styles.wrapper}>
            <b className={styles.b2}>{fieldName}</b>
        </div>
    )
}

const OutlinedButtonContainer = ({ textValue }: { textValue: string }) => {
    return (
        <div className={styles.buttonoutlinedWrapper}>
            <button className={styles.buttonoutlined}>
                <div className={styles.unstyledbutton}>
                    <div className={styles.content}>
                        <img
                            className={styles.maskedicon}
                            alt=""
                            src="/maskedicon.svg" />
                        <div className={styles.button}>{textValue}</div>
                    </div>
                </div>
            </button>
        </div>
    )
}

const ChipsContainer = ({ chips }: { chips: string[] }) => {
    return (
        <div className={styles.chips1InputbTextOnlyAParent}>
            {chips.map((chip, i) => (
                <ChipButton key={i} text={chip} />
            ))}
        </div>
    )
}

const ChipButton = ({ text }: { text: string }) => {
    return (
        <button className={styles.chips1InputbTextOnlyA}>
            <label className={styles.label}>
                <div className={styles.label1}>{text}</div>
            </label>
        </button>
    )
}

const FormRow = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.frameParent5}>
            {children}
        </div>
    )
}

export const MedialListForm = () => {
    return (
        <form className={styles.frameForm}>
            <div className={styles.frameParent3}>
                <div className={styles.frameParent5}>
                    <RowFieldName fieldName="ジャンル" />
                    <OutlinedButtonContainer textValue="ターゲットを選ぶ" />
                </div>
                <div className={styles.frameParent5}>
                    <RowFieldName fieldName="メディア種別" />
                    <OutlinedButtonContainer textValue="メディア種別を選ぶ" />
                </div>
                <div className={styles.frameParent5}>
                    <RowFieldName fieldName="対応ファネル" />
                    <ChipsContainer chips={compatibleFuneel} />
                </div>
                <div className={styles.frameParent5}>
                    <RowFieldName fieldName="ターゲット" />
                    <OutlinedButtonContainer textValue="ターゲットを選ぶ" />
                </div>
                <div className={styles.frameParent5}>
                    <RowFieldName fieldName="ターゲット" />
                    <ChipsContainer chips={targetTypeData} />
                </div>
                <div className={styles.frameParent5}>
                    <RowFieldName fieldName="デモグラ" />
                    <OutlinedButtonContainer textValue="デモグラを選ぶ" />
                </div>
                <div className={styles.frameParent5}>
                    <RowFieldName fieldName="主要広告主の業種" />
                    <OutlinedButtonContainer textValue="主要広告主の業種/商材を選ぶ" />
                </div>
                <div className={styles.frameParent5}>
                    <RowFieldName fieldName="下限費用感" />
                    <div className={styles.frameWrapper}>
                        <div style={{ position: 'relative' }}>
                            <TextField
                                label="選択してください"
                                variant="outlined"
                                size="small"
                                sx={{
                                    width: 336
                                }}
                            />
                            <div className={styles.arrowdropdownfilled}>
                                <img
                                    className={styles.vectorIcon1}
                                    alt=""
                                    src="/vector1.svg"
                                />
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles.frameWrapper}> */}
                    {/* <div className={styles.textFieldoutlinedParent}> */}
                    {/* <div className={styles.textFieldoutlined}> */}
                    {/* <div className={styles.input}>
                                    <div className={styles.container1}>
                                        <div className={styles.label18}>選択してください</div>
                                    </div>
                                </div> */}
                    {/* </div> */}
                    {/* <div className={styles.arrowdropdownfilled}>
                        <img
                            className={styles.vectorIcon1}
                            alt=""
                            src="/vector1.svg"
                        />
                    </div> */}
                    {/* </div> */}
                    {/* </div> */}
                </div>
                <div className={styles.frameParent12}>
                    <RowFieldName fieldName="フリーワード" />
                    <div className={styles.frameWrapper}>
                        <div className={styles.textFieldoutlined1}>
                            <TextField
                                label="キーワードを入力"
                                variant="outlined"
                                size="small"
                                sx={{
                                    width: 336
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.frame1}>
                <button className={styles.buttonoutlined5}>
                    <div className={styles.unstyledbutton5}>
                        <div className={styles.button5}>検索条件をクリア</div>
                    </div>
                </button>
                <button className={styles.buttonoutlined6}>
                    <div className={styles.unstyledbutton5}>
                        <div className={styles.button6}>検索する</div>
                    </div>
                </button>
            </div>
        </form>
    )
}
