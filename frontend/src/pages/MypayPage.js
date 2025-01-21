import BasicLayout from "../layouts/BasicLayout";
import "./Page.css"; // CSS 파일 import

// 내지갑페이지
const MypayPage = () => {
  return (
    <BasicLayout>
      <div className="main-container">
        {/* 첫 번째 박스 */}
        <div className="main-box">
          <div className="main-title">내지갑</div>
          <ul className="main-list">
            <li>내페이금액</li>
            <li>빌린돈/빌려준돈</li>
            <li>빌려준사람등등</li>
          </ul>
        </div>
      </div>
    </BasicLayout>
  );
};

export default MypayPage;
