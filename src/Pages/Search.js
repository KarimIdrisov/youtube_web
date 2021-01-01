import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout";
import axios from "axios";
import SearchMain from "../Layout/SearchMain";

export default function Search(props) {
    const [appState, setAppState] = useState(
        {
            loading: false,
            videos: null,
        }
    )

    const key = props.match.params.key

    useEffect(() => {
        setAppState({loading: true})
        const apiUrl = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + key + "&key=AIzaSyD8T_VvpaKtek0kP65Qb3jlAVkg6qLPr2E";
        axios.get(apiUrl).then((resp) => {
            const allVideos = resp.data;
            setAppState({
                loading: false,
                videos: allVideos
            });
        });
    }, [setAppState]);

    if (appState.loading) {
        return (
            <></>
        )
    }
    return (
        <Layout>
            <SearchMain content={appState} key={key}/>
        </Layout>
    );
}
