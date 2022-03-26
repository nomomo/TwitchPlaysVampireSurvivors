## 뱀파이어 서바이버즈 시청자 참여 모드 TPVS

[![ko](https://img.shields.io/badge/lang-ko--kr-green.svg)](https://github.com/nomomo/TwitchPlaysVampireSurvivors/blob/main/README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/nomomo/TwitchPlaysVampireSurvivors/blob/main/README.en.md)

혹시 노업 하이퍼 유령런, 사신런을 **정복**하셨나요?<br />
그렇다면 매번 잘못된 훈수만 하는 트수들을 혼내줄 **트수런**에 도전해보세요!

뱀파이버 서바이버즈의 모드 TPVS 는 **트위치 채팅을 통해 시청자들이 아이템을 투표할 수 있는 기능을 추가합니다.**<br />

모드를 설치하면 레벨 업 시 아래 그림과 같이 투표가 진행되며<br />
시청자들은 채팅을 통해 아이템을 선택할 수 있습니다.

![poll](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/1_poll.png)

**극한의 컨트롤**로 훈수하는 트수들을 썰어버리고 당신의 실력을 증명하세요!

- **트수런 모드**의 경우 레벨 업 화면에서 스트리머의 키보드 & 마우스 조작은 차단됩니다.
- 투표 종료 후 아이템은 자동으로 선택되어 게임에 반영됩니다.<br />
![tsurun](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/2_tsr.png)

## 선택 가능한 옵션 

메인 페이지에서 플레이 모드를 선택할 수 있습니다.

- 스트리머 아이템 선택 불가 옵션에 체크하면 **트수런 모드**가 됩니다.<br />뱀서의 권위자에게 트수의 훈수따윈 무용하다는 것을 증명할 절호의 찬스입니다.
- 스트리머 아이템 선택 불가 옵션을 체크 해제하면 **훈수 모드**가 됩니다.<br />무면허 뱀린이에게 유용할지도...?<br />
![Play Mode](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/mode.png)
- 상세 설정에서 몇 가지 옵션을 설정할 수 있습니다.<br />
![Detail Settings](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/detailSettings.png)
- 토토와 함께하면 더욱 재밌어요

## 모드 설치 방법

본 모드는 22년 3월 26일 오후 11시 기준 뱀파이어 서바이버즈 v0.3.2c 버전에서 작동합니다.

1. 아래 링크로 접속해 "Lastest"로 표시된 최신 버전의 모드 압축 파일을 다운로드 받습니다.
[https://github.com/nomomo/TwitchPlaysVampireSurvivors/releases](https://github.com/nomomo/TwitchPlaysVampireSurvivors/releases)
![main_menu_options](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/5_download.png)

2. 압축 해제 후 생성된 모든 파일을 다음의 폴더에 덮어쓰기 합니다.<br />
기본 설치 경로의 경우 다음과 같습니다.<br />
\steamapps\common\Vampire Survivors\resources\app\.webpack\renderer<br />
![copy_files](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/6_install.png)

3. 메모장으로 TPVS_Settings.json 파일을 열고 "twitch_user_id" 에 해당하는 값을 본인 Twitch ID 로 설정하세요.<br />아래 그림에서 "pingpink" 라고 적힌 부분을 변경하면 됩니다.<br />인게임의 상세 설정에서도 변경 가능합니다.<br />
![set_twitch_id](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/3_settings.png)

4. 준비는 끝! 게임을 실행합니다.
    - 게임 실행 후, 화면 좌측 하단에 "TPVS 모드가 성공적으로 초기화 되었습니다"라는 메시지가 나타났다면 정상적으로 모드가 실행된 것입니다.
    - 화면 좌측 하단에 "모드 초기화에 실하여 모드가 비활성화 됩니다"라는 메시지가 나타난 경우, 뱀파이어 서바이버즈의 버전업으로 인하여 모드가 작동하지 않는 상태입니다. 이 경우 제작자 이메일인 nomotg@gmail.com 으로 제보해주세요! (혹은 다른 모드를 설치할 때 main.bundle.js 파일을 덮어씌운 경우 문제가 발생할 수 있습니다.)
    - 모드가 제대로 작동하지 않거나 오류가 발생하는 경우에도 위 이메일로 제보해주세요!

5. 뱀파이버 서바이버즈가 버전업 되는 경우, 모드 파일 중 index.html 파일만 다시 덮어씌우면 됩니다.<br />뱀파이어 서바이버즈 버전업 시에도 모드가 정상 동작할 수도 있고, 그렇지 못할 수도 있습니다. 문제 발생 시 제보해주세요!

## 알려진 버그

- 캐릭터 선택 화면에서 메인 화면으로 다시 돌아왔을 때 설정 패널이 나타나지 않는 경우가 있습니다. 이 때는 "옵션" 버튼을 누르면 설정 패널이 다시 나타납니다.

## 모드 제거 방법

모드를 설치하며 덮어씌웠던 index.html 파일을 삭제하거나, 다른 이름으로 변경하고, index_original.html 파일의 이름을 index.html 로 변경해주기만 하면 됩니다.
함께 설치된 TPVS.js 파일과 TPVS_Settings.json 파일은 지우든 안 지우든 상관 없습니다.

또는 스팀에서 무결성 검사를 수행하면 덮어씌운 index.html 파일이 원래 내용으로 복구될 것입니다.

## Q&A

- Q: 투표는 어떻게 하나요?<br />A: !투표 1, !2, 2, 2222 등이 모두 투표에 반영됩니다. 22333 과 같이 적은 경우 맨 앞에 적은 숫자인 2가 투표에 반영됩니다.
- Q: 투표한 아이템을 바꿀 수 있나요?<br />A: 투표한 내용은 매 번 갱신되므로, 투표 종료 직전까지 바꿀 수 있습니다.

## 게임 중 설정 변경 방법

기본적으로 투표 시간 등의 설정 변경은 메인 화면 TPVS 패널의 상세 설정에서 가능합니다. 하지만 이미 캐릭터와 스테이지를 선택하여 게임 플레이를 시작한 경우라면, 스트리머가 다음의 커맨드를 채팅에 입력하여 플레이 도중에도 설정을 변경할 수 있습니다.

투표 시간이 너무 길어 게임이 루즈해지는 경우, 아래 커맨드를 사용하여 투표 시간을 짧게 재설정할 수 있습니다. 당신이 트수라면 스트리머에게 커맨드를 알려주세요!

알 수 없는 에러를 방지를 위하여 투표 중에는 설정을 변경할 수 없습니다. 대소문자는 구분하지 않습니다.

### 유용할 수도 있는 커맨드

- 투표 진행 시간 변경: !TPVS SetTime 숫자(초). 예) !TPVS SetTime 10
- 투표 종료 후 결과 보여주는 시간 변경: !TPVS SetEndTime 숫자(초). 예) !TPVS SetEndTime 5
- 다음 커맨드를 입력한 판에 한하여, 투표 중 스트리머의 키보드 및 마우스 조작을 금지하지 않음: !TPVS unlock

### 그 외 몰라도 좋은 커맨드

- 투표 중 진행상황 보이기: !TPVS ShowResult ON
- 투표 중 진행상황 숨기기: !TPVS ShowResult OFF
- 구독자 전용 투표 On: !TPVS SubOnly ON
- 구독자 전용 투표 Off: !TPVS SubOnly OFF
- 골드와 치킨에 대해 투표하지 않음 On: !TPVS SkipChicken ON
- 골드와 치킨에 대해 투표하지 않음 Off: !TPVS SkipChicken OFF
- 효과음 켜기/끄기 On/Off: !TPVS sfx ON 또는 !TPVS sfx OFF
- !TPVS unlock 커맨드 취소: !TPVS lock

## Change log

- v0.1.3 | 2022-03-26 : 아이템 지우기에 대한 투표 기능 추가
- v0.1.2 | 2022-03-23 : 버그 수정, 게임 도중 설정 변경을 위한 커맨드 추가
- v0.1.1 | 2022-03-21 : 필드 아이템 발견 시 무조건 획득하기가 선택되는 문제 수정
- v0.1.0 | 2022-03-12 : 트수런 모드에서 선택 가능한 아이템이 1개 남은 이후 루즈해지는 문제를 개선
- v0.0.9 | 2022-03-08 : 선택된 항목에 가장 먼저 투표한 닉네임을 잘못 표시하는 문제 수정
- v0.0.8 | 2022-03-07 : 투표율 기반 아이템 랜덤 선택 옵션 추가
- v0.0.7 | 2022-03-06 : 22년 3월 6일자 v0.3.0c 버전에 호환되도록 수정
- v0.0.6 | 2022-03-05 : 유제품 공장 맵에서 무기 발견 시 획득하기 & 버리기에 대한 투표 기능 추가
- v0.0.5 | 2022-03-05 : 메인 화면으로 돌아왔을 때 인포 패널이 다시 보이지 않는 버그 수정 및 패널 디자인 수정
- v0.0.4 | 2022-03-04 : v0.3.0c 버전에 호환되도록 수정
- v0.0.3 | 2022-02-26 : 설정 변경 시 자동 저장 & 옵션 설정 화면 변경
- v0.0.2 | 2022-02-25 : 투표 종료 시 효과음 추가
- v0.0.1 | 2022-02-24 : 첫 공개

## 제작자

- NOMO@핑크요정_
- nomotg@gmail.com
- [nomo.asia](https://nomo.asia)
