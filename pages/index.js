import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import record from "../data/anime.json";
import { useRouter } from "next/router";
import { useState } from "react";
import Music from "../components/music";
import AnimeGif from "../components/animegif";
import useSound from "use-sound";
import Up from "../components/up";

export default function Home() {
  const r = useRouter();
  const [records, setRecords] = useState(record);
  const [searchQuery, setSearchQuery] = useState("");

  const [toc] = useSound("/sounds/baka.mp3");

  const handleClick = (index) => {
    const updatedRecords = [...records];
    updatedRecords[index].color =
      updatedRecords[index].color === "#ff6254" ? "rgb(45, 45, 45)" : "#ff6254";
    setRecords(updatedRecords);
  };

  console.log(record);

  return (
    <>
      <Head>
        <title>Anime App</title>
        <meta name="anime" content="Animes to Watch" />
        <meta property="og:title" content="Assignment #2 - Home Page" />
        <meta property="og:description" content="Anime Recommendations" />
        <link rel="icon" href="/images/anya2.png" />
      </Head>

      <main className={styles.main} id="colouring">
        <span
          className={styles.search}
          onClick={() => {
            r.push("/search");
          }}
          title="Click me to filter!"
        >
          🔍
        </span>
        <Music />
        <div className={styles.header}>
          <img className="gif" src="images/gif2.gif" alt="Anime GIF" />
          <h1 className={styles.header}>Find an Anime to Watch!</h1>
          <img className="gif" src="images/gif.gif" alt="Anime GIF" />
          <input
          className={styles.searchBar}
          type="text"
          placeholder="Search anime..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        </div>
        <Up />
        <AnimeGif />
        {record
          .filter((rec) =>
            rec.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((rec, index) => {
            return (
              <div key={index}>
                {rec.episodes < 300 ? (
                  <a
                    href={`https://www.google.com/search?q=${rec.name}`}
                    target="_blank"
                  >
                    <div
                      className={styles.infoCont}
                      onClick={() => {
                        handleClick(index);
                        {
                          toc("/sounds/baka.mp3");
                        }
                      }}
                    >
                      <div className={styles.name} style={{ color: rec.color }}>
                        {rec.name}
                      </div>
                      <div
                        className={styles.genre}
                        style={{ color: rec.color }}
                      >
                        {rec.genre}
                      </div>
                      <div
                        className={styles.rating}
                        style={{ color: rec.color }}
                      >
                        ★ {rec.rating}
                      </div>
                      <div
                        className={styles.episodes}
                        style={{ color: rec.color }}
                      >
                        Episodes: {rec.episodes}
                      </div>
                    </div>
                  </a>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
      </main>
    </>
  );
}
