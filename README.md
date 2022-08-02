# 소개

한빛미디어의 [리팩터링 2판 (래픽토링 개정판)](https://www.hanbit.co.kr/store/books/look.php?p_code=B6952616555)을 공부하면서 실습해본 예제입니다.

# 예제 구성

각 Chapter의 Section 단위로 git commit을 하였기 때문에 현재 공부하고 있는 Section에 대해 git history를 검색하여 checkout 받으면 됩니다.

예) 가장 첫번째 예제는 git history에서 `1.1 자, 시작해보자!`를 검색하여 checkout 

예제의 파일 위치는 다음과 같습니다.

- `/src/lib/chapter_{Chapter 번호}` - Chapter 단위 예제
- `/src/routes/chapter_{Chapter 번호}` - 각 Chapter의 예제를 호출할 주소

# 예제 서버 실행

sveltekit로 예제 코드를 테스트 하였습니다.

서버를 실행 시킨 후 

```
pnpm run dev
```

호스트를 확인합니다.

```
  VITE v3.0.4  ready in 366 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
```

예) 가장 첫번째 예제는 `http://127.0.0.1:5173/chater_01` 로 확인



이전 챕터는 가장 최종 예제를 확인할 수 있습니다.

# 리팩토링 2판 목차

## Chapter 01

[1.1 자, 시작해보자!](http://127.0.0.1:5173/chapter_01)

[1.4 statement() 함수 쪼개기 ~ 1.5 중간 점검: 난무하는 중첩 함수](http://127.0.0.1:5173/chapter_01)

