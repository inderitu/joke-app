'use client'

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { Fetch_Jokes } from "./_hooks/fetchJokes";
import { Fetch_Audio } from "./_hooks/fetchAudio";
import useFont from "./_hooks/useFont";
import Navigation from "./_components/Navigation";
import Head from "next/head";

import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';

export default function Home() {
  type Category = "Miscellaneous" | "Programming" | "Pun" | "Spooky" | "Christmas" | "Dark";

  const [jokes, setJokes] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [audioLoading, setAudioLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | string>(false);
  const [category, setCategory] = useState<Category>("Programming");

  const handleFetch = () => {
    Fetch_Jokes(category)
      .then((data) => {
        if (data.error) {
          setError(true);
          setLoading(false);
          throw Error("Error fetching jokes");
        }
        setJokes(data.jokes);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }
  const playAudio = (joke: string) => {
    setAudioLoading(true);
    Fetch_Audio(joke)
      .then((data) => {
        setAudioLoading(false);
        if (data) {
          const url = URL.createObjectURL(data);
          const audio = new Audio(url)
          audio.play()
        }
      })
      .catch((error) => {
        setAudioLoading(false);
        alert("Cannot play audio at the moment. Please try again later.")
      });

  }

  useEffect(() => {
    handleFetch();
  }, [category]);

  return (
    <main style={useFont(category)} className={styles.main}>
      <Head>
        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>

      <Navigation setCategory={setCategory} />
      <div className={styles.jokes_container}>

        <header>
          <h1 className={styles.joke_title}> {category} Jokes </h1>
        </header>

        {loading && <h1 className={styles.loading_msg}> Loading... </h1>}
        {error && <h1 className={styles.error_msg}> Error fetching jokes </h1>}


        {jokes && jokes.map((joke, index) => (
          <div key={index} className={styles.joke_card}>


            {joke.type === "single" ? (
              <div className={styles.single_joke && styles.joke}>
                <h1> Single: <span>{joke.joke} </span> </h1>
                <div className={styles.play_btn} onClick={() => playAudio(joke.joke)}>
                  {audioLoading && <div className={styles.loader}></div>}
                  {!audioLoading && <PlayCircleOutlineRoundedIcon />}
                </div>
              </div>
            ) : (
              <div className={styles.twopart_joke && styles.joke}>
                <div className={styles.setup && styles.joke}>
                  <h1>Setup : <span>{joke.setup}</span> </h1>
                </div>
                <div className={styles.delivery && styles.joke}>
                  <h1>Delivery: <span>{joke.delivery}</span> </h1>
                </div>
                <div className={styles.play_btn} onClick={() => playAudio(`${joke.setup}, ${joke.delivery}`)}>
                  {audioLoading && <div className={styles.loader}></div>}
                  {!audioLoading && <PlayCircleOutlineRoundedIcon />}
                </div>
              </div>)}
          </div>

        ))}
        <div className={styles.refresh} onClick={() => handleFetch()} >
          <p>Refresh</p>
        </div>
      </div>
    </main>
  );
}
