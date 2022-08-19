const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
// dotenv
require("dotenv").config();
// CORS
const cors = require("cors");

// axios
const axios = require("axios");

// body-parser
app.use(express.json()); 
app.use(express.urlencoded( {extended : true } ));

// CORS 허용
let corsOptions = {
  origin: 'https://openapi.naver.com',
  credentials: true
}
app.use(cors(corsOptions));

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

// API 데이터 가져오기
app.get('/api/search', (req, res) => {
  // 클라이언트에서 보낸 검색어
  const searchKeyword = req.query.query;

  axios.get('https://openapi.naver.com/v1/papago/n2mt', 
  {
	params: {
       query: searchKeyword,
       display: 100 // 검색 결과 노출 개수
  	},
    headers: {
      'X-Naver-Client-Id': CLIENT_ID, 
      'X-Naver-Client-Secret': CLIENT_SECRET
    }
  }).then((response) => {
    const { data } = response;
    // 클라이언트에 보내기
    res.send(data.items);
  }).catch((error) => {
    let message = 'Unknown Error'
    if (error instanceof Error) message = error.message
    console.log(message);
  })
})