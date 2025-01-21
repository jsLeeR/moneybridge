import BasicLayout from "../layouts/BasicLayout";
import "./Page.css"; // CSS 파일 import
// 대행서비스페이지
const DebtCollection = () => {
  return (
    <BasicLayout>
      <div className="main-container">
        {/* 첫 번째 박스 */}
        <div className="main-box">
          <div className="main-title">추심신청서비스</div>
          <ul className="main-list">
            <li>내글</li>
            <li>추심신청ㄱ?</li>
          </ul>
        </div>
      </div>
    </BasicLayout>
  );
};

export default DebtCollection;
