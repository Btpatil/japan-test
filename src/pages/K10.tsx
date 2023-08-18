// import { FunctionComponent } from "react";
// import React from "react";
import styles from "./K10.module.css";
import { SidebarNav } from "../components/sidebar/SidebarNav";
import { MedialListForm } from "../components/medial list/MedialListForm";
import { CompareMedia } from "../components/medial list/CompareMedia";
function HomePage() {
  return (
    <div className={styles.K10}>
      <SidebarNav />
      <div className={styles.headingParent}>
        <div className={styles.heading}>
          <b className={styles.b1}>メディア一覧</b>
        </div>
        <div className={styles.frameParent2}>
          <MedialListForm />
          <div className={styles.group}>
            <div className={styles.div9}>絞り込み検索</div>
            <img className={styles.menufilledIcon} alt="" src="/japan-test/icon10.svg" />
          </div>
          <button className={styles.buttonoutlined7}>
            <div className={styles.unstyledbutton5}>
              <button className={styles.content5}>
                <div className={styles.button6}>メディアを比較</div>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src="/japan-test/masked-icon.svg"
                />
              </button>
            </div>
          </button>
          <CompareMedia />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
