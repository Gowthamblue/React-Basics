import React, { useState } from "react";
import MovieCards from "./MovieCards";

function Home() {
    const [movies, setMovies] = useState([
        {
            name: "Master",
            rate: "10.0",
            link: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRswG6NZHowsW-JNXViNEDWtLlhbU2hezeURZYUP-h_Azckt1z5pLLBcua_SPRUXLCzuDs6Yw"
        },
        {
            name: "Leo",
            rate: "10.0",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOq-M9eJ3LQzxYVfRsyjN5JaOgI1cQEJTCVzZh3cVo_ov4rQkAVPH8_7foSx5MYOtR2eM&usqp=CAU"
        },
        {
            name: "GOAT",
            rate: "10.0",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRipTGRaK86PV59fapOkLygK43WxuJZYpAfkQ&s"
        }
    ]);

    const addMovie = () => {
        const newMovie = {
            name: "GOAT",
            rate: "10.0",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRipTGRaK86PV59fapOkLygK43WxuJZYpAfkQ&s"
        };
        setMovies([...movies, newMovie]); // adds the new movie to the existing list
    };

    return (
        <>
            <h1 className="text-center my-4 mb-5">🎥 Movie Card Gallery</h1>
            <h3 className="text-center">
                <button className="btn btn-info" onClick={addMovie}>
                    Add
                </button>
            </h3>

            <div className="container">
                <div className="row">
                    {movies.map((movie, index) => (
                        <MovieCards
                            key={index}
                            name={movie.name}
                            rate={movie.rate}
                            image={movie.link}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
