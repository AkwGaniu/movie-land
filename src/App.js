/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";

import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

export const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState([]);
	const API_URL = "http://www.omdbapi.com?apikey=da07841";

	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();
		setMovies(data.Search);
	};

	useEffect(() => {
		searchMovies("shrek");
	}, []);
	return (
		<div className="app">
			<h1>Movie Land</h1>

			<div className="search">
				<input
					placeholder="Search for movies"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<img
					src={searchIcon}
					alt="Search"
					onClick={() => searchMovies(searchTerm)}
				/>
			</div>

			{movies?.length ? (
				<div className="container">
					{movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
					))}
				</div>
			) : (
				<div className="empty">
					<h2> No movies found </h2>
				</div>
			)}
		</div>
	);
};
