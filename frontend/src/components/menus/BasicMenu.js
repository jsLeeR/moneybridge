import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { FaSearch } from "react-icons/fa"; // 아이콘 추가
import "./BasicMenu.css"; // 일반 CSS import

const BasicMenu = () => {
  return (
    <nav id="navbar" className="navbar">
      {/* 상단 바 */}
      <div className="nav-container">
        <div className="nav-header">
          {/* 로고 */}
          <div className="nav-logo">
            <Link to={"/"}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          {/* 로그인/로그아웃 */}
          <div className="nav-login">
            <Link to={"/member/login"}>Login</Link>
          </div>
        </div>
      </div>

      {/* 서치바 */}
      <div className="search-bar">
        <form>
          <input type="text" placeholder="검색어를 입력해주세요" />
          <button>
            <FaSearch />
          </button>
        </form>
      </div>

      {/* 하단 메뉴바 */}
      <ul className="menu-bar">
        <li>
          <Link to={"/mypay"}>내지갑</Link>
        </li>
        <li>
          <Link to={"/loan"}>빌려드려요</Link>
        </li>
        <li>
          <Link to={"/debtCollection"}>대행서비스</Link>
        </li>
        <li>
          <Link to={"/qna"}>QnA</Link>
        </li>
      </ul>
    </nav>
  );
};

export default BasicMenu;
