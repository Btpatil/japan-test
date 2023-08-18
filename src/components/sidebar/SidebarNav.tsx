import React from 'react'
import styles from '../../pages/K10.module.css'
import { NavigationItem } from './NavigationItem'
import { advertisers, navigationItems } from '../../constants/constants'
import { Advertiser } from './Advertiser'

type itemType = {
    icon: string,
    name: string
}

export const SidebarNav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.iconbutton}>
                <div className={styles.unstylediconbutton}>
                    <img
                        className={styles.menufilledIcon}
                        alt=""
                        src="/menufilled.svg"
                    />
                </div>
            </div>
            <div className={styles.image1Wrapper}>
                <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
            </div>
            <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                    <div className={styles.frameContainer}>
                        {
                            navigationItems.map((item, index) =>
                            (
                                <NavigationItem key={index} data={item} />
                            )
                            )
                        }
                    </div>

                    <NavigationItem data={{ icon: "/icon9.svg", name: "ログアウト" }} hasMenuFilledIcon={false} />
                </div>
                <div className={styles.parent}>
                    <div className={styles.description}>広告主</div>
                    {advertisers.map((advertiser, index) => (
                        <Advertiser key={index} advertiserInfo={advertiser} />
                    ))}
                </div>
            </div>
        </nav>
    )
}
