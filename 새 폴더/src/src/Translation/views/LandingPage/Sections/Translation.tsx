import { useEffect, useState } from "react";
// axios import!
import axios from "axios";
// import SearchResult from "./SearchResult";
// import Ranking from "./Ranking";

const Search = (): JSX.Element => {
  // API로 받아온 데이터를 담을 State
  const [Movies, setMovies] = useState([]);
  // 검색 Input value 값을 담을 State
  const [Value, setValue] = useState("");
  // Loader 관리
  const [Loading, setLoading] = useState(false);

  // API로 데이터를 받아오는 함수
  const fetchData = async () => {
    // 검색어
    const searchKeyword = Value;
    const $resultTitle = document.querySelector('.result-title') as HTMLElement


    // 데이터 불러오는 중에 Loader 띄우기
    setLoading(true);
    
    $resultTitle.innerHTML = "";

    try {
      if (searchKeyword === "") {
        // 검색창이 비었을 때 초기화
        setMovies([]);
        setValue("");
      } else {
        // '/api/search'로 서버에 요청
        const { data } = await axios.get('/api/search', 
      		{
              params: {
                query: searchKeyword // 검색어를 파라미터로 보냄
         	}
        })
        
        // 서버에서 보낸 데이터 담기
        setMovies(data);
      }
    } catch (error) {
      let message = 'Unknown Error'
      if (error instanceof Error) message = error.message
      alert(message);
    }
    
    // Loader 없애기
    setLoading(false);
  }

  // "...."의 검색 결과 띄우기
  const resultTitle = () => {
    const $resultTitle = document.querySelector('.result-title') as HTMLElement
    $resultTitle.innerHTML = `"${Value}"의 검색 결과`
  }

  // 검색 input 입력 인식해 value 값을 state에 담기
  const keywordChange = (e: {preventDefault: () => void; target: { value: string };}) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  // 검색어 입력 후 버튼을 눌러 제출했을 때 데이터 가져오는 함수 실행
  const submitKeyword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    fetchData();
    console.log("제출!");
  };

  // 마운트 시 데이터 초기화 위해 실행
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="search">
      <div>
        // 랭킹
        <Ranking />
        <div className="search-cont">
          // 검색 입력 폼 영역
          <div className="search-form">
            <form>
              <label htmlFor="name" className="form__label">
                <input
                  type="text"
                  id="movie-title"
                  className="form__input"
                  name="movie_title"
                  placeholder="영화 제목을 입력해주세요."
                  required
                  />
                <div className="btn-box">
                  <input
                    className="btn form__submit"
                    type="submit"
                    value="검색"
                    />
                </div>
              </label>
            </form>
          </div>
          // 검색 결과
          <div className="search-result">
            <h2 className="result-title"></h2>
            <SearchResult />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;