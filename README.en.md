# Twitch Plays Vampire Survivors - Chat Poll Mod

**Google translated**

[![ko](https://img.shields.io/badge/lang-ko--kr-green.svg)](https://github.com/nomomo/TwitchPlaysVampireSurvivors/blob/main/README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/nomomo/TwitchPlaysVampireSurvivors/blob/main/README.en.md)
[![ja](https://img.shields.io/badge/lang-ja-blue.svg)](https://github.com/nomomo/TwitchPlaysVampireSurvivors/blob/main/README.ja.md)

Vampire Survivors's mod, TPVS, **adds a new feature to VS that allows viewers to vote for items via Twitch chat**.<br />

After installing the mod, when you level up, voting proceeds as shown in the picture below<br />
Viewers can select items via chat.

![poll](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/1_poll_en.png)

- In **STRICT Mode**, the player's keyboard & mouse operation is blocked on the level up scene.
- After voting ends, items are automatically selected and reflected in the game.<br />
![tsurun](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/2_tsr_en.png)

## Selectable options

You can choose your play mode on the main page.

- If you enable "Streamer Item Not Selectable Option", it becomes **Strict Mode**, and if disabled, it becomes **Soft Mode**.
![Play Mode](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/mode_en.png)

## How to install TPVS mod

1. Access the link below and download the latest version of the mod compressed file marked "Lastest".
[https://github.com/nomomo/TwitchPlaysVampireSurvivors/releases](https://github.com/nomomo/TwitchPlaysVampireSurvivors/releases)
![main_menu_options](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/5_download.png)

2. Decompress zip file and overwrite all mode files in the following path.<br />
The default installation path for VS is as follows.<br />
\steamapps\common\Vampire Survivors\resources\app\.webpack\renderer<br />
![copy_files](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/6_install.png)

3. Open the TPVS_Settings.json file with a notepad and set the value for "twitch_user_id" to your Twitch ID.<br />You can also change it in in-game settings panel.<br />
<br />**If you are not Korean, set "language": "en"**<br />
![set_twitch_id](https://raw.githubusercontent.com/nomomo/TwitchPlaysVampireSurvivors/main/images/3_settings.png)

4. Run the game.
    - If the message "TPVS mod has been successfully initialized." appears at the bottom left of the screen after launching the game, the mod has been successfully executed.
    - If the message "TPVS Mod initialization failed." appears at the bottom left of the screen, the mod does not work due to the version upgrade of Vampire Survivors. In this case, please report to the mod developer's email, nomotg@gmail.com! (Or, if you overwrite the main.bundle.js file when installing other mods, problems may occur.)
    - If the mod doesn't work properly or if an error occurs, please report it to the email above!

5. When version of Vampire Survivors is upgraded, you only need to overwrite the index.html file among the mod files.<br />When Vampire Survivors is upgraded, the mod may or may not work properly. Please report any problems!

## Known Bugs

- In some cases, a black screen may appear immediately after launching the game for the first time. Restarting the game usually solves the problem.
- When returning to the main scene from the character select scene, sometimes the settings panel does not appear. In this case, click the "Options" button to show the settings panel again.

## How to remove TPVS mod

Just delete the index.html file that was overwritten while installing TPVS mod, or change it to a different name, and rename the index_original.html file to index.html.
It doesn't matter whether you delete TPVS.js and TPVS_Settings.json files.

Alternatively, do an integrity check on Steam..

## Q&A

- Q: How do I vote?<br />A: !2, 2, 2222.<br />In the case of 22333, the first number 2 is reflected in the poll.
- Q: Can I change the voted item?<br />A: The voted item is updated every time, so you can change it before the end of voting.

## Developer

- NOMO@핑크요정
- nomotg@gmail.com
- [nomo.asia](https://nomo.asia)