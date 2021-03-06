## 뱀파이어 서바이버즈 시청자 참여 모드 TPVS

<div align="center">
    
**▼ Multi-language support (Google translated) ▼**

[![ko](https://img.shields.io/badge/lang-ko--kr-green.svg)](https://github.com/nomomo/TwitchPlaysVampireSurvivors/blob/main/README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/nomomo/TwitchPlaysVampireSurvivors/blob/main/README.en.md)
[![ja](https://img.shields.io/badge/lang-ja-blue.svg)](https://github.com/nomomo/TwitchPlaysVampireSurvivors/blob/main/README.ja.md)

</div>

    
---

뱀파이버 서바이버즈의 모드 TPVS 는 **트위치 채팅을 통해 시청자들이 아이템을 투표할 수 있는 기능을 추가합니다.**

모드를 설치하면 레벨 업 시 투표가 자동으로 진행되며, 시청자들은 채팅을 통해 아이템을 선택할 수 있습니다.

<div align="center">
    
![poll](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/1_poll.png)

</div>
    
**극한의 컨트롤**로 방해하는 트수들을 썰어버리고 당신의 실력을 증명하세요!

- **트수런 모드**의 경우 레벨 업 화면에서 스트리머의 키보드 & 마우스 조작은 차단됩니다.
- 투표 종료 후 아이템은 자동으로 선택되어 게임에 반영됩니다.

<div align="center">
    
![tsurun](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/2_tsr.png)
   
</div>

## 선택 가능한 옵션 

메인 페이지에서 플레이 모드를 선택할 수 있습니다.

<div align="center">
    
![Play Mode](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/mode.png)
    
</div>

* 스트리머 아이템 선택 불가 옵션에 체크하면 **트수런 모드**가 됩니다. 
  * 레벨업 화면에서 스트리머의 모든 조작은 차단되며, 투표 종료 후 아이템이 자동 선택됩니다.
  * 뱀서의 권위자에게 트수의 방해따윈 무용하다는 것을 증명하세요.
  * 토토와 함께하면 방해하는 트수들과 역배에 목숨을 건 야수들의 투표 대결을 볼 수 있답니다.
- 스트리머 아이템 선택 불가 옵션을 체크 해제하면 **훈수 모드**가 됩니다.
  - 레벨업 화면에서 스트리머는 투표 결과와 상관 없이 언제나 아이템을 직접 선택할 수 있습니다.
  - 무면허 뱀린이에게 유용할지도...?
* 상세 설정에서 몇 가지 옵션을 설정할 수 있습니다.

<div align="center">
    
![Detail Settings](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/detailSettings.png)
    
</div>

## 모드 설치 방법

본 모드는 22년 6월 20일 기준 뱀파이어 서바이버즈 v0.7.230 버전에서 작동합니다.

1. 아래 링크로 접속해 "Lastest"로 표시된 최신 버전의 모드 압축 파일을 다운로드 받습니다.
[https://github.com/nomomo/TwitchPlaysVampireSurvivors/releases](https://github.com/nomomo/TwitchPlaysVampireSurvivors/releases)

<div align="center">
    
![main_menu_options](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/5_download.png)

</div>
    
2. 다운로드 받은 파일의 압축을 풀고, 생성된 모든 파일을 다음의 폴더에 덮어쓰기 합니다. 기본 설치 경로의 경우 다음과 같습니다.<br />
\steamapps\common\Vampire Survivors\resources\app\.webpack\renderer<br />

<div align="center">
    
![copy_files](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/6_install.png)

</div>

> TIP: Steam 의 게임 실행 페이지에서 [톱니바퀴 버튼] - [관리] - [로컬 파일 보기]를 클릭하여 설치 경로를 조금 더 편하게 찾을 수 있습니다.

<div align="center">
    
![view path](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/view_localfile.png)

</div>
    
3. 메모장으로 TPVS_Settings.json 파일을 열고 "twitch_user_id" 에 해당하는 값을 본인 Twitch ID 로 설정하세요. 아래 그림에서 "pingpink" 라고 적힌 부분을 변경하면 됩니다. (인게임의 상세 설정에서도 변경 가능합니다.)

<div align="center">
    
![set_twitch_id](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/3_settings.png)

</div>

<br />

4. 준비는 끝! 게임을 실행합니다.
    - 게임 실행 후, 화면 좌측 하단에 "TPVS 모드가 성공적으로 초기화 되었습니다"라는 메시지가 나타났다면 정상적으로 모드가 실행된 것입니다.
    - 게임 실행 후 까만 화면이 나타난다면 게임을 끄고 재시작 하세요.

## 알려진 버그

- 게임을 첫 실행한 직후 검은 화면으로 나타나는 경우가 있습니다. 보통 게임을 끄고 재시작하면 해결됩니다.
- 캐릭터 선택 화면에서 메인 화면으로 다시 돌아왔을 때 설정 패널이 나타나지 않는 경우가 있습니다. 이 경우 캐릭터와 맵을 선택하여 게임을 시작하고 바로 중단하여 메인 페이지로 돌아오세요.

## 모드 제거 방법

- 모드를 설치하며 덮어씌웠던 index.html 파일을 삭제하고, index_original.html 파일의 이름을 index.html 로 변경하세요.
- 함께 설치된 TPVS.js 파일과 TPVS_Settings.json 파일은 지우든 안 지우든 상관 없습니다.
- 또는 스팀에서 무결성 검사를 수행하면 덮어씌운 index.html 파일이 원래 내용으로 복구될 것입니다.

## Q&A

- Q: 투표는 어떻게 하나요?<br />A: !투표 1, !2, 2, 2222 등이 모두 투표에 반영됩니다. 22333 과 같이 적은 경우 맨 앞에 적은 숫자인 2가 투표에 반영됩니다.
- Q: 투표한 아이템을 바꿀 수 있나요?<br />A: 투표한 내용은 매 번 갱신되므로, 투표 종료 직전까지 바꿀 수 있습니다.
- Q: 뱀파이버 서바이버즈가 버전업 되면 어떻게 해야하나요?<br />A:모드 파일 중 index.html 파일만 다시 덮어씌우세요.
- Q: 화면 좌측 하단에 "모드 초기화에 실하여 모드가 비활성화 됩니다"라는 메시지가 나타났어요.<br />A: 뱀파이어 서바이버즈의 버전업으로 인하여 모드가 작동하지 않는 상태입니다. 이 경우 제작자 이메일인 nomotg@gmail.com 으로 제보해주세요! (혹은 다른 모드를 설치할 때 main.bundle.js 파일을 덮어씌운 경우 문제가 발생할 수 있습니다.)

## [고급] 게임 중 설정 변경 방법

기본적으로 투표 시간 등의 설정 변경은 메인 화면 TPVS 패널의 상세 설정에서 가능합니다. 하지만 이미 캐릭터와 스테이지를 선택하여 게임 플레이를 시작한 경우라면, **스트리머가 특정 커맨드를 채팅에 입력**하여 플레이 도중에도 설정을 변경할 수 있습니다.

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

- v0.1.4 | 2022-06-20 : 뱀파이어 서바이버즈 v0.7.230 버전에서 제대로 작동하도록 수정
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

## Happy??

<a href="https://www.buymeacoffee.com/nomomo" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" height="60"></a>　<a href="https://toon.at/donate/636947867320352181" target="_blank"><img src="https://raw.githubusercontent.com/nomomo/Addostream/master/assets/toonation_b11.gif" height="60" alt="Donate with Toonation" /></a>
