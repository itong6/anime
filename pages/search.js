import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import record from "../data/anime.json";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Music from "../components/music";
import useSound from "use-sound";
import Up from "../components/up";
import Lottie from "lottie-react";
import LoadingAnimation from "../public/loading.json";

const genreColors = {
  Action: "#470000",
  Drama: "#6b3801",
  Romance: "#4f023f",
  Shounen: "#093300",
  Fantasy: '#27013b',
  Comedy: '#014d6b',
  Sports: '#01676b',
  Historical: '#4f6b01',
  Supernatural: '#1f016b',
  Adventure: '#6b5201',
};

export default function Home() {
  const r = useRouter()

  const [selectedGenre, setSelectedGenre] = useState(null);
  const [records, setRecords] = useState(record)

  const [baka] = useSound("/sounds/baka2.mp3")
  const [waku] = useSound("/sounds/waku.mp3")
  const [dudu] = useSound("/sounds/dudu.mp3")
  const [eren] = useSound("/sounds/eren.mp3")
  const [oni] = useSound("/sounds/oni.mp3")
  const [dbz] = useSound("/sounds/dbz.mp3")
  const [oya] = useSound("/sounds/oya.mp3")
  const [ora] = useSound("/sounds/ora.mp3")
  const [aot] = useSound("/sounds/aot.mp3")
  const [kira] = useSound("/sounds/kira.mp3")
  const [levi] = useSound("/sounds/levi.mp3")

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

    //LOADING PAGE
    if (loading) {
      return (
        <div className={styles.loadingCont}>
          <Lottie
            className={styles.loader}
            style={{ width: 400, height: 400 }}
            animationData={LoadingAnimation}
            loop={true}
          />
          <img className={styles.loadingSplash} src="../placeholder.jpg" />
        </div>
      );
    }


  return (
    <>
      <Head>
        <title>Anime App</title>
        <meta name="anime" content="Animes to Watch" />
        <meta property="og:title" content="Assignment #2 - Filter Page" />
        <meta
          property="og:description"
          content="Anime Recommendations"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={styles.searchMain}
        style={{
          backgroundColor: selectedGenre ? genreColors[selectedGenre] : "#495e5c",
        }}
      >
      <Music />
      <Up />
        <a className={styles.back} onClick={()=> {r.push('/')}}>⬅</a>
        <h2>Pick a Genre to Watch!</h2>
        <div className={styles.genreButtons}>
          <button className={styles.drama} onClick={() =>  { setSelectedGenre("Drama") 
          {dudu("/sounds/dudu.mp3")}
          }}>Drama</button>
          <button className={styles.action} onClick={() => { setSelectedGenre("Action")
          {eren("/sounds/eren.mp3")}
          }}>Action</button>
          <button className={styles.romance} onClick={() => { setSelectedGenre("Romance")
                    {oni("/sounds/oni.mp3")}
          }}>Romance</button>
          <button className={styles.shounen} onClick={() => { setSelectedGenre("Shounen")
                              {dbz("/sounds/dbz.mp3")}
          }}>Shounen</button>
          <button className={styles.fantasy} onClick={() => { setSelectedGenre("Fantasy")
                              {levi("/sounds/levi.mp3")}
          }}>Fantasy</button>
          <button className={styles.comedy} onClick={() => { setSelectedGenre("Comedy")
                    {waku("/sounds/waku.mp3")}
          }}>Comedy</button>
          <button className={styles.sports} onClick={() => { setSelectedGenre("Sports")
                              {oya("/sounds/oya.mp3")}
          }}>Sports</button>
          <button className={styles.history} onClick={() => { setSelectedGenre("Historical")
                              {ora("/sounds/ora.mp3")}
          }}>Historical</button>
          <button className={styles.supernatural} onClick={() => { setSelectedGenre("Supernatural")
                              {kira("/sounds/kira.mp3")}
          }}>Supernatural</button>
          <button className={styles.adventure} onClick={() => { setSelectedGenre("Adventure")
                              {aot("/sounds/aot.mp3")}
          }}>Adventure</button>
        </div>
        {selectedGenre ? (
          record
          .filter((rec) => rec.genre.includes(selectedGenre))
            .map((rec, index) => {
              return ( 
                <a href={`https://www.google.com/search?q=${rec.name}`} target="_blank">
                <div key={index} className={styles.cont} onClick={() => {baka("/sounds/baka2.mp3")}}>
                    <div className={styles.name} style={{color: rec.color}}>{rec.name}</div>
                    <div className={styles.genre} style={{color: rec.color}}>{rec.genre}</div>
                    <div className={styles.rating} style={{color: rec.color}}>★ {rec.rating}</div>
                    <div className={styles.episodes} style={{color: rec.color}}>Episodes: {rec.episodes}</div>
                </div>
                </a>
              );
            })
        ) : (
          <></>
        )}
      </main>
    </>
  );
}
