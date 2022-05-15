const REST_API_KEY = "9dfa43bbca92f4dc881bedd16e9d8933";
const REDIRECT_URI = "http://localhost:3000/oauth/kakao";
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;