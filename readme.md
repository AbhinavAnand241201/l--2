# GNG Wallet - 모바일 앱 다운로드 랜딩 페이지

안전하고 빠른 암호화폐 지갑 앱을 위한 모바일 최적화 랜딩 페이지입니다.

## 🎨 디자인 테마

이 랜딩 페이지는 GNG Wallet 웹 버전과 동일한 테마를 사용합니다:

- **배경**: 다크 차콜 그레이 (`#282A36`)
- **카드 배경**: 밝은 다크 그레이 (`#363942`)
- **버튼**: 비브란트 블루 (`#3B82F6`)
- **액센트**: 네온 그린 글로우 (`#00FFC2`)
- **텍스트**: 화이트 (`#FFFFFF`)

## 🚀 시작하기

### 필수 조건

- Node.js 18.0 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📱 기능

- **모바일 우선 디자인**: 모든 모바일 기기에 최적화된 반응형 UI
- **한국어 지원**: 완전한 한국어 인터페이스
- **모던 애니메이션**: 부드러운 전환과 글로우 효과
- **다운로드 섹션**: APK 파일 다운로드를 위한 전용 섹션
- **기능 소개**: 지갑의 주요 기능들을 시각적으로 표현

## 🛠 기술 스택

- **Next.js 14**: React 기반 프레임워크
- **TypeScript**: 타입 안전성
- **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크
- **Lucide React**: 아이콘 라이브러리

## 📁 프로젝트 구조

```
├── app/
│   ├── globals.css          # 전역 스타일
│   ├── layout.tsx           # 루트 레이아웃
│   └── page.tsx             # 메인 랜딩 페이지
├── public/                  # 정적 파일
├── tailwind.config.js       # Tailwind 설정
├── package.json            # 프로젝트 의존성
└── README.md               # 프로젝트 문서
```

## 🎯 주요 섹션

1. **헤더**: 로고와 네비게이션
2. **히어로 섹션**: 메인 제목과 다운로드 버튼
3. **기능 소개**: 3개의 주요 기능 카드
4. **앱 미리보기**: 모바일 앱 시뮬레이션
5. **다운로드 섹션**: APK 다운로드 전용 영역
6. **푸터**: 지원 정보와 링크

## 🔧 커스터마이징

### 색상 변경

`tailwind.config.js` 파일에서 `colors` 섹션을 수정하여 색상을 변경할 수 있습니다:

```javascript
colors: {
  'wallet-bg': '#282A36',        // 배경색
  'wallet-card': '#363942',      // 카드 배경색
  'wallet-blue': '#3B82F6',      // 버튼 색상
  'wallet-green': '#00FFC2',     // 액센트 색상
  'wallet-text': '#FFFFFF',      // 텍스트 색상
  'wallet-gray': '#D1D5DB',      // 회색 요소
}
```

### 다운로드 링크 설정

`app/page.tsx` 파일의 `handleDownload` 함수를 수정하여 실제 APK 파일 다운로드를 구현하세요:

```javascript
const handleDownload = () => {
  // 실제 APK 파일 다운로드 로직
  window.open('your-apk-file-url.apk', '_blank');
}
```

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 

