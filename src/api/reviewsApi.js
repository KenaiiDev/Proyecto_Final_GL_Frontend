const getReviews = async () => {
  const response = await fetch(`${process.env.API_URL}/reviews`);
  const data = await response.json();

  return data;
};

const createReview = async ({ rating, content, movieId, userId, token }) => {
  const response = await fetch(`${process.env.API_URL}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ rating, content, movieId, userId }),
  });

  const data = await response.json();
  return data;
};

const updateReview = async ({ rating, content, token, reviewId }) => {
  const response = await fetch(`${process.env.API_URL}/reviews/${reviewId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ rating, content }),
  });

  const data = await response.json();
  return data;
};

const deleteReview = async ({ reviewId, token }) => {
  const response = await fetch(`${process.env.API_URL}/reviews/${reviewId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data;
};

const getById = async ({ reviewId }) => {
  const response = await fetch(`${process.env.API_URL}/reviews/${reviewId}`);
  const data = await response.json();

  return data;
};

const getByMovieId = async ({ movieId }) => {
  const response = await fetch(
    `${process.env.API_URL}/reviews/movie/${reviewId}`
  );
  const data = await response.json();

  return data;
};

const getByUserId = async ({ userId }) => {
  const response = await fetch(`${process.env.API_URL}/reviews/user/${userId}`);
  const data = await response.json();

  return data;
};
