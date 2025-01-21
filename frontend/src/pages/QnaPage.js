import BasicLayout from "../layouts/BasicLayout";
import "./Page.css"; // CSS 파일 import
// QNA페이지
const QnaPage = () => {
  return (
    <BasicLayout>
      <div className="main-container">
        {/* 첫 번째 박스 */}
        <div className="main-box">
          <div className="main-title">내정보</div>
          <ul className="main-list">
            <li>내등급</li>
            <li>페이금액</li>
            <li>대출/변제금액</li>
          </ul>
        </div>
      </div>
    </BasicLayout>
  );
};

export default QnaPage;
