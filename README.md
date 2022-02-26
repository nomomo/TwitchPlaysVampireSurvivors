# Twitch Plays Vampire Survivors

## _뱀파이어 서바이버 시청자 참여 모드_

혹시 노업 하이퍼 유령런, 사신런을 **정복**하셨나요?<br />
그렇다면 매번 잘못된 훈수만 하는 트수들을 혼내줄 **트수런**에 도전해보세요!

뱀파이버 서바이버의 모드 TPVS 는 **트위치 채팅을 통해 시청자들이 아이템을 투표할 수 있는 기능을 추가합니다.**<br />

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

본 모드는 현재 뱀파이어 서바이버 v0.2.13c 버전에서 작동하도록 개발되었습니다.

1. 아래 링크로 접속해 모드 최신 버전의 압축 파일을 다운로드 받습니다.
[https://github.com/nomomo/TwitchPlaysVampireSurvivors/releases](https://github.com/nomomo/TwitchPlaysVampireSurvivors/releases)
![main_menu_options](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/5_download.png)<br />
위 그림의 경우 Mod 의 버전은 v0.0.1 이고, 뱀파이어 서바이버 v0.2.13c 버전에서 작동한다는 뜻입니다.

2. 압축 해제 후 생성된 모든 파일을 다음의 폴더에 덮어쓰기 합니다.<br />
기본 설치 경로의 경우 다음과 같습니다.<br />
Steam\steamapps\common\Vampire Survivors\resources\app\.webpack\renderer<br />
![copy_files](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/6_install.png)

3. 메모장으로 TPVS_Settings.json 파일을 열고 "twitch_user_id" 를 본인 Twitch ID 로 설정하세요.<br />인게임에서도 변경 가능합니다.<br />
![set_twitch_id](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/3_settings.png)

4. 준비는 끝! 게임을 실행합니다.
    - 게임 실행 후, 화면 좌측 하단에 "TPVS 모드가 성공적으로 초기화 되었습니다"라는 메시지가 나타났다면 정상적으로 모드가 실행된 것입니다.
    - 그 외의 메시지가 나타난 경우, 뱀파이어 서바이버의 버전업으로 인하여 모드가 작동하지 않는 경우이니, 이 경우 제작자 이메일인 nomotg@gmail.com 으로 제보해주세요!
    - 모드가 제대로 작동하지 않거나 오류가 발생하는 경우에도 위 이메일로 제보해주세요!

5. 뱀파이버 서바이버가 버전업 되는 경우, 모드 파일 중 index.html 파일만 다시 덮어씌우면 됩니다.
그런데 버전업 시 모드 수정 없이 기존 모드가 정상 동작할 가능성은 그다지 높지 않습니다.

## 모드 제거 방법

모드를 설치하며 덮어씌웠던 index.html 파일을 삭제하거나, 다른 이름으로 변경하고, index_original.html 파일의 이름을 index.html 로 변경해주기만 하면 됩니다.
함께 설치된 TPVS.js 파일과 TPVS_Settings.json 파일은 지우든 안 지우든 상관 없습니다.

또는 스팀에서 무결성 검사를 수행하면 덮어씌운 index.html 파일이 원래 내용으로 복구될 것입니다.

## Q&A

- Q: 투표는 어떻게 하나요?<br />A: !투표 1, !2, 2, 2222 등이 모두 투표에 반영됩니다. 22333 과 같이 적은 경우 맨 앞에 적은 숫자인 2가 투표에 반영됩니다.
- Q: 투표한 아이템을 바꿀 수 있나요?<br />A: 투표한 내용은 매 번 갱신되므로, 투표 종료 직전까지 바꿀 수 있습니다.

## Change log

- v0.0.3 (2022-02-26): 설정 변경 시 자동 저장 & 옵션 설정 화면 변경
- v0.0.2 (2022-02-25): 투표 종료 시 효과음 추가
- v0.0.1 (2022-02-24): 첫 공개

## 제작자

- NOMO@핑크요정_
- nomotg@gmail.com
- [nomo.asia](https://nomo.asia)
