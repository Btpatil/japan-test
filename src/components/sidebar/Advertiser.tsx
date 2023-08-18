import styles from '../../pages/K10.module.css'

type advertiserInfoType = {
    icon: string;
    name: string;
}

export const Advertiser = ({advertiserInfo}:{advertiserInfo: advertiserInfoType}) => {
    return (
        <div className={styles.frameParent1}>
            <div className={styles.groupWrapper}>
                <div className={styles.ellipseParent}>
                    <div className={styles.groupChild} />
                    <img
                        className={styles.image1Icon1}
                        alt=""
                        src={advertiserInfo.icon}
                    />
                </div>
            </div>
            <div className={styles.koukokunushi}>{advertiserInfo.name}</div>
        </div>
    )
}
