
# 📚 React-JS 기초잡기
[📌 Nomad Coders - ReactJS 기초 ](https://nomadcoders.co/react-for-beginners/lobby)
<br/>

### ✔ React 프로젝트 초기화
1. [node.js 설치](https://nodejs.org/)
2. npx create-react-app [프로젝트명]
3. run start (개발서버 실행, src 생성)
<br/>

### ✔ React 프로젝트 GitHub Pages 배포
1. npm install gh-pages
2. package.json -> script에 "deploy": "gh-pages -d build" ⭐(배포할 build 디렉토리 지정)
3. package.json -> script에 "predeploy": "npm run build" ⭐(React 프로젝트 빌드 (build가 되어있지 않을 때)
4. package.json 의 마지막줄에 "homepage": "https://[github계정이름].github.io/[저장소이름]" ⭐(배포할 URL)
5. 터미널에서 npm run deploy
6. https://[github계정이름].github.io/[저장소이름] 로 접속 후 확인
