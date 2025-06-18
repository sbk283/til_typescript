# NVM 의 설치 및 이해
- Node Version Manager
- Node.js 버전을 자유롭게 관리
- 각 프로젝트 및 회사마다 Node.js 버전 차이
- Node.js 는 로컬 PC 에서 js 를 실행 및 개발 가능하도록 지원

## 1. ? 머징

## 2. 설치
- https://jang8584.tistory.com/295

## 3. NVM의 사용 명령어
- 버전확인
```
nvm --version
```

- Node 목록 확인하기
```
nvm ls
```

- Node 전체 버전 확인하기
```
nvm list available
```

- NVM 을 이용해서 특정버전 Node 설치
```
nvm install 18.18.2
nvm install 22.16.0
```

- NVM 으로 버전 변경하기
```
nvm use 18.18.2
nvm install 22.16.0
```

- NVM 으로 특정 버전 삭제하기
```
nvm uninstall 18.18.2
nvm ls
```