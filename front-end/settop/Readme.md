# 건강해효 Front-end

## 폴더 구조

### assets
- 서비스에서 제공하는 기능들에 대한 api 구조
- axios에 대한 interceptor와 객체를 만드는 함수 정의

### components
- 서비스에서 사용하는 컴포넌트 정의

### hooks
- 컴포넌트들을 구성하기 위한 hook을 모아둔 곳

### pages
- 컴포넌트들의 feature들이 모인 페이지를 모아둔 곳
- 한 화면에서 보여지는 모든 컴포넌트들을 모아둔 페이지
- index.js 모아두는 폴더

### store
- redux를 이용해 상태관리
- store를 구성하는 모든 slice와 reducer를 정의한 폴더