import Logo from "../../assets/images/logo.svg"
import styles from "./TopNav.module.css"
import shareIcon from "../../assets/images/ic_share.svg"

const TopNav = () => {
    const APP_DOWNLOAD_LINK = "https://www.shinhansec.com/siw/customer-center/open-accounts/712501/view.do#appDown";
    const onClickShareButton = () => {
        alert("공유하기");
    }
    
    return (
    <div>
        <div className={styles.container}>
            {/* 로고 */}
            <img src={Logo} alt="logo"/>
            <div className={styles.rightButtonContainer}></div>
            {/* 다운로드 버튼 */}
            <a href={APP_DOWNLOAD_LINK} target="_blank">
                <div className={styles.roundButton}>앱 다운로드</div>
            </a>
            
            {/* 공유 버튼 */}
            <div className={styles.circleButton} onClick={onClickShareButton}>
                <img src = {shareIcon} alt="share"/>
            </div>
        </div>
    </div>
    );
};

export default TopNav;