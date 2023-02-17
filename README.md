![header](https://capsule-render.vercel.app/api?type=rect&color=0:EEFF00,100:a82da8&fontColor=FFFFFF&height=100&section=header&text=JOBS%20Components&fontSize=40&fontAlign=50&fontAlignY=50)

![Node.js](https://img.shields.io/badge/Node%2018.13-339933?style=flat-square&logo=Node.js&logoColor=white) ![Yarn](https://img.shields.io/badge/Yarn%20Berry-2C8EBB?style=flat-square&logo=yarn&logoColor=white) ![React](https://img.shields.io/badge/React%2018-61DAFB?style=flat-square&logo=react&logoColor=black) ![Typescript](https://img.shields.io/badge/Typescript-3178c6?style=flat-square&logo=typescript&logoColor=white) ![SCSS](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white) ![CSS_Modules](https://img.shields.io/badge/CSS%20Modules-000000?style=flat-square&logo=CSS%20Modules&logoColor=white)
![RollupJS](https://img.shields.io/badge/Rollup.js-EC4A3F?style=flat-square&logo=rollup.js&logoColor=white)

**Codestates 채용 플랫폼 Codeship(가칭)의 웹 클라이언트입니다.**

## 📚 Package Install

- 일반적으로 yarn berry zero install을 사용하기 때문에 따로 패키지 설치는 필요없습니다.

private package 설치를 위해 환경변수를 사용합니다.

```bash
export CSE_NPM_TOKEN={GITHUB_PERSONAL_TOKEN}
```

- export 명령어로 환경변수를 설정하는 경우, 터미널을 재시작하면 환경변수가 초기화됩니다. 터미널 시작시 환경 변수를 자동으로 설정하려면 .bashrc, .bash_profile, .zshrc 등 쉘 설정 파일에 export 명령어를 추가해야 합니다.

Github Personal Token은 engineering@codestates.com 계정으로 만들어두었습니다.

(1Password > Engineering > Github Personal Token for CodeStates Engineering Team 참고) 환경 변수 설정이 완료되면 npm 패키지를 설치합니다.

```bash
yarn install:dev
```

## 📐 Code Style

[eslint-config-codestates](https://github.com/CodeStates-Engineering/eslint-config-codestates)를 베이스로 합니다.

자세한 사항은 해당 repository를 참조해 주세요.

추가적으로 다음과 같은 스크립트를 지원합니다.

```bash
 yarn lint:all
```

```bash
 yarn lint:all:fix
```

## 🌳 JOBS Components branch

JOBS Components는 다음과 같은 Branch 전략을 사용하고 있습니다.

- release branch는 버그 픽스나 커밋 하나로 끝나는 단위 작업만 직접 commit 합니다.
- release branch PR은 code style, build test가 완료된 후에 merge가 가능합니다.
- 일반적인 작업은 Jira ticket 생성후 feature/ticket branch를 생성하고 작업이 완료되면 release branch에 merge(squash) 합니다.
- release branch에 변경이 발생하면 github action에 의해 패키지 버전이 변경되며 release tag 생성과 package, storybook 배포가 발생합니다.
- gh-pages branch는 storybook 배포를 위한 branch로 github action에 의해 관리됩니다.

### Github actions

해당 프로젝트의 Github actions에선 squash merge(commit) message footer에 따라 다음과 같은 트리거를 지원합니다.

#### deploy canary

- Trigger: feature branch commit message
- Action: 외부 프로젝트에서 설치가능한 canary package 배포

```bash
feat: commit title

- Commit 내용

deploy canary
```

#### version-up

- Trigger: release branch commit message
- Action: release 버전 설정
- Options: major, minor, patch(default)

```bash
JOBS-XX: PR title

- PR 내용

version-up minor
```

## 📚 Deployment

- 항상 release branch의 최신 변경 사항을 반영합니다.

### Package

- Link: https://github.com/CodeStates-Engineering/codeship-platform-app-library/pkgs/npm/codeship-platform-app-library
- 해당 패키지를 설치하기 위해선 위에서 설정한 "CSE_NPM_TOKEN"이 필요합니다.

#### yarn

```bash
 yarn add @codestates-engineering/codeship-platform-app-library
```

#### npm

```bash
 npm install @codestates-engineering/codeship-platform-app-library
```

### Storybook

- Link: https://codestates-engineering.github.io/codeship-platform-app-library
