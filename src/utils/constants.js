export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
  };

  export const IMG_URL = "https://lh5.googleusercontent.com/proxy/C2GGjl63F6VEBLlcC0PWl4gSWzixeFqD8obsOJS9NSoMkHZNivA-3YS3WR2eCzqPjA0E7Q1Z4WaBQKNmRAXqHlTYSwEyg8kEmcCgsEbxOOxNE9lI6usKWndgA00-UppNNK-MUwEXugbWKg";

  export const IMG_CDN = "https://image.tmdb.org/t/p/w780";

  export const NETFLIX_LOGO_URL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

  export const BG_IMG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_medium.jpg";

  export const SUPPORTED_LANGUAGE = [
    { identifier: "en", name: "English"},
    { identifier: "hindi", name: "Hindi"},
    { identifier: "spanish", name: "Spanish"},
    { identifier: "bangla", name: "Bengali"},
  ];

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
