// import React from 'react';
// import axios from 'axios';
// import express from 'express';
// import nunjucks from 'nunjucks';

// var app = express();
var client_id = 'wzniimt21VjqBkzW67Dn';
var client_secret = 'WI0uSOppPn';
// replace client id and secret with your owns

app.set('view engine', 'html');

nunjucks.configure('views', {
  express : app,
  watch : true,
})

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get('/', (req, res)=>{
  res.render('main');
});

app.post('/search', async(req, res)=>{
  query = req.body.query;
  // get query input

  var api_url ='https://openapi.naver.com/v1/papago/n2mt'
  var options = {
    headers : {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
  }; // headers for get request
  await axios.post(api_url, options)
  .then((response)=>{
    if(response.status===200){
      items = response.data.items;
      console.log(items)
      // items.map((x)=>{
      //   x.title = x.title.replace(/<b>/g, '');
      //   x.title = x.title.replace(/<\/b>/g, '');
      //   x.description = x.description.replace(/<b>/g, '');
      //   x.description = x.description.replace(/<\/b>/g, '');
      // }); // remove html tags in query result
   
      res.render('result', {items : items});
    }
  })
  .catch((err)=>{
    console.error(err);
  });
});


 app.listen(3000, function () {
   console.log('http://127.0.0.1:3000/search/blog?query=검색어 app listening on port 3000!');
 });

const Translation_function = () => {
  // const express=require('express')
  // const app=express()
  const t_Click=()=>{

    var lan1=document.getElementById('lan1');
    var lan2=document.getElementById('lan2');

    const input_lan=lan1.options[lan1.selectedIndex].value;
    const output_lan=lan2.options[lan2.selectedIndex].value;
    
    var query =document.getElementById('input').value;
    axios.post('/v1/papago/n2mt',
    {
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
        'X-Naver-Client-Id': client_id,
        'X-Naver-Client-Secret': client_secret},
      params :{'source':input_lan,'target':output_lan,'text':query}
    }).then((response) => {
      const {data}=response;
      console.log(data)
    })
    // app.get('/v1',(req,res)=>{

    // })
  }
 
  return (
    <div>
        <p className='Papago'>Papago</p>
        <hr id="line"></hr>
        <div className="box">
            <select name="language" id="lan1">
                <option value="">언어선택</option>
                <option value="ko">한국어</option>
                <option value="en">영어</option>
                <option value="ja">일본어</option>
                <option value="zh-CN">중국어(간체)</option>
                <option value="zh-TW">중국어(번체)</option>
                <option value="es">스페인어</option>
                <option value="fr">프랑스어</option>
                <option value="de">독일어</option>
                <option value="ru">러시아어</option>
                <option value="pt">포르투갈어</option>
                <option value="it">이탈리아어</option>
                <option value="vi">베트남어</option>
                <option value="th">태국어</option>
                <option value="id">인도네시아어</option>
                <option value="hi">힌디어</option>
            </select>
            <div id="input_box">
                <input id='input' type="text"></input>
            </div>
        </div>


        <div className="box">
            <select name="language" id="lan2">
                <option value="">언어선택</option>
                <option value="ko">한국어</option>
                <option value="en">영어</option>
                <option value="ja">일본어</option>
                <option value="zh-CN">중국어(간체)</option>
                <option value="zh-TW">중국어(번체)</option>
                <option value="es">스페인어</option>
                <option value="fr">프랑스어</option>
                <option value="de">독일어</option>
                <option value="ru">러시아어</option>
                <option value="pt">포르투갈어</option>
                <option value="it">이탈리아어</option>
                <option value="vi">베트남어</option>
                <option value="th">태국어</option>
                <option value="id">인도네시아어</option>
                <option value="hi">힌디어</option>
            </select>
            <div id="output"></div>
        </div>
        <button onClick={t_Click}>번역</button>
    </div>
  );
};

export default Translation_function;