import React from 'react';

function Translation  () {
    
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
            <button type="button" className="btn">번역</button>
        </div>
    );
};

export default Translation;