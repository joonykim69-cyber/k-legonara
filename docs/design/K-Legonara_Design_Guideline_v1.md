# K-Legonara Design Guideline v1

> AI, Digital Twin, Manufacturing, Knowledge, Marketplace, Enterprise를 하나의 경험으로 연결하는 K-Legonara 플랫폼 디자인 기준서.

| 문서 정보 | 내용 |
|---|---|
| 버전 | 1.0 |
| 상태 | Design Direction Approved |
| 작성일 | 2026-07-29 |
| 적용 범위 | K-Legonara 브랜드, 플랫폼 홈, 핵심 워크스페이스, 향후 Figma 디자인 시스템 |
| 핵심 브랜드 컬러 | Neo Aqua `#22C7B8` |

---

## 1. 문서 목적

이 문서는 K-Legonara 플랫폼의 완성된 디자인 방향을 하나의 기준으로 정리한다. 초기 보라색 콘셉트부터 Bright Blue와 Bright Green 탐색을 거쳐 최종 확정한 Neo Aqua 방향까지의 의사결정을 기록하며, 향후 화면 설계와 Figma 디자인 시스템 구축 시 일관된 판단 기준으로 사용한다.

K-Legonara는 단순한 쇼핑몰이나 콘텐츠 마켓플레이스가 아니다. AI, Digital Twin, Manufacturing, Knowledge Graph, Marketplace, Community, Enterprise 기능을 연결하는 통합 플랫폼이다. 따라서 디자인도 콘텐츠를 진열하는 데 머물지 않고, 사용자가 아이디어를 만들고 검증하고 실행하고 협업하는 전체 흐름을 명확하게 보여주어야 한다.

이 문서의 색상, 레이아웃, 컴포넌트 원칙은 K-Legonara에만 적용한다. 다른 프로젝트의 서비스 구조나 브랜드 메시지는 포함하지 않는다.

---

## 2. 프로젝트 디자인 철학

### 2.1 핵심 브랜드 명제

**Design. Create. Build. Manufacture. Collaborate. Powered by AI.**

K-Legonara의 시각 언어는 다음 다섯 가지 가치 위에 구축한다.

1. **Connected Intelligence**

   AI, 데이터, 지식, 디지털 트윈이 분리된 기능처럼 보이지 않고 하나의 연결된 작업 흐름으로 느껴져야 한다.

2. **Modular Creation**

   레고 블록처럼 재사용하고 조합할 수 있는 플랫폼의 성격을 카드, 모듈, 패널, 노드 구조에 반영한다.

3. **Industrial Precision**

   제조와 엔터프라이즈 환경에서도 신뢰할 수 있도록 정보 구조, 수치 표현, 상태 표시를 정확하고 절제되게 설계한다.

4. **Human Clarity**

   복잡한 기술을 사용자에게 그대로 노출하지 않는다. 사용자가 다음 행동을 빠르게 이해할 수 있도록 쉬운 언어와 명확한 계층을 사용한다.

5. **Optimistic Future**

   어둡고 폐쇄적인 산업용 소프트웨어의 인상보다 밝고 개방적이며 지속 가능한 미래 기술의 분위기를 지향한다.

### 2.2 목표 인상

K-Legonara는 처음 보았을 때 다음과 같은 인상을 주어야 한다.

- 미래지향적이지만 과장되지 않은 플랫폼.
- 복잡한 기술을 쉽고 친근하게 다루는 도구.
- 창작자부터 제조 기업까지 확장 가능한 시스템.
- 하루 종일 사용해도 피로하지 않은 밝은 업무 환경.
- 신뢰, 연결, 생성, 성장의 이미지를 동시에 가진 브랜드.

### 2.3 디자인 원칙 한 문장

> 복잡한 플랫폼 기능을 하나의 밝고 연결된 작업 경험으로 단순화한다.

---

## 3. 참고 대시보드에서 계승할 요소

참고 대시보드는 좌측 내비게이션, 중앙 콘텐츠, 우측 정보 패널, 카드형 콘텐츠, 넉넉한 여백과 안정적인 그리드가 강점이었다. K-Legonara는 이 구조적 장점을 계승하되, 쇼핑몰 중심의 콘텐츠 구성은 플랫폼 업무 흐름 중심으로 재해석한다.

### 3.1 유지할 요소

- 고정된 좌측 내비게이션을 통한 빠른 기능 이동.
- 중앙 Hero를 중심으로 한 분명한 첫 화면 메시지.
- 우측 사이드바를 활용한 컨텍스트 정보와 알림 노출.
- 카드 기반의 재사용 가능한 콘텐츠 모듈.
- 흰색 표면과 밝은 배경이 만드는 높은 가독성.
- 일정한 Radius, Padding, Typography로 형성되는 시각적 리듬.
- Hero에서 시작해 주요 작업과 콘텐츠로 자연스럽게 내려가는 정보 계층.

### 3.2 K-Legonara에 맞게 바꿀 요소

| 참고 구조 | K-Legonara 적용 |
|---|---|
| Creator 중심 탐색 | Workspace와 Project 중심 탐색 |
| Product 추천 | AI 추천 작업, 모델, 부품, 지식, 프로젝트 |
| Marketplace 중심 Hero | AI와 Digital Twin 중심 Hero |
| 단순 검색 | AI 질의와 통합 검색이 결합된 Command Search |
| 콘텐츠형 우측 패널 | AI 상태, 작업, 알림, 협업, 시스템 상태 패널 |
| 쇼핑 경험 | 설계, 검증, 제조, 공유로 이어지는 작업 경험 |

### 3.3 계승하지 않을 요소

- 특정 템플릿의 그래픽, 일러스트, 아이콘을 그대로 복제하지 않는다.
- 마켓플레이스가 플랫폼 전체를 대표하는 것처럼 보이게 하지 않는다.
- 장식 목적의 과도한 배지, 그림자, 색상 사용을 피한다.
- 기능이 많다는 이유로 첫 화면에 모든 메뉴와 데이터를 한꺼번에 노출하지 않는다.

---

## 4. 전체 레이아웃 아키텍처

### 4.1 기본 데스크톱 구조

```text
┌──────────────────────────────────────────────────────────────────┐
│ Header                                                           │
├──────────────┬───────────────────────────────────┬───────────────┤
│ Left         │ Main Content                      │ Right         │
│ Navigation   │                                   │ Sidebar       │
│              │ Hero                              │               │
│              │ AI Assistant                      │ AI Status     │
│              │ Workspace                         │ Activity      │
│              │ Digital Twin                      │ Notifications │
│              │ Knowledge / Marketplace           │ Collaboration │
├──────────────┴───────────────────────────────────┴───────────────┤
│ Footer                                                           │
└──────────────────────────────────────────────────────────────────┘
```

권장 기본값은 다음과 같다.

| 영역 | 권장 기준 |
|---|---|
| 전체 최대 폭 | `1440–1600px` |
| Header 높이 | `72px` |
| Left Navigation | `240–256px` |
| Main Content | 유동 폭, 최소 `640px` |
| Right Sidebar | `288–320px` |
| 열 간격 | `24px` |
| 페이지 외부 여백 | `24–32px` |

### 4.2 Header

Header는 플랫폼 전역에서 변하지 않는 핵심 도구를 제공한다.

- K-Legonara 로고와 현재 Workspace 이름.
- Command Search 또는 `Ask AI…` 입력.
- 빠른 생성 버튼.
- 알림.
- 도움말.
- 사용자 프로필.

Header의 검색은 일반 텍스트 검색과 AI 명령을 하나로 묶는다. 사용자는 제품, 지식, 문서, CAD, 프롬프트, 프로젝트, 사람을 같은 위치에서 찾을 수 있어야 한다.

### 4.3 Left Navigation

Left Navigation은 기능 목록이 아니라 사용자의 작업 구조를 보여준다.

권장 1차 정보 구조는 다음과 같다.

```text
Home

Create
  AI Studio
  Digital Twin
  Projects

Knowledge
  Knowledge Graph
  Dataset
  Documents

Build
  Manufacturing
  Components
  Automation

Connect
  Marketplace
  Community
  Enterprise

Manage
  Analytics
  Integrations
  Settings
```

현재 위치는 배경색, 아이콘색, 텍스트 굵기를 함께 사용해 표시한다. 색상 하나에만 의존하지 않는다. 메뉴 그룹은 처음부터 모두 펼치지 않고 사용자의 역할과 현재 컨텍스트에 따라 필요한 그룹을 우선 노출한다.

### 4.4 Hero

Hero는 제품의 정체성과 사용자의 첫 행동을 동시에 전달한다.

- 왼쪽에는 강한 메시지, 짧은 설명, 핵심 CTA를 배치한다.
- 오른쪽에는 Digital Twin과 로봇 또는 제조 시스템을 표현한 3D 비주얼을 배치한다.
- 배경은 Bright Blue에서 Neo Aqua로 이어지는 밝은 그라데이션을 사용한다.
- 장식보다 실제 플랫폼의 연결성을 보여주는 노드, 레이어, 데이터 흐름을 활용한다.

권장 메시지 예시는 다음과 같다.

> Design. Create. Build. Manufacture. Collaborate.<br>
> 하나의 AI 플랫폼에서 아이디어를 현실로 연결하세요.

권장 CTA는 `Start with AI`와 `Explore Platform`의 두 단계로 구성한다.

### 4.5 Main Content

Main Content는 사용자의 현재 작업과 다음 행동을 우선한다.

- AI Assistant.
- My Workspace.
- Recent Projects.
- Digital Twin 상태.
- AI Recommendations.
- Knowledge와 Marketplace.
- Analytics와 Community.

섹션은 같은 높이와 형태의 카드만 반복하지 않는다. 중요한 작업은 넓은 카드, 보조 정보는 작은 카드, 연속 데이터는 리스트나 테이블로 표현해 시각적 리듬을 만든다.

### 4.6 Right Sidebar

Right Sidebar는 메인 작업을 방해하지 않고 지속적으로 참고할 정보를 제공한다.

- 사용자 프로필과 Workspace 상태.
- AI Agent 실행 상태.
- 오늘의 작업.
- 승인 대기.
- 최근 알림.
- 협업자 활동.
- 시스템 또는 Digital Twin 상태.

사용자가 집중해야 하는 편집 화면에서는 접을 수 있어야 한다. 모든 콘텐츠를 카드로 만들기보다 관련 항목을 하나의 패널 안에서 그룹화한다.

### 4.7 Footer

Footer는 플랫폼 홈과 공개 랜딩 화면에서 다음 정보를 제공한다.

- Product와 Solution 링크.
- Documentation과 Developer Resources.
- Security, Privacy, Terms.
- System Status.
- Contact와 Community.
- 저작권 및 버전 정보.

로그인 후의 작업 화면에서는 Footer를 최소화하거나 생략하고, 도움말과 상태 정보는 Header와 설정 영역으로 이동할 수 있다.

### 4.8 반응형 원칙

| 구간 | 동작 |
|---|---|
| `≥ 1440px` | 3열 전체 구조 유지 |
| `1024–1439px` | 우측 사이드바를 Drawer 또는 접이식 패널로 전환 |
| `768–1023px` | 좌측 내비게이션을 축소형 Rail로 전환 |
| `< 768px` | 단일 열, 하단 또는 Drawer 내비게이션, 카드 1열 |

모바일에서는 데스크톱의 모든 정보를 축소해 넣지 않는다. 사용자의 주요 행동, 진행 상태, AI Assistant를 우선하고 보조 데이터는 점진적으로 노출한다.

---

## 5. UX 원칙

### 5.1 AI First, User Controlled

AI는 첫 번째 진입점이지만 사용자의 통제권을 빼앗지 않는다. AI가 실행하려는 작업, 사용 데이터, 예상 결과, 취소 방법을 명확히 보여준다.

### 5.2 Context Before Complexity

사용자의 Workspace, Project, 선택한 Digital Twin, 역할에 따라 필요한 정보만 먼저 보여준다. 고급 기능은 필요한 시점에 확장한다.

### 5.3 One Primary Action

화면 또는 카드마다 가장 중요한 행동은 하나만 Primary로 표시한다. Secondary와 Tertiary 행동은 시각적 우선순위를 낮춘다.

### 5.4 Progressive Disclosure

복잡한 데이터와 설정은 요약, 세부 정보, 고급 설정의 순서로 공개한다. 처음부터 모든 필드와 그래프를 보여주지 않는다.

### 5.5 Visible System Status

AI 실행, 시뮬레이션, 파일 처리, 제조 요청, 승인 흐름의 상태를 항상 확인할 수 있어야 한다. `Queued`, `Running`, `Needs Review`, `Completed`, `Failed`를 일관된 상태 체계로 사용한다.

### 5.6 Explainable Intelligence

AI 추천과 예측에는 근거, 사용한 데이터, 신뢰도, 갱신 시점을 함께 제공한다. 추천 결과만 보여주지 않는다.

### 5.7 Cross-Domain Continuity

AI Studio에서 만든 결과가 Digital Twin, Manufacturing, Knowledge, Marketplace로 이동할 때 사용자가 작업의 연속성을 잃지 않게 한다. 같은 Project ID, 상태, 버전, 담당자를 유지한다.

### 5.8 Accessible by Default

- 본문 텍스트는 WCAG AA 수준의 명도 대비를 목표로 한다.
- 색상만으로 상태를 구분하지 않고 아이콘과 텍스트를 함께 사용한다.
- 키보드 탐색 순서와 포커스 상태를 설계 단계에서 정의한다.
- 터치 대상은 최소 `44 × 44px`을 권장한다.
- 애니메이션 감소 설정을 지원한다.

---

## 6. 시각적 계층

사용자는 첫 화면에서 다음 순서로 정보를 인식해야 한다.

1. 지금 이 플랫폼에서 무엇을 할 수 있는가.
2. 내가 지금 해야 할 핵심 행동은 무엇인가.
3. 진행 중인 Project와 AI 작업은 무엇인가.
4. Digital Twin과 시스템 상태는 어떠한가.
5. 다음에 참고할 지식, 추천, 콘텐츠는 무엇인가.

시각적 계층은 크기만으로 만들지 않는다. 다음 요소를 함께 사용한다.

- 크기와 굵기.
- 여백과 그룹.
- 표면 대비.
- 위치와 정렬.
- 제한된 브랜드 컬러.
- 아이콘과 상태 레이블.

한 화면에서 강한 그라데이션 면은 Hero 또는 하나의 핵심 프로모션 영역에만 사용한다. Neo Aqua가 모든 카드와 텍스트에 반복되면 정보 우선순위가 약해지므로, 대부분의 화면은 밝은 중립색을 유지하고 행동과 상태에만 브랜드 컬러를 집중한다.

---

## 7. 홈페이지 구조

K-Legonara 홈페이지는 마케팅 랜딩과 실제 플랫폼 진입점의 역할을 함께 수행하는 플랫폼 홈으로 설계한다.

### 7.1 권장 섹션 순서

```text
Header
↓
Hero
↓
AI Assistant
↓
My Workspace
↓
Recent Projects
↓
Digital Twin & Manufacturing
↓
AI Recommendations
↓
Knowledge
↓
Marketplace
↓
Enterprise & Integrations
↓
Community & Analytics
↓
Footer
```

### 7.2 섹션별 목적

| 섹션 | 사용자 질문 | 대표 콘텐츠 |
|---|---|---|
| Hero | 이 플랫폼은 무엇을 하는가 | 핵심 메시지, CTA, 3D Digital Twin 비주얼 |
| AI Assistant | 지금 무엇을 시작할 수 있는가 | 자연어 입력, 추천 프롬프트, 최근 명령 |
| My Workspace | 내 작업은 어디에 있는가 | Workspace, 역할, 팀, 진행 상태 |
| Recent Projects | 무엇을 이어서 해야 하는가 | 최근 파일, 프로젝트, 작업 단계 |
| Digital Twin | 현실 시스템은 어떤 상태인가 | 3D 미리보기, 시뮬레이션, 상태 KPI |
| AI Recommendations | AI가 무엇을 제안하는가 | 작업, 모델, 지식, 자동화 추천 |
| Knowledge | 어떤 근거와 연결 정보가 있는가 | 문서, Entity, 관계, Semantic Search |
| Marketplace | 무엇을 재사용하거나 도입할 수 있는가 | 모델, 컴포넌트, 템플릿, 전문가 |
| Enterprise | 조직에서 어떻게 연결되는가 | 승인, 통합, 보안, 거버넌스 |
| Community | 다른 사용자는 무엇을 만드는가 | 사례, 전문가, 학습 콘텐츠 |
| Analytics | 플랫폼 성과는 어떠한가 | 사용량, 프로젝트, 품질, 운영 지표 |

---

## 8. 핵심 플랫폼 영역

### 8.1 AI

AI는 별도의 챗봇 기능이 아니라 플랫폼 전반을 연결하는 작업 인터페이스로 설계한다.

주요 화면은 다음과 같다.

- AI Studio.
- AI Assistant.
- Prompt Library.
- Agent Runs.
- AI History.
- Model과 Dataset.
- Automation.

UI에서는 입력, 계획, 실행, 검토, 결과의 흐름이 분리되어야 한다. AI가 만든 결과에는 출처, 버전, 신뢰도, 사람의 승인 상태를 표시한다. AI 관련 시각 강조는 Bright Blue를 보조색으로 사용하되, 전체 브랜드의 중심은 Neo Aqua로 유지한다.

### 8.2 Digital Twin

Digital Twin은 K-Legonara의 대표 시각 경험이다.

주요 화면은 다음과 같다.

- Twin Explorer.
- 3D Viewer.
- Simulation.
- Factory와 Machine.
- Component.
- Sensor와 Event.
- Version Comparison.

3D Viewer 주변의 UI는 최대한 절제한다. 캔버스를 넓게 확보하고, 도구는 좌측 Tool Rail, 속성은 우측 Inspector, 시간 흐름은 하단 Timeline으로 배치한다. 상태 데이터는 3D 오브젝트 위에 과도하게 겹치지 않고 선택한 항목에만 컨텍스트로 노출한다.

### 8.3 Manufacturing

Manufacturing은 Digital Twin에서 검증된 결과를 실제 실행으로 연결한다.

- Production.
- Orders.
- Material.
- Inventory.
- Supplier.
- Quality.
- Workflow와 Approval.

산업 데이터는 카드보다 테이블, 타임라인, 상태 보드가 더 적합할 수 있다. 중요한 수치에는 단위, 기준 시점, 데이터 출처를 함께 표시한다.

### 8.4 Marketplace

Marketplace는 플랫폼의 중심이 아니라 재사용과 연결을 돕는 확장 영역이다.

- AI Model.
- Prompt.
- Dataset.
- Digital Twin Asset.
- CAD와 Component.
- Material.
- Template.
- Creator와 Expert.

상품 이미지만 강조하지 않고 호환성, 버전, 라이선스, 검증 상태, 사용 사례를 우선적으로 보여준다. 카드의 CTA는 `Buy`보다 `Preview`, `Add to Workspace`, `Compare` 같은 작업 중심 언어를 사용한다.

### 8.5 Knowledge

Knowledge는 검색 결과 목록이 아니라 데이터 간 의미 연결을 탐색하는 공간이다.

- Knowledge Graph.
- Ontology.
- Entity.
- Relationship.
- Semantic Search.
- Reasoning.
- AI Memory.
- Documentation.

Graph View와 List View를 함께 제공하고, 사용자가 복잡한 그래프를 이해하기 어려운 경우 핵심 관계를 문장으로 요약한다. 출처, 갱신 시점, 신뢰 수준, 연결 근거를 항상 확인할 수 있게 한다.

### 8.6 Enterprise

Enterprise 영역은 확장성, 신뢰, 통제를 시각적으로 전달해야 한다.

- Organization.
- Workspace.
- Project.
- Member와 Role.
- Workflow.
- Approval.
- Integration.
- Security와 Audit.
- Analytics.

권한과 승인 상태는 모호한 아이콘만으로 표현하지 않는다. 역할, 범위, 현재 상태, 다음 승인자를 텍스트로 명확히 표시한다. Enterprise 화면에서는 장식적 그라데이션을 줄이고 표, 필터, 상태, 기록의 가독성을 우선한다.

---

## 9. 컴포넌트 시스템

### 9.1 컴포넌트 계층

```text
Foundations
  Color
  Typography
  Spacing
  Radius
  Shadow
  Grid
  Motion

Primitives
  Button
  Input
  Icon
  Badge
  Avatar
  Divider
  Tooltip

Composites
  Search
  Select
  Tabs
  Card
  Table
  Navigation Item
  Notification
  Empty State

Patterns
  AI Prompt Composer
  Project Summary
  Digital Twin Status
  Knowledge Result
  Approval Flow
  Marketplace Item

Templates
  Platform Home
  Workspace
  Detail
  Explorer
  Dashboard
  Settings
```

### 9.2 공통 상태

모든 상호작용 컴포넌트는 다음 상태를 정의한다.

- Default.
- Hover.
- Focus.
- Pressed.
- Selected.
- Disabled.
- Loading.
- Error.
- Success.

Focus Ring은 `2px` 두께를 기본으로 하며 Bright Blue `#2EA8FF`를 사용한다. 컴포넌트의 경계와 구분될 수 있도록 바깥쪽 Offset을 확보한다.

### 9.3 버튼

| 유형 | 사용 목적 | 권장 스타일 |
|---|---|---|
| Primary | 화면의 핵심 행동 | Neo Aqua 배경, 진한 텍스트 |
| Secondary | 보조 행동 | 흰색 배경, Soft Cyan Gray Border |
| Tertiary | 낮은 우선순위 행동 | 투명 배경, 텍스트 중심 |
| Destructive | 삭제 또는 취소 불가능한 행동 | Error 색상과 명확한 확인 문구 |
| AI Action | AI 실행과 생성 | Blue → Aqua의 제한적 그라데이션 |

Neo Aqua는 밝은 색이므로 작은 흰색 텍스트와 조합하지 않는다. Primary Button의 텍스트는 `#102A33`처럼 충분히 진한 색을 사용한다.

### 9.4 입력과 검색

- 기본 높이는 `44px` 또는 `48px`.
- 검색과 AI Composer는 목적이 다르므로 Placeholder와 아이콘으로 구분.
- 오류는 Border 색상만 바꾸지 않고 원인과 해결 방법을 함께 표시.
- 장문의 AI 입력은 확장 가능한 Composer를 사용.
- 단축키는 검색창 우측에 `⌘K` 또는 `Ctrl K` 형태로 표시.

### 9.5 상태와 피드백

- Success는 완료된 결과에만 사용한다.
- Warning은 검토가 필요하지만 작업을 계속할 수 있는 상태에 사용한다.
- Error는 실패 또는 데이터 손실 가능성이 있는 상태에 사용한다.
- 진행 상태는 단계, 예상 시간, 취소 가능 여부를 함께 표시한다.
- Toast는 일시적 확인에만 사용하고 중요한 실패와 승인 요청은 화면 안에 유지한다.

---

## 10. 카드 시스템

카드는 K-Legonara의 모듈형 철학을 표현하는 핵심 컴포넌트다. 다만 모든 콘텐츠를 카드로 감싸지 않고 실제 정보 관계에 따라 사용한다.

### 10.1 기본 Card Anatomy

```text
Card
├─ Eyebrow or Status
├─ Title
├─ Supporting Text
├─ Visual or Data
├─ Metadata
└─ Action
```

### 10.2 카드 유형

| 카드 | 목적 | 대표 정보 |
|---|---|---|
| Project Card | 최근 작업 재개 | 썸네일, 상태, 담당자, 수정 시각 |
| AI Recommendation Card | 다음 행동 제안 | 제안, 근거, 신뢰도, 실행 버튼 |
| Digital Twin Card | 실시간 상태 확인 | 3D Preview, KPI, Event, Health |
| Knowledge Card | 근거 탐색 | Entity, 관계, 출처, 갱신 시각 |
| Marketplace Card | 자산 재사용 | Preview, 호환성, 버전, 라이선스 |
| Enterprise Card | 조직 작업 관리 | 승인, 역할, 기한, 감사 기록 |
| Metric Card | 핵심 수치 요약 | 값, 단위, 비교 기준, 변화량 |

### 10.3 카드 스타일

| 속성 | 기본값 |
|---|---|
| Background | Surface `#FFFFFF` |
| Border | `1px solid #DCEEF0` |
| Radius | `16px` |
| Padding | `20–24px` |
| Gap | `12–16px` |
| Shadow | 기본은 매우 약하게, Hover에서만 한 단계 상승 |
| Hover | Border 또는 Shadow 중 하나만 강조 |

Hero와 Feature Card에는 `20–24px` Radius를 사용할 수 있다. 데이터 밀도가 높은 Enterprise Card는 `12px` Radius로 낮춰 더 정밀한 인상을 줄 수 있다.

### 10.4 카드 사용 금지 원칙

- 카드 안에 의미 없이 또 다른 카드를 중첩하지 않는다.
- 카드 전체를 클릭할 수 있는 경우 내부 CTA와 클릭 동작이 충돌하지 않게 한다.
- 메타데이터를 작은 회색 글자로 과도하게 축소하지 않는다.
- 모든 카드에 서로 다른 색을 배정하지 않는다.
- 그림자만으로 카드 경계를 만들지 않는다.

---

## 11. 타이포그래피

### 11.1 권장 서체

K-Legonara는 한국어와 영어가 혼합되는 엔터프라이즈 플랫폼이므로 가독성과 숫자 표현이 안정적인 Sans Serif를 사용한다.

| 용도 | 권장 서체 |
|---|---|
| 한국어 및 UI 기본 | `Pretendard Variable` |
| 영문 대체 | `Inter` |
| 시스템 대체 | `Noto Sans KR`, `Segoe UI`, `sans-serif` |
| 코드, ID, 기술 데이터 | `JetBrains Mono` 또는 시스템 Monospace |

권장 기본 Stack은 다음과 같다.

```css
font-family: "Pretendard Variable", "Inter", "Noto Sans KR", "Segoe UI", sans-serif;
```

### 11.2 Type Scale

| Token | 크기 / 행간 | 굵기 | 용도 |
|---|---|---|---|
| Display XL | `56 / 64px` | 700 | 공개 랜딩 Hero |
| Display L | `44 / 52px` | 700 | 플랫폼 Hero |
| Heading 1 | `32 / 40px` | 700 | 페이지 제목 |
| Heading 2 | `24 / 32px` | 700 | 주요 섹션 |
| Heading 3 | `20 / 28px` | 600 | 카드와 패널 제목 |
| Body L | `18 / 28px` | 400–500 | 소개 문장 |
| Body M | `16 / 24px` | 400–500 | 기본 본문 |
| Body S | `14 / 20px` | 400–500 | 보조 정보 |
| Caption | `12 / 16px` | 500–600 | 메타데이터와 상태 |

한글은 영문보다 동일 크기에서 밀도가 높게 보일 수 있으므로 실제 화면에서 행간과 줄바꿈을 확인한다. Hero 문구는 최대 두세 줄, 본문 한 줄 길이는 데스크톱 기준 약 `60–75자`를 권장한다.

### 11.3 텍스트 컬러

최종 브랜드 팔레트를 보조하는 중립 텍스트 컬러를 사용한다.

| 역할 | 권장값 |
|---|---|
| Heading | `#102A33` |
| Body | `#36535A` |
| Muted | `#6C858A` |
| Disabled | `#9DB0B4` |
| Inverse | `#FFFFFF` |

Neo Aqua와 Bright Green은 작은 본문 텍스트에 사용하지 않는다. 링크는 색상과 밑줄 또는 명확한 Hover 상태를 함께 제공한다.

---

## 12. 간격과 그리드

### 12.1 기본 단위

기본 간격 단위는 `4px`이며, 레이아웃의 주요 리듬은 `8px` 배수를 사용한다.

| Token | 값 | 대표 용도 |
|---|---:|---|
| Space 1 | `4px` | 아이콘과 짧은 레이블 |
| Space 2 | `8px` | 작은 요소 간격 |
| Space 3 | `12px` | 입력 내부, 작은 카드 |
| Space 4 | `16px` | 기본 컴포넌트 간격 |
| Space 5 | `20px` | 카드 내부 |
| Space 6 | `24px` | 카드 Padding, Grid Gap |
| Space 8 | `32px` | 섹션 내부 |
| Space 10 | `40px` | 섹션 그룹 |
| Space 12 | `48px` | 페이지 블록 |
| Space 16 | `64px` | 주요 섹션 |
| Space 20 | `80px` | 공개 랜딩 섹션 |
| Space 24 | `96px` | 대형 Hero 여백 |

### 12.2 Grid

- 데스크톱은 `12 Column`.
- 태블릿은 `8 Column`.
- 모바일은 `4 Column`.
- 기본 Gutter는 데스크톱 `24px`, 모바일 `16px`.
- 카드 Grid는 화면 폭에 따라 4열, 3열, 2열, 1열로 자연스럽게 전환한다.
- 수치 정렬과 테이블 열은 시각적 기준선을 공유한다.

### 12.3 Density

플랫폼 홈과 탐색 화면은 Comfortable Density를 기본으로 한다. 테이블과 운영 화면은 사용자가 Compact Mode를 선택할 수 있게 하되, 같은 화면에서 여러 Density를 혼합하지 않는다.

---

## 13. 아이콘과 일러스트레이션

### 13.1 아이콘

- 기본은 단순한 Outline Icon.
- 기본 크기는 `20px`, 주요 내비게이션은 `24px`.
- Stroke는 `1.75–2px`.
- Filled Icon은 선택 상태나 중요한 상태에 제한.
- 같은 화면에서 서로 다른 아이콘 라이브러리를 혼합하지 않는다.
- 아이콘 단독 버튼에는 Tooltip과 접근성 이름을 제공한다.

기능별 아이콘은 장식적 은유보다 일관된 의미를 우선한다. AI는 반짝임 아이콘 하나로만 고정하지 않고 Agent, Model, Automation 등 실제 기능을 구분한다.

### 13.2 3D와 일러스트레이션

Hero의 핵심 비주얼은 Digital Twin과 로봇 또는 제조 시스템을 중심으로 유지한다.

- 밝은 배경과 반투명 레이어.
- Blue → Aqua 조명.
- 데이터 노드와 연결선.
- 과도한 네온, 검은 배경, 게임 스타일은 지양.
- 실제 제품 화면과 연결되는 UI Overlay.
- 사람과 기술의 협업을 보여주는 긍정적인 장면.

3D 자산은 마케팅 장식에만 머물지 않고 제품의 Viewer, Component, Simulation 경험과 시각적으로 연결되어야 한다.

---

## 14. 컬러 시스템

### 14.1 최종 K-Legonara Brand Color System v1

| 역할 | 이름 | Hex | 사용 목적 |
|---|---|---|---|
| Primary | Neo Aqua | `#22C7B8` | 핵심 행동, 선택 상태, 브랜드 식별 |
| Primary Hover | Deep Aqua | `#18B8A9` | Primary Hover와 Pressed |
| Secondary | Bright Blue | `#2EA8FF` | AI, 링크, Focus, 보조 강조 |
| Accent | Bright Green | `#52E67D` | 성장, 생성, 활성 상태의 제한적 강조 |
| Hero Gradient | Blue → Aqua | `#2EA8FF → #22C7B8` | Hero와 대표 브랜드 순간 |
| Background | Ice White | `#F7FBFC` | 앱 전체 배경 |
| Surface | White | `#FFFFFF` | 카드, 패널, 입력 표면 |
| Border | Soft Cyan Gray | `#DCEEF0` | 구분선, 입력과 카드 경계 |
| Success | Success Green | `#32D583` | 성공, 완료, 정상 상태 |
| Warning | Warning Orange | `#FFB020` | 주의, 검토 필요 |
| Error | Error Red | `#F04438` | 오류, 실패, 위험 행동 |

### 14.2 핵심 사용 비율

권장 화면 비율은 다음을 기준으로 한다.

- Background와 Surface 약 `70–80%`.
- 중립 텍스트와 Border 약 `15–20%`.
- Neo Aqua와 Bright Blue 약 `5–10%`.
- Accent와 상태 색상은 필요한 순간에만 사용.

색상 비율은 엄격한 수학적 규칙이 아니라 화면이 지나치게 채색되는 것을 막기 위한 판단 기준이다.

### 14.3 Hero Gradient

권장 방향은 좌상단 Bright Blue에서 우하단 Neo Aqua로 이어지는 `135deg` 계열이다.

```css
background: linear-gradient(135deg, #2EA8FF 0%, #22C7B8 100%);
```

배경 전체를 강한 Gradient로 채우기보다 Ice White와 연결되는 밝은 Tint, Glow, 반투명 패널을 함께 사용한다. Hero 위 텍스트는 배경 위치에 따라 진한 Navy 계열 또는 흰색을 선택하고 실제 명도 대비를 확인한다.

### 14.4 기능별 컬러 역할

| 기능 | 대표 색 | 원칙 |
|---|---|---|
| Platform Core | Neo Aqua | 전역 선택과 Primary Action |
| AI | Bright Blue | AI 실행, 추천, Focus |
| Digital Twin | Neo Aqua | 연결, 상태, 시뮬레이션 |
| Manufacturing | Bright Green | 생산, 완료, 활성 흐름 |
| Knowledge | Blue와 Aqua Tint | Entity와 관계 탐색 |
| Marketplace | 중립 Surface + Aqua Action | 콘텐츠보다 호환성과 신뢰 정보 우선 |
| Enterprise | 중립색 중심 | 상태와 권한에만 브랜드 색 사용 |

기능마다 완전히 다른 브랜드 색을 배정하지 않는다. 같은 Neo Aqua 체계 안에서 Tint와 강조 강도로 구분한다.

### 14.5 접근성 주의

Neo Aqua, Bright Blue, Bright Green은 밝은 색이다. 흰색과 조합한 작은 텍스트는 충분한 대비를 확보하기 어려울 수 있다.

- Primary Button에는 `#102A33` 같은 진한 텍스트를 권장한다.
- 흰색 텍스트가 필요하면 실제 배경 구간의 대비를 검사하고 더 진한 배경 Variant를 사용한다.
- 상태색은 아이콘, 레이블, 패턴과 함께 사용한다.
- 차트는 색상 외에 선 스타일, 마커, 직접 레이블을 함께 제공한다.
- Figma와 구현 단계에서 WCAG Contrast Plugin 또는 동등한 도구로 검증한다.

---

## 15. 브랜딩 근거

Neo Aqua는 Bright Blue와 Bright Green을 단순히 나란히 배치한 조합이 아니다. 두 색이 전달하는 의미를 하나의 브랜드 컬러로 통합한 결과다.

| 색의 기원 | 전달 의미 |
|---|---|
| Bright Blue | 기술, 신뢰, 데이터, 정밀성 |
| Bright Green | 생성, 성장, 지속 가능성, 실행 |
| Neo Aqua | 연결된 지능, 디지털과 현실의 결합, 열린 미래 |

이 색은 AI, Digital Twin, Manufacturing, Knowledge Graph를 하나의 플랫폼 안에서 연결하는 K-Legonara의 성격을 잘 표현한다. 보라색 중심의 일반적인 AI SaaS와 시각적으로 구분되며, 산업용 소프트웨어의 신뢰성과 창작 플랫폼의 생동감을 동시에 확보할 수 있다.

브랜드 컬러는 화면 전체를 덮는 장식이 아니라 다음 순간에 집중한다.

- 로고와 핵심 Brand Moment.
- Primary Action.
- 현재 선택된 위치.
- 연결 상태와 진행 흐름.
- Hero와 대표 3D 비주얼의 조명.

---

## 16. 초기 보라색 콘셉트와 최종 Neo Aqua 방향 비교

### 16.1 초기 Purple 방향

초기 보라색 계열은 프리미엄 SaaS와 AI 서비스의 인상을 빠르게 전달했고, 참고 대시보드의 카드와 Hero 구조에도 자연스럽게 어울렸다.

그러나 다음 한계가 있었다.

- AI SaaS 시장에서 매우 흔해 K-Legonara만의 차별성이 약했다.
- Marketplace와 Creator 중심 서비스처럼 보일 가능성이 컸다.
- Manufacturing과 Digital Twin의 정밀하고 현실적인 인상을 충분히 전달하지 못했다.
- 진한 Purple Gradient가 많은 기능과 데이터가 있는 화면에서 피로감을 만들 수 있었다.

### 16.2 중간 탐색 방향

Bright Green과 Bright Orange 조합은 활기와 친환경 이미지를 강화했지만, 산업용 플랫폼의 신뢰와 AI 기술의 정밀성을 함께 표현하기에는 다소 프로모션 성격이 강했다.

Light Blue와 Bright Green을 각각 사용하는 조합은 신선했으나 두 색이 기능별 포인트처럼 분리되어 하나의 강한 브랜드 인상으로 모이지 않았다.

### 16.3 최종 Neo Aqua 방향

최종 방향은 Bright Blue와 Bright Green의 인상을 혼합한 Neo Aqua `#22C7B8`를 하나의 핵심 브랜드 컬러로 사용한다.

| 평가 항목 | Purple | Neo Aqua |
|---|---|---|
| AI와 프리미엄 인상 | 강함 | 강함 |
| Digital Twin과 산업 기술 | 보통 | 강함 |
| 성장과 지속 가능성 | 보통 | 강함 |
| 차별성 | 보통 | 높음 |
| 밝은 업무 환경 | 보통 | 높음 |
| K-Legonara의 연결성 표현 | 보통 | 매우 높음 |

Purple은 더 이상 K-Legonara의 Primary Brand Color로 사용하지 않는다. 특별한 데이터 시각화에서 범주 구분이 필요한 경우 독립적인 Chart Color로 사용할 수 있지만, 로고, Hero, Primary Action에는 사용하지 않는다.

---

## 17. 모션과 인터랙션

모션은 미래적인 분위기를 만드는 장식보다 상태 변화와 공간 관계를 설명하는 데 사용한다.

- Hover와 Press는 `120–180ms`.
- 패널과 Drawer는 `200–280ms`.
- 페이지 또는 큰 Layout 전환은 `240–320ms`.
- 기본 Easing은 빠르게 반응하고 부드럽게 멈추는 형태를 사용.
- AI 실행은 단계가 보이는 Progress와 Status Message를 제공.
- Digital Twin 카메라 이동은 사용자의 공간 방향을 잃지 않게 연속성 유지.
- `prefers-reduced-motion` 환경에서는 큰 이동과 반복 애니메이션을 줄인다.

Hero의 3D 비주얼은 느린 환경 움직임을 사용할 수 있지만 콘텐츠 읽기를 방해하거나 성능을 저하시키지 않아야 한다.

---

## 18. 데이터 시각화

K-Legonara의 차트는 장식이 아니라 의사결정 도구다.

- 차트 제목은 무엇을 보여주는지 중립적으로 설명한다.
- 축, 단위, 기간, 데이터 갱신 시점을 표시한다.
- Neo Aqua는 핵심 Series에 사용한다.
- Bright Blue는 비교 또는 AI 예측에 사용한다.
- Bright Green은 긍정적 결과가 아니라 실제 의미가 성공 또는 정상일 때만 사용한다.
- Warning과 Error는 임계값 또는 실제 위험 상태에만 사용한다.
- 여러 Series는 색상뿐 아니라 선 스타일과 직접 레이블로 구분한다.
- 복잡한 그래프에는 Table View 또는 데이터 다운로드를 제공한다.

Knowledge Graph는 노드 수를 무제한으로 보여주지 않고 중요 관계, 필터, 탐색 경로를 중심으로 단계적으로 확장한다.

---

## 19. 콘텐츠와 문구

문구는 기술 명칭보다 사용자의 목표를 먼저 말한다.

| 피할 표현 | 권장 표현 |
|---|---|
| Execute inference pipeline | AI 분석 시작 |
| Instantiate digital twin | Digital Twin 만들기 |
| Asset ingestion | 파일과 자산 가져오기 |
| Error occurred | 작업을 완료하지 못했습니다. 원인을 확인해 주세요. |
| Submit | 저장, 승인 요청, 분석 시작 등 실제 행동 |

제목은 짧고 구체적으로 작성한다. 버튼은 명사보다 행동을 사용한다. 오류 메시지는 발생 사실, 영향, 해결 방법의 순서로 안내한다.

AI가 생성한 콘텐츠에는 `AI Generated`, 생성 시각, 사용 모델, 검토 상태를 명확하게 표시한다.

---

## 20. 향후 Figma 디자인 시스템 권장사항

### 20.1 권장 파일 구조

```text
00 Cover & Release Notes
01 Foundations
02 Icons
03 Components
04 Patterns
05 Templates
06 Product Screens
07 Prototypes
08 Documentation
99 Archive
```

### 20.2 Variables

Figma Variables는 원시 값과 의미 기반 Token을 분리한다.

```text
Primitive
  aqua/500
  blue/500
  green/500
  gray/...

Semantic
  bg/default
  bg/surface
  text/primary
  text/secondary
  border/default
  action/primary
  action/primary-hover
  status/success
  status/warning
  status/error
```

컴포넌트에서 Hex 값을 직접 사용하지 않고 Semantic Variable을 연결한다. Light Mode를 v1 기본으로 구축하고, Dark Mode는 단순 색상 반전이 아니라 데이터 화면과 3D Viewer의 실제 사용 환경을 검증한 뒤 별도 Mode로 추가한다.

### 20.3 Component Properties

각 컴포넌트는 필요한 속성만 제공한다.

- `Size`는 Small, Medium, Large.
- `State`는 Default, Hover, Focus, Pressed, Disabled, Loading.
- `Type`은 Primary, Secondary, Tertiary 등 의미 기반으로 제한.
- Icon은 Boolean과 Instance Swap으로 관리.
- Label은 Text Property로 관리.

한 번만 사용하는 화면 구조를 성급하게 범용 컴포넌트로 만들지 않는다. 세 번 이상 반복되고 같은 규칙으로 유지되는 패턴부터 시스템에 승격한다.

### 20.4 Auto Layout와 반응형

- 모든 기본 컴포넌트에 Auto Layout 적용.
- 고정 폭보다 Hug와 Fill을 우선.
- 텍스트 확장과 다국어를 고려해 최소 폭과 최대 폭 정의.
- 카드 Grid와 Sidebar는 실제 Breakpoint별 Prototype으로 검증.
- 모바일 프레임은 데스크톱을 축소 복제하지 않고 우선순위를 다시 설계.

### 20.5 Naming

권장 이름은 목적과 계층이 드러나는 방식으로 통일한다.

```text
Button/Primary/Medium
Input/Text/Default
Navigation/Item/Selected
Card/Project/Default
Pattern/AI/PromptComposer
Pattern/DigitalTwin/StatusPanel
Template/Home/Desktop
```

### 20.6 문서화

각 컴포넌트 페이지에는 다음 내용을 기록한다.

- 목적.
- 사용 시점.
- 사용하지 말아야 할 시점.
- Anatomy.
- Variant와 State.
- 콘텐츠 규칙.
- 접근성 규칙.
- 실제 화면 예시.

### 20.7 품질 점검

Figma 릴리스 전 다음 항목을 확인한다.

- 모든 색상이 Variables에 연결되었는가.
- 텍스트가 Text Style을 사용하는가.
- Auto Layout이 콘텐츠 길이 변화에 대응하는가.
- Focus와 Keyboard Flow가 정의되었는가.
- Contrast가 WCAG AA 목표를 만족하는가.
- 한국어와 영어에서 레이아웃이 깨지지 않는가.
- Empty, Loading, Error, Permission Denied 상태가 있는가.
- 데스크톱, 태블릿, 모바일의 핵심 흐름이 검증되었는가.

---

## 21. 구현 우선순위

### Phase 1. Foundation

- Neo Aqua Color Variables.
- Typography와 Spacing.
- Grid, Radius, Shadow.
- Button, Input, Search, Navigation, Card.

### Phase 2. Platform Home

- Header.
- Left Navigation.
- Hero.
- AI Assistant.
- Workspace와 Project Card.
- Right Sidebar.

### Phase 3. Core Product Patterns

- AI Prompt Composer와 Agent Run.
- Digital Twin Viewer Shell.
- Knowledge Search와 Graph Summary.
- Marketplace Asset Card.
- Enterprise Approval Flow.

### Phase 4. Validation

- 주요 역할별 사용성 테스트.
- 접근성 및 대비 검사.
- 반응형 Prototype 검증.
- 실제 데이터 기반 Density 검증.
- 디자인과 구현 간 Token 동기화.

---

## 22. 최종 디자인 방향 요약

K-Legonara의 최종 디자인은 참고 대시보드의 안정적인 3열 레이아웃, 카드 시스템, 여백, 정보 계층을 기반으로 한다. 그러나 콘텐츠의 중심은 Creator와 Product가 아니라 AI Assistant, Workspace, Digital Twin, Manufacturing, Knowledge, Marketplace, Enterprise로 이동한다.

브랜드의 핵심 컬러는 Bright Blue와 Bright Green의 인상을 하나로 결합한 Neo Aqua `#22C7B8`다. Hero에서는 Bright Blue `#2EA8FF`에서 Neo Aqua로 이어지는 그라데이션을 사용하고, 전체 화면은 Ice White `#F7FBFC`와 White Surface `#FFFFFF`를 중심으로 밝고 오래 사용할 수 있는 업무 환경을 만든다.

초기 Purple 방향이 일반적인 AI SaaS의 프리미엄 인상을 강조했다면, 최종 Neo Aqua 방향은 K-Legonara의 핵심인 연결된 지능, Digital Twin, 현실 제조, 지속 가능한 성장까지 더 정확하게 표현한다.

향후 모든 화면은 다음 질문으로 검토한다.

> 이 디자인이 복잡한 기술을 더 연결되고, 더 이해하기 쉽고, 더 실행 가능하게 만드는가.

이 질문에 분명히 답할 수 있을 때 K-Legonara의 디자인 철학과 일치한다.
