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

[1.6 계산 단계와 포맷팅 단계 분리하기 ~ 1.7 중간 점검: 두 파일(과 두 단계)로 분리됨](http://127.0.0.1:5173/chapter_01)

[1.8 다형성을 활용해 계산 코드 재구성하기](http://127.0.0.1:5173/chapter_01)

## Chapter 04

[4.2 테스트할 샘플 코드](http://127.0.0.1:5173/chapter_04)

4.3 첫 번째 테스트

책의 예제는 mocha로 테스트함.
내 경우 playwright로 처리함.

```
pnpm test
```

4.4 테스트 추가하기

4.5 픽스처 수정하기

4.6 경계 조건 검사하기

## Chapter 06

여기부터 예제가 전체 코드가 아니어서 실제로 동작하지 않음.
mock data를 만들어서 돌아가게 만들어도 되겠지만 리팩터링에 대한 내용만 살펴보면 될 것 같음.

또한 Section하나에 리팩터링에 대한 단계가 여러 단계로 소개되어 git commit history를 참고하는 대신 단계별 js를 나누어서 저장하려고 함.

6.1 함수 추출하기

6.2 함수 인라인하기

6.3 변수 추출하기

6.4 변수 인라인하기

6.5 함수 선언 바꾸기

6.6 변수 캡슐화하기

6.7 변수 이름 바꾸기

6.8 매개변수 객체 만들기

6.9 여러 함수를 클래스로 묶기

6.10 여러 함수를 변환 함수로 묶기

6.11 단계 쪼개기