# Twitch Plays Vampire Survivors - Chat Poll Mod

**Google translated**
厄介な部分がある場合は、情報提供または貢献してください。 or use English version.

[![ko](https://img.shields.io/badge/lang-ko--kr-green.svg)](https://github.com/nomomo/TwitchPlaysVampireSurvivors/blob/main/README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/nomomo/TwitchPlaysVampireSurvivors/blob/main/README.en.md)
[![ja](https://img.shields.io/badge/lang-ja-blue.svg)](https://github.com/nomomo/TwitchPlaysVampireSurvivors/blob/main/README.ja.md)

吸血鬼サバイバーズのモードTPVSは**ツイートチャットを通じて視聴者がアイテムを投票する機能を追加します。**<br />

モードをインストールすると、レベルアップ時に下図のように投票が行われ、<br />
視聴者はチャットでアイテムを選択できます。

![poll](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/1_poll_ja.png)

- **STRICTモード**では、レベルアップシーンでストリーマーのキーボードとマウスの操作がブロックされます。
- 投票が終了すると、アイテムが自動的に選択され、ゲームに反映されます。<br />
![tsurun](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/2_tsr_ja.png)

## 選択可能なオプション

メインページでプレイモードを選択できます。

-「ストリーマーアイテム選択不可オプション」を有効にすると**厳密モード**になり、無効にすると**ソフトモード**になります。
![Play Mode](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/mode_ja.png)

## TPVS Modのインストール方法

1. 以下のリンクにアクセスして、「Lastest」とマークされたmod圧縮ファイルの最新バージョンをダウンロードしてください。
[https://github.com/nomomo/TwitchPlaysVampireSurvivors/releases](https://github.com/nomomo/TwitchPlaysVampireSurvivors/releases)
![main_menu_options](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/5_download.png)

2. zipファイルを解凍し、次のパスにあるすべてのモードファイルを上書きします。<br/>
VSのデフォルトのインストールパスは次のとおりです。<br />
\steamapps\common\Vampire Survivors\resources\app\.webpack\renderer<br />
![copy_files](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/6_install.png)

3. メモ帳でTPVS_Settings.jsonファイルを開き、「twitch_user_id」の値をTwitchIDに設定します。<br/>ゲーム内の設定パネルで変更することもできます。<br/>
<br /> **韓国語でない場合は、「言語」を設定します：「ja」** <br/>
![set_twitch_id](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/3_settings.png)

4. 準備は終わり！ ゲームを実行します。
    - ゲーム実行後、画面左下に「TPVSモードが正常に初期化されました」というメッセージが表示された場合、正常にモードが実行されたのです。
    - 画面左下に「モード初期化に伴いモードが無効になります」というメッセージが表示された場合、吸血鬼サバイバーズのバージョンアップによりモードが動作しない状態です。 その場合は、作成者のメールであるnomotg@gmail.comまでお知らせください！ （または他のモードをインストールするときにmain.bundle.jsファイルを上書きした場合、問題が発生する可能性があります。）
    - モードが正常に動作しない場合やエラーが発生した場合でも、上記のメールでお知らせください！

5. 吸血鬼サバイバーズがバージョンアップされている場合は、モードファイルの中でindex.htmlファイルだけを上書きしてください。 問題発生時にお知らせください！

## Known Bugs

- ゲームを初めて実行した直後、黒い画面で表示されることがあります。 通常、ゲームを再起動すると問題は解決します。
- キャラクター選択シーンからメインシーンに戻ると、設定パネルが表示されない場合があります。 この場合、「オプション」ボタンをクリックすると、設定パネルが再度表示されます。

## TPVSmodを削除する方法

TPVS modのインストール中に上書きされたindex.htmlファイルを削除するか、別の名前に変更して、index_original.htmlファイルの名前をindex.htmlに変更するだけです。
TPVS.jsファイルとTPVS_Settings.jsonファイルを削除するかどうかは関係ありません。

または、Steamで整合性チェックを行います。

## Q&A

-Q：投票するにはどうすればよいですか？<br/> A：！2、2、2222。<br /> 22333の場合、最初の2番が投票に反映されます。
-Q：投票したアイテムを変更できますか？<br/> A：投票したアイテムは毎回更新されるので、投票が終了する前に変更できます。

## Developer

- NOMO@핑크요정
- nomotg@gmail.com
- [nomo.asia](https://nomo.asia)