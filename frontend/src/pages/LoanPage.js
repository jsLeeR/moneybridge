import BasicLayout from "../layouts/BasicLayout";
import "./Page.css"; // CSS 파일 import

const LoanPage = () => {
  return (
    <BasicLayout>
      <div className="main-container">
        {/* 첫 번째 박스 */}
        <div className="main-box">
          <div className="main-title">빌려드려요</div>
          <ul className="main-list">
            <li>글목록</li>
            <li>게시글</li>
          </ul>
        </div>
      </div>
    </BasicLayout>
  );
};

export default LoanPage;
