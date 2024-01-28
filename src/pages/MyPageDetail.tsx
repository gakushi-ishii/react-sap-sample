import { useLocation, useParams } from "react-router";

type Params = {
    id?: string;
};

export const MyPageDetail = () => {
    const { id } = useParams<Params>();
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const name = queryParams.get("name");
    const age = queryParams.get("age");

    return (
        <>
            <h1>MyPageDetail</h1>
            <h2>idは{id}</h2>
            <h2>nameは{name}</h2>
            <h2>ageは{age}</h2>
        </>
    );
};