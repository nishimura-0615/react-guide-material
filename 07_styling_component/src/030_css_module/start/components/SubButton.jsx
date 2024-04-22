import styles from "./SubButton.module.css";

const SubButton = () => {
    // あまりCSSmoduleはclassを定義するものではない
    return <button id={styles.idAttr} className={styles.btn}>サブボタン</button>
}
export default SubButton;
