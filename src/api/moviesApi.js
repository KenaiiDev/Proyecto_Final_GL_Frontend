const getMovies = async (page = 0) => {

  const response = await fetch(`${process.env.API_URL}/movies${page > 0 ? `/${page}` : ""}`);
  const data = await response.json();

  if (data.success) {
    const moviesWithImages = data.data.results.map((movie) => {
      const backdropUrl = `${process.env.TMDB_IMAGE_URL}/w500${movie.backdrop_path}`;
      const posterUrl = `${process.env.TMDB_IMAGE_URL}/w500${movie.poster_path}`;
      return { ...movie, backdrop_path: backdropUrl, poster_path: posterUrl };
    });

    data.data.results = moviesWithImages;
  }
  return data;
};

const getMovieById = async (id) => {
  const response = await fetch(`${process.env.API_URL}/movie/${id}`);
  const data = await response.json();

  if (data.success) {
    const backdropUrl = `${process.env.TMDB_IMAGE_URL}/w500${data.backdrop_path}`;
    const posterUrl = `${process.env.TMDB_IMAGE_URL}/w500${data.poster_path}`;
    data.backdrop_path = backdropUrl;
    data.poster_path = posterUrl;
  }
  return data;
};

const getGenres = async () => {
  const response = await fetch(`${process.env.API_URL}/genres`);
  const data = await response.json();
  return data;
};

const searchMovie = async (param) => {
  const response = await fetch(
    `${process.env.API_URL}/movies/search?title="${param}"`
  );
  const data = await response.json();

  if (data.success) {
    const moviesWithImages = data.data.results.map((movie) => {
      const backdropUrl = `${process.env.TMDB_IMAGE_URL}/w500${movie.backdrop_path}`;
      const posterUrl = `${process.env.TMDB_IMAGE_URL}/w500${movie.poster_path}`;
      return { ...movie, backdrop_path: backdropUrl, poster_path: posterUrl };
    });
    data.data.results = moviesWithImages;
  }

  return data;
};

const getMoviesByGenre = async (genre) => {
  const response = await fetch(
    `${process.env.API_URL}/movies/genres?genres="${genre}"`
  );
  const data = await response.json();

  if (data.success) {
    const moviesWithImages = data.data.results.map((movie) => {
      const backdropUrl = `${process.env.TMDB_IMAGE_URL}/w500${movie.backdrop_path}`;
      const posterUrl = `${process.env.TMDB_IMAGE_URL}/w500${movie.poster_path}`;
      return { ...movie, backdrop_path: backdropUrl, poster_path: posterUrl };
    });
    data.data.results = moviesWithImages;
  }
  return data;
};

const toggleWatchList = async ({ movieId, userId, token }) => {
  const response = await fetch(
    `${process.env.API_URL}/movie/add/watchlist/${userId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ movieId }),
    }
  );

  const data = await response.json();
  return data;
};

const toggleWatchLater = async ({ movieId, userId, token }) => {
  const response = await fetch(
    `${process.env.API_URL}/movie/add/watchlater/${userId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ movieId }),
    }
  );

  const data = await response.json();
  return data;
};

export {
  getMovies,
  getMovieById,
  getGenres,
  searchMovie,
  getMoviesByGenre,
  toggleWatchList,
  toggleWatchLater,
};
