# OOP on TypeScript

TypeScript의 기본 개념을 정리하고 객체지향 패러다임적 방법론을 연습합니다.

## TypeScript 개발환경

### vscode

- setting - strict null 검색 - Extention - TypeScript - Strict Null Check 체크하기.

### typescript 설치

- npm install -g typescript
- 기본 명령어 tsc

### ts-node 설치

- 터미널에서 TS 파일 바로 실행 가능
- npm install -g ts-node

### 브라우저 환경

- tsc -w : watch모드로 파일 업데이시 바로 재컴파일 되도록 한다.

### TypeScript-Node-Starter

- miscrosoft에서 만든 CRA같은 템플릿. 무거우므로 직접 셋업하는게 나을 것 같다.
  <br/>

---

## 프로젝트 세팅

### TSConfig 셋업

- [컴파일 설정 ref](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-tsconfigjson-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0-%EC%B4%9D%EC%A0%95%EB%A6%AC)
- tsc --init : tsconfig파일 생성
- tsc {filename} -w : config파일 추가 후 파일의 내용이 변경될 때 모든 파일의 변경 사항을 반영하여 자동 컴파일된다.

### 프로젝트 구조화

- src 폴더 생성, 소스코드 이동
- tsconfig
  - compilerOptions
    - outDir : "./build"
    - rootDir : "./src"
      - 모든 ts 파일은 src안에서만 만들도록 한다.
  - exclude, include ...
- tsc로 컴파일

- 컴파일러 옵션
  - [TS compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options-in-msbuild.html)

### Debugging

- 브라우저 환경에서 디버깅 할 때 변환된 js 파일로 보기 불편할 수 있음
- compiler option에서 "sourceMap": true 로 설정하면 컴파일시 map file 생성.
- 브라우저 devtool \- Source탭에서 ts 파일로 디버깅 툴 사용이 가능.
- vscode에서 디버깅 할 시 extension \- Debugger for Chrome 활용할 수 있지만 Browser Devtool에서 확인하는 것이 편하다.

### 자동 재실행 설정 ( TS + Node )

- npm i --save-dev [concurrently](https://www.npmjs.com/package/concurrently) nodemon : dev dependency에 추가
- package.json 에서 start 명령어 설정으로 tsc -w 와 nodemon 동시 실행 가능

```json
  "scripts": {
    "start": "concurrently \"tsc -w\" \"nodemon dist/main\"",
  },
```
