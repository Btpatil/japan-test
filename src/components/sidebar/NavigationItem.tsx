import styles from '../../pages/K10.module.css'

type dataType = {
    icon: string;
    name: string;
}

export const NavigationItem = ({ data, hasMenuFilledIcon = true }: { data: dataType, hasMenuFilledIcon?: boolean }) => {
    return (
        <nav className={`${styles.navigationItem} ${data.name === 'メディア一覧' && styles.activeNav}`}>
            <div className={`${styles.iconParent}`}>
                <img
                    className={styles.menufilledIcon}
                    alt=""
                    src={data.icon}
                />
                <div className={styles.div}>{data.name}</div>
            </div>
            {hasMenuFilledIcon &&
                <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="/icon1.svg"
                />
            }
        </nav>
    )
}
