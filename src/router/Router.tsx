import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { MyPage } from "../pages/MyPage";
import { MyPageDetail } from "../pages/MyPageDetail";

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route
                path="/mypage"
                render={(props) => {
                    const url = props.match.url;
                    console.log(props)
                    return (
                        <Switch>
                            <Route exact path={url} render={() => <MyPage />} />
                            <Route path={`${url}/mypage-detail`} render={() => <MyPageDetail />} />
                        </Switch>
                    );
                }}
            />
        </Switch>
    );
};