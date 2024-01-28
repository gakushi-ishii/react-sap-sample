import { Link } from "react-router-dom";

export const MyPage = () => {
    return (
        <div>
            <h1>Mypage</h1>
            <Link to="/mypage/mypage-detail">link to MyPageDetail</Link>
        </div>
    );
};