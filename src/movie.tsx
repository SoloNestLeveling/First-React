import React, { useEffect, useState } from "react";
import styles from "./movie.module.css";

const Movie = () => {

    const [movies, setMovies] = useState<any[]>([]);


    const movieApi = async () => {

        const movieJson = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json();

        setMovies(movieJson.data.movies);
    };


    useEffect(
        () => {
            movieApi()
        }, []
    )


    return (
        <header>
            <div className={styles.headerBg}>
                <img src={require('./인사이드.png')} />
                <div className={styles.imgFilter}></div>
                <div className={styles.outside}>
                    <img src={require('./인사이드아웃2.webp')} />
                    <div className={styles.outsideContent}>
                        <h2>인사이드아웃2</h2>
                        <p className={styles.outsideP1}>2024•96분•애니메이션,코미디,가족•월트 디즈니 픽처스•전체관람</p>
                        <p className={styles.outsideP2}> 낯선 감정인 ‘불안’, ‘당황’, ‘따분’, ‘부럽’이가 본부에 등장하고,
                            언제나 최악의 상황을 대비하며 제멋대로인 ‘불안’이와 기존 감정들은 계속 충돌한다.
                            결국 새로운 감정들에 의해 본부에서 쫓겨나게 된 기존 감정들은
                            다시 본부로 돌아가기 위해 위험천만한 모험을 시작하는데…</p>
                    </div>
                </div>

            </div>

            <div className={styles.movieList} >
                {movies.map((a, i) => <MovieList key={i} image={a.large_cover_image} title={a.title} year={a.year} summary={a.summary} />)}

            </div>
        </header>
    )
};


export interface MovieInfo {
    image: string;
    title: string;
    year: number;
    summary: string;

}

const MovieList: React.FC<MovieInfo> = ({ image, title, year, summary }) => {



    return (
        <div className={styles.gridBg}>
            <div className={styles.main}>
                <div className={styles.cardContainer}>
                    <img className={styles.imageFront} src={image} />
                    <div className={styles.contentBack}>
                        <h1>{title}</h1>
                        <h3>{year}</h3>
                        <p>{summary}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie;