<template>
  <details>
    <summary>Christmas Tree Coding Event</summary>
    <a
      href="https://github.com/stem-discord/public/blob/main/events/2021-12-19_christmas%20tree%20code.md"
      >More details here</a
    >
    <ul>
      <li
        v-for="(user, idx) in scores"
        v-bind:key="user.id"
        style="display: flex; flex-direction: row"
      >
        <p>
          <b>#{{ idx + 1 }}.</b>
        </p>
        <div class="w-1"></div>
        <p>{{ user.username }}</p>
        <div class="flex flex-col justify-end">
          <p style="font-size: 0.5rem; align-self: flex-end">
            #{{ user.discriminator }}
          </p>
        </div>
        <div class="w-4"></div>
        <i class="fas fa-arrow-right"></i>
        <div class="w-4"></div>

        <p>score: {{ user.score }}</p>
      </li>
    </ul>
  </details>
</template>

<script>
import { ref } from "vue";

const treeData = {
  trees: {
    "341446613056880641": {
      title: `Merry Christmas`,
      stdout: `==>======⍟...\n  >>.#*\n  >\n ..\n ##\n **.\n\n .#\n  >..#.\n  ..**\n=========⍟*\n  >>**####\n  >\n\n ....\n\n *.\n *#\n              \\\\**#\n               \\\\.##.*\n================\\\\*#*.##*\n                 \\\\*#.#*.\n                  \\\\.*.\n-------|           \\\\.#.#***\n       |            ⍟####*\n-------|           //.*.#.#\n                  //.#*#*\n                 //##.*#.\n================//*..\n               //**#*\n              //*#.#.*\n #*\n #\n ##\n  >#*\n  >>  >*.#*.\n===.==========⍟*...*\n  .>  .#.*\n  .#\n ##\n *\n  >.\n  >.*##*\n==.>=====⍟.\n  >>.  >  >  .*.#*\n==>.>==>==>========⍟*..#*\n  >.>  .  .  >.**.##\n  >..    .    >*.*\n  >..>   .>   >.   .   .*##*.\n  >...>  .>>  >>>  >.  ..  .  .  >*.##.\n==>=>>>==>>===>.===>.==>===>=====.=====⍟#.###*#..#*.\n  ..>..  ...  ...  >>  >.  .  .  .#...#**.#.#*\n  ....   >>   ..   >   >*#.####\n  ...   >.    .##.\n  >>.>  >.  >  >  >*\n==>..===================⍟#**\n  >>>.  .>  .  .  >.*.\n  >>>   >*#.##\n  .>*##.###\n  >.\n **\n ##\n .*\n .\n *\n #\n ..#\n ..\n                  \\\\*..*##\n                   \\\\.#**.\n====================\\\\###\n                     \\\\###\n                      \\\\.*....#.\n                       \\\\*#\n-------|                \\\\..*##.*#*#\n       |                 ⍟.*..#*##.#..###\n-------|                //.*#..\n                       //.#\n                      //.##.#*#.*#*\n                     //.\n====================//#.#..**.#\n                   //.*****\n                  //.##\n #*#\n #\n *.#\n ..#\n\n\n .\n .\n #.*.*\n #.#.\n .\n *#**.\n .#..\n *\n\n  >##\n  >..*\n`,
      votes: {
        "341446613056880641": 1,
        "787184437196095528": -1,
        "475543411705774082": 1,
        "879324777809080320": 1,
        "789206881968193569": -1,
        "715232864404504676": -1,
        "585943340202065958": -1,
        "572796721730682881": -1,
        "808613099586060289": 1,
        "249992802933538816": 1,
        "889923799116550154": 1,
        "675274456867930112": 1,
        "423483200036274178": 1,
      },
    },
    "220327217312432129": {
      title: `Test`,
      stdout: `Hello Doo Doo Head\n`,
      votes: {
        "341446613056880641": -1,
        "220327217312432129": 1,
        "787184437196095528": -1,
        "316481084835495937": -1,
        "329730235614363648": -1,
        "715232864404504676": -1,
        "572796721730682881": -1,
        "741404079774761030": -1,
        "389482537329623040": -1,
        "249992802933538816": -1,
        "889923799116550154": -1,
      },
    },
    "429268128296468500": {
      title: `tree`,
      stdout: `Unrecognizable output`,
      votes: {
        "341446613056880641": -1,
        "787184437196095528": -1,
        "316481084835495937": -1,
        "329730235614363648": -1,
        "715232864404504676": -1,
        "572796721730682881": -1,
        "741404079774761030": -1,
        "389482537329623040": -1,
        "249992802933538816": -1,
      },
    },
    "353305252633772052": {
      title: `test`,
      stdout: `test\n`,
      votes: {
        "341446613056880641": -1,
        "787184437196095528": -1,
        "316481084835495937": -1,
        "329730235614363648": -1,
        "715232864404504676": -1,
        "585943340202065958": -1,
        "572796721730682881": -1,
        "741404079774761030": -1,
        "389482537329623040": -1,
        "249992802933538816": -1,
      },
    },
    "589261729289207810": {
      title: `Hello`,
      stdout: `Unrecognizable output`,
      votes: {
        "341446613056880641": -1,
        "220327217312432129": -1,
        "787184437196095528": -1,
        "316481084835495937": -1,
        "329730235614363648": -1,
        "715232864404504676": -1,
        "585943340202065958": -1,
        "572796721730682881": -1,
        "741404079774761030": -1,
        "389482537329623040": -1,
        "249992802933538816": -1,
      },
    },
    "275449332960854016": {
      title: `:rooAyyye:`,
      stdout: `3\n`,
      votes: {
        "341446613056880641": -1,
        "787184437196095528": -1,
        "316481084835495937": -1,
        "329730235614363648": -1,
        "715232864404504676": -1,
        "585943340202065958": -1,
        "572796721730682881": -1,
        "741404079774761030": -1,
        "389482537329623040": -1,
        "249992802933538816": -1,
      },
    },
    "632929247173804081": {
      title: `Merry Christmas from chonky MLEM`,
      stdout: `                    O         *        *\n            *      uwu           *\n     *            owowo *          *     *\n  *          *  wOwOwOwOw\n              UWUWUWUWUWUW\n                  wuwuw\n*   *           *wowowow    *     *\n      *        wUwUwUwUwUw \n   *   *  OwOwOwOwOwOwOwOwOwOwO   *           *\n      UWUWUWUWUWUWUWUWUWUWUWUWUWUWU        *      \n                uwuwuwuwu\n               owowowowowo    *      *    \n   *          UwUwUwUwUwUwU *        *    *\n*       * WuWuWuWuWuWuWuWuWuWuW   *    *\n      WOWOWOWOWOWOWOWOWOWOWOWOWOWOW\nWUWUWUWUWUWUWUUWUWUWUWUWUWUWUWUWUWUWUWUWUWUW\n                   |||\n                *  |||    Λ_____Λ\n       *           |||   / u ω u \\ \n *             *   |||   \\       / \n    *        *     |||   /===Ω===\\   //\n        *          |||  /         \\  ||\n  *         *      |||  \\         /__//\n___________________|||__(~~~~~~~~~)\n`,
      votes: {
        "341446613056880641": 1,
        "220327217312432129": 1,
        "787184437196095528": 1,
        "789206881968193569": -1,
        "715232864404504676": -1,
        "585943340202065958": -1,
        "572796721730682881": -1,
        "741404079774761030": 1,
        "389482537329623040": -1,
        "249992802933538816": 1,
        "889923799116550154": 1,
        "569682414914240537": 1,
      },
    },
    "805903287723229294": {
      title: `christmas tree`,
      stdout: `\n         * \n        /|\\                  \n       /*|O\\\n      /*/|\\*\\\n     /X/O|*\\X\\\n    /*/X/|\\X\\*\\\n   /O/*/X|*\\O\\X\\             \n  /*/O/X/|\\X\\O\\*\\\n /X/O/*/X|O\\X\\*\\O\\\n/O/X/*/O/|\\X\\*\\O\\X\\\n        |X|      \n        |X|    \n\n`,
      votes: {
        "341446613056880641": -1,
        "787184437196095528": 1,
        "316481084835495937": -1,
        "329730235614363648": 1,
        "879324777809080320": 1,
        "715232864404504676": -1,
        "585943340202065958": -1,
        "572796721730682881": -1,
        "249992802933538816": -1,
      },
    },
    "807650708530397215": {
      title: `merry crisis`,
      stdout: `\n          .     .  .      +     .      .          .\n     .       .      .     #       .           .\n        .      .         ###            .      .      .\n      .      .   ^#:. .:##^##:. .:#^  .      .\n          .      . ^####^###^####^  .\n       .     ^#:.    .:#^###^#:.    .:#^  .        .       .\n  .             ^#########^#########^        .        .\n        .    ^#:.  ^####^###^####^  .:#^   .       .\n     .     .  ^#######^^##^##^^#######^                  .\n                .^##^#####^#####^##^           .      .\n    .   ^#:. ...  .:##^###^###^##:.  ... .:#^     .\n      .     ^#######^##^#####^##^#######^      .     .\n    .    .     ^#####^^#######^^#####^    .      .\n            .     ^      000      ^    .     .\n       .         .   .   000     .        .       .\n.. .. ..................O000O........................ ......\n`,
      votes: {
        "787184437196095528": 1,
        "879324777809080320": 1,
        "789206881968193569": -1,
        "585943340202065958": -1,
        "572796721730682881": -1,
        "249992802933538816": 1,
        "889923799116550154": 1,
      },
    },
    "585943340202065958": {
      title: `Who doesn't?`,
      stdout: `               i \n              i l \n             i l o \n            i l o v \n           i l o v e \n          i l o v e s \n         i l o v e s t \n        i l o v e s t e \n       i l o v e s t e m \n      i l o v e s t e m h \n     i l o v e s t e m h e \n    i l o v e s t e m h e l \n   i l o v e s t e m h e l p \n  i l o v e s t e m h e l p e \n i l o v e s t e m h e l p e r \ni l o v e s t e m h e l p e r s \n               ||\n               ||\n               ||\n               ||\n               ||\n`,
      votes: {
        "787184437196095528": 1,
        "329730235614363648": 1,
        "879324777809080320": 1,
        "789206881968193569": -1,
        "715232864404504676": -1,
        "585943340202065958": 1,
        "572796721730682881": 1,
        "808613099586060289": -1,
        "389482537329623040": -1,
        "249992802933538816": -1,
      },
    },
    "763966215261126676": {
      title: `k`,
      stdout: `# THIS CODE DID NOT RUN FROM PISTON\n                                                   \n                                     ⠇⡱            \n                                    ⠑⢿⣢⠰           \n                                   ⠐⣟⣿⣔⡿⠐          \n                                   ⢙⣾⣌⣸⢏⣈          \n                                   ⢈⣿⣿⣿⣜⡓⠐         \n                                  ⡳⠵⢘⣻⣯⣿⣿⠐         \n                                ⣌⡅⣿⣼⣫⢿⣼⣎⣿⣾⣮⣈       \n                               ⠐⠄⣿⢑⢟⣷⡾⣿⣿⣿⢿⡷⠠       \n                              ⠈⠧⠷⣌⡆⣿⣳⢧⣻⢟⣞⣨⠑⠁⠐      \n                                ⠣⣟⣿⣿⠑⢏⣿⣿⣿⡿⡾⢈       \n                               ⠓⠿⣻⢳⢿⣿⣿⣷⣣⠿⣿⣷⡿⣱⠑     \n                             ⠂⠧⣿⣼⣌⣿⣿⣿⢁⠗⡿⣿⣻⢎⣿⣿⣶⡠    \n       ⠁               ⠁⣸⢌⢌  ⠿⡷⣿⣶⢜⣌⣎⡿⣎⣾⣮⡣⢿⡿⣧⡿⠁⠳⡶   \n       ⠍⢱ ⠑⠡       ⠁ ⠢⣌⡳⣡ ⢃⠳⣓⣾⢿⣾⣿⡽⡷⡿⣣⠽⡣⡱⢟⣩⣿⣬⢊⣬⡢    \n    ⠁ ⠍⣷⠳⡟⣳⠭⣄⠒⠲⠢⠣⠣⠣⠦⡄⡀    ⣿⣿⣾⣶⣯⣿⡿⣿⣿⣾⣬⣿⣿⣝⣻⢿⣿⣷⣻⣷⣷    \n    ⠌⠒⡾⡀⠙⢀⢀  ⠌⡢⡔⠓ ⠁⠰ ⠁⠐    ⢃⣿⣷⡻⣿⣿⣮⢿⢳⠑⡌⢏⣽⠌⣟⣛⣿⣿⢙⠓    \n   ⡠⠩⢡⠃⡿⠳⣱⠑⠁   ⠄ ⣀⠈⠈ ⡀⣌⠱⠐  ⣬⣌⣎⣿⡻⣷⡬⣯⣿⣿⣻⡿⣿⣿⣿⣾⣿⣿⣿⣮⢌   \n   ⢏⢔⣦⡞⣭⣿⣮⢎ ⠤⢆⠠         ⢈⢷⠱⠕⡳⠷⠳⠫⣿⡿⣿⣿⢿⣿⣨⢌⣏⣿⣿⣿⣿⣿⢷ ⠁  \n       ⢀                  ⣯⣫⣎⣯⣿⡿⣿⣮⣽⣿⣿⣿⣿⣿⣿⣿⣢⠃⣿⣾⣋⡿⣿⣈ \n                        ⠑⠳⣲⣿⡷⡿⣿⣽⣿⣿⣿⣿⣿⣿⣝⣿⣿⣿⢜⣿⢷⣿⡀⣎⣚⢿⣤\n             ⠐⢀⣁        ⣷⣬⣝⡻⣾⣿⣿⡢⠃⠿⣿⣿⠐⠁⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣜⠂\n         ⠃⠳⡄⠓⢳⠳⠿⠢⡄⡃⠰   ⠂⠱⠙⡿⣯⣿⡽⣷⣿⡿⣻⣿⣿⣷⡯⣿⣛⢾⣯⣻⠱⠛⣿⡿⣾⣏⣿⣿\n     ⠁⠑⠂⠳⠏⣿ ⣿⣿⣿⣿⣠ ⠏⣰ ⠳⠷⡳⡷⣿⣷⠳⢟⣿⣿⣾⣿⣑⢕⣿⣿⣿⢱⠈ ⠢⢀⢌⣮⣿⣷⡳⣑⣮⣎\n    ⠂⠻⠿⡦⡳⣶⣯ ⣿⣿⣿⣿⡠⠑⠟⣱⠾⣟⠷⣮⣜⣽⣛⣿⣿⣝⣟⣛⡻⢴⣿⢮⣮ ⡄⠄⢆⡷⡿⢲ ⣿⣯⡷⣙⠐⠂\n ⠃⠠⠳⡼⡈⣄⡄⡌⣄⣋⠳⢎⣮⣿⣿⡝⣪⠮⠝⣟⣝⣝⣿⣝⠌⣮⣮⣯⣿⣿⢃⠳⡟⣾   ⢀⠎⢱⢙⣿⠿ ⣿⣿⣿⣿⣿⣾\n ⠈ ⠿⣰    ⠠⠿⣈ ⡐⠁⠨⣣⠄⣿⣰     ⠟⣰⠊⠓⣈⠈⢈⢈⢈⠐⠫⣟⣿⣷⡷⣭⢿⣿⣿⡁⣿⣿⣼⢈⣎⣳\n  ⡀⣿⣰    ⡷⣨⠇⢷⠳⠿⠰⢈⣿⣿⣳⡧⡠⠄⡵⡰⡿⣿⡳⠈  ⠁ ⠱⠗⡿⣿⣯⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⢄⡷⣿\n   ⣿⣰   ⠁⣟⣀⠮⣮⣜⣉⡀ ⣏⣿⣹⠑⡩⠞⣢ ⢯⣿ ⠁ ⠃⠐⠈⢇⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣌⢹⡖⢑⡰⠌⣈\n ⠳ ⣿⣰   ⠎⣯⣀⠃⠐⣭⡳⠑ ⢝⣿⣷⢝⢣⣾⣈⠰⣿⣿⠓⡿⣿⣿⣷⡷⡷⣿⢟⡯⣿⣿⣯⣿⣿⢈⢀⢀⠈⢀ ⢯⠐⡆\n ⢈⡄⣮⣢⠢⠣⠳⠹⣍ ⠆⠐⠁⡑⢀ ⣯⣜⣌⣌⣌⣌⣌⣈⣈⣈⣎⢏⣿⣿⣿⣟⣿⣌⣿⠃⣿⣿⠫⢿⣿ ⠇⣰⠃ ⠰⣿⣰⠲\n       ⠈⢈⣌⣄⠆⡌⣄⠄⠄⡀⢈           ⢈⢌⢈⣌⢌⣌⣮⣯⣮⣤⣬⣌⣌⣀ ⣠ ⣌⣌⣌⣈⢈`,
      votes: {
        "787184437196095528": -1,
        "789206881968193569": -1,
        "715232864404504676": -1,
        "585943340202065958": -1,
        "572796721730682881": -1,
        "249992802933538816": -1,
        "569682414914240537": -1,
      },
    },
    "715861939842056233": {
      title: `coding bells, coding bells - coding all the way`,
      stdout: `       *    * █    * *       \n             █ █        *    \n   * *      █ O █ *  *   *   \n        *  █    O█           \n     *    ███   ███      *   \n            █  O█            \n           █    O█  *        \n*   **    █O      █    *   * \n **   * *█      O  █         \n     *   █         █         \n        █     OO  O █        \n       █       O  O  █      *\n  *   ███        O  ███      \n *      █ O  O O    █   *    \n       █             █       \n *   *█               █  *   \n*    █ O O      O   O  █     \n   *█  O    O  O O  OO  █    \n   █  O                  █   \n *█████████████████████████  \n             ▒ ▒             \n             ▒ ▒             \n             ▒▒▒             \n`,
      hide: true,
      votes: {
        "787184437196095528": -1,
        "879324777809080320": 1,
        "340593676801802250": 1,
        "789206881968193569": 1,
        "715232864404504676": 1,
        "152836174115766272": 1,
        "572796721730682881": -1,
        "808613099586060289": 1,
        "585943340202065958": -1,
        "389482537329623040": -1,
        "249992802933538816": -1,
      },
    },
    "191689350881345536": {
      title: `Binary Christmas Tree`,
      stdout: `                     013\n                     / \\\n                    /   \\\n                   /     \\\n                  /       \\\n                 /         \\\n                /           \\\n               /             \\\n              /               \\\n             /                 \\\n            /                   \\\n           /                     \\\n          /                       \\\n         002                     089\n         / \\                     / \\\n        /   \\                   /   \\\n       /     \\                 /     \\\n      /       \\               /       \\\n     /         \\             /         \\\n    /           \\           /           \\\n   001         005         034         233\n   / \\         / \\         / \\         / \\\n  /   \\       /   \\       /   \\       /   \\\n /     \\     /     \\     /     \\     /     \\\n000   001   003   008   021   055   144   377\n---------------------------------------------\n                   |     |\n                   |     |\n                   |     |\n                   |     |\n                   -------\n`,
      hide: true,
      votes: {
        "341446613056880641": 1,
        "787184437196095528": 1,
        "329730235614363648": 1,
        "789206881968193569": -1,
        "715232864404504676": -1,
        "572796721730682881": -1,
        "249992802933538816": 1,
      },
    },
    "752168910102724649": {
      title: `Merry Christmas!`,
      stdout: `           *        *          *\n     *            *****     *       *\n                   * *        *            *\n           *      *   *               *\n    *               *          *\n        *          ***              *  *\n   *              MERRY         *\n     *        *  *******\n                CHRISTMAS         *\n          *    ***********   *\n*       *     HAPPY********     *       *\n   *         ***************     *\n  *         HOLIDAYS!!*******       *\n    *             ****        *\n                  ****\n      *           ****      *     *\n                  ****\n^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n`,
      hide: false,
      votes: {
        "787184437196095528": 1,
        "715232864404504676": -1,
        "572796721730682881": -1,
        "741404079774761030": 1,
        "249992802933538816": -1,
      },
    },
    "316481084835495937": {
      title: `Tree with adjustable size :) merry christmas!`,
      stdout: `*                      *          *          **      *      **    *             \n         *         * *                          ****             *    *  *      \n *   *    *       *       *   *  *      *              *      *                *\n         *                    **     *    *                 *                *  \n             **         ** ***     *   ?*             **    * *  *             \n  *  *          *   **               ?????                       *   *         \n                       *  * *      ?????????     *                     *  *    \n *                     * *   *   ?????????????  *     *                    *   \n       *                       ?????????????????                 *   *         \n           **   *            ?????????????????????           *   *             \n                           ?????????????????????????  *             *      *   \n   *  *                  ?????????????????????????????     *         *         \n             *    *   *?????????????????????????????????*     *    *           \n* *                  ?????????????????????????????????????                     \n                              ????????????????????          * *                 \n                **          ????????????????????????      *         *   *       \n    *   *    *   *        ????????????????????????????**   *  *     *           \n  *                     ????????????????????????????????         *    *         \n       *         *    ???????????????????????????????????? *                 *  \n * *   *        *             ????????????????????                 *    *    *  \n        *          *  * *   ????????????????????????      * **                  \n     **                  *???????????????????????????? *  *                *    \n               *     *  ????????????????????????????????   *           **  *  * \n*               *     ????????????????????????????????????                *     \n                             *    ############  * *                      *      \n            *                   * ############    **      *                    *\n  *    *    *         **          ############   *                          *   \n         *   *        *       *  *############                      *         **\n                                  ############ *           *                  * \n    *  *                          ############      *            *              \n      *  *     *                  ############*            *       *   *        \n*                       *  *      ############                 *  *     *       \n????????????????????????????????????????????????????????????????????????????????\n`,
      hide: false,
      votes: {
        "316481084835495937": 1,
        "341446613056880641": 1,
        "787184437196095528": 1,
        "879324777809080320": 1,
        "789206881968193569": -1,
        "715232864404504676": -1,
        "572796721730682881": -1,
        "741404079774761030": 1,
        "808613099586060289": -1,
        "249992802933538816": -1,
        "889923799116550154": 1,
      },
    },
    "293076681890201600": {
      title: `C raytraced tree (with color)`,
      stdout: `                    \u001b[32m:                   \n                   \u001b[31m:::                  \n                  \u001b[32m:\u001b[31m:::\u001b[32m:                 \n                  ;\u001b[31m:::\u001b[32m:                 \n                 \u001b[31m;\u001b[32m;::,:\u001b[31m:                \n                 ;;\u001b[32m::,\u001b[31m,:                \n                \u001b[32m;\u001b[31m;;;\u001b[32m:\u001b[31m:,:\u001b[32m:               \n               +;+\u001b[31m::::,\u001b[32m,::              \n               +;;;\u001b[31m:::\u001b[32m,,:,              \n              \u001b[31m+;+\u001b[32m;;::::,\u001b[31m,:,             \n              o\u001b[32m+\u001b[31m++\u001b[32m;;;::\u001b[31m,,\u001b[32m.\u001b[31m,             \n             \u001b[32m+\u001b[31m+\u001b[32m+\u001b[31m+;;\u001b[32m;:;\u001b[31m,,,\u001b[32m.\u001b[31m.\u001b[32m,            \n             x\u001b[31mo\u001b[32moo\u001b[31m+;;::,,\u001b[32m,,\u001b[31m.\u001b[32m.            \n            \u001b[31m+\u001b[32mo\u001b[31mo\u001b[32m++\u001b[31m;;;::::\u001b[32m,,\u001b[31m.\u001b[32m.\u001b[31m,           \n           +x\u001b[32mo\u001b[31mxx\u001b[32m++;\u001b[31m;;:\u001b[32m,,,\u001b[31m.,\u001b[32m.\u001b[31m.:          \n           \u001b[32m+\u001b[31mx\u001b[32mo\u001b[31m+o\u001b[32m;;+;;::,:\u001b[31m.,\u001b[32m.\u001b[31m.\u001b[32m:          \n          xx\u001b[31mx\u001b[32mxx\u001b[31mo++\u001b[32m+;:::\u001b[31m,,,\u001b[32m.,\u001b[31m.\u001b[32m.,         \n          &x\u001b[31mx\u001b[32m+x\u001b[31m+o++;;::,,,\u001b[32m.,\u001b[31m.\u001b[32m..         \n         \u001b[31mxx\u001b[32mx\u001b[31mx%\u001b[32moo\u001b[31m+++;;::::\u001b[32m..\u001b[31m.,\u001b[32m.\u001b[31m,,        \n        \u001b[32m%\u001b[31m%x\u001b[32mx\u001b[31m+x\u001b[32moxo+\u001b[31m+;;::\u001b[32m,,,,\u001b[31m.;\u001b[32m.\u001b[31m..\u001b[32m,       \n        %o\u001b[31mx\u001b[32mx&\u001b[31mx%\u001b[32m++o+;;::,,,\u001b[31m..\u001b[32m.,\u001b[31m.\u001b[32m;,       \n       \u001b[31m#\u001b[32m&x\u001b[31m%&\u001b[32m%\u001b[31mxxx\u001b[32moo++;;:::\u001b[31m..,\u001b[32m.\u001b[31m..\u001b[32m,.\u001b[31m.      \n       x\u001b[32m@%\u001b[31mo%\u001b[32mx%\u001b[31mxxo\u001b[32m+;;;;:;\u001b[31m,,,\u001b[32m..\u001b[31m.:\u001b[32m,.\u001b[31m:      \n      x&\u001b[32m#x#\u001b[31m&\u001b[32mo%%\u001b[31mxoo++;;:,,,\u001b[32m..,\u001b[31m.\u001b[32m.,.\u001b[31m.:     \n      ##\u001b[32m@\u001b[31m@\u001b[32m&\u001b[31m%&\u001b[32mxxx\u001b[31mo++;;::::\u001b[32m...\u001b[31m..\u001b[32m.\u001b[31m.\u001b[32m.\u001b[31m..     \n     \u001b[32m&#\u001b[31m@\u001b[32m#\u001b[31m@\u001b[32m&\u001b[31mx%\u001b[32m+xxo\u001b[31m+++;;::\u001b[32m,,.:\u001b[31m..\u001b[32m.\u001b[31m.\u001b[32m.\u001b[31m.\u001b[32m.,    \n    \u001b[31m#\u001b[32m@@\u001b[31m@\u001b[32m@\u001b[31m#\u001b[32m&&\u001b[31m%%\u001b[32mxxoo++;;::,,:\u001b[31m..\u001b[32m..\u001b[31m.\u001b[32m.\u001b[31m.\u001b[32m..\u001b[31m.   \n    %#\u001b[32m@\u001b[31m@\u001b[32m@\u001b[31m#\u001b[32m%&\u001b[31mx%%\u001b[32moo++++;::,:\u001b[31m..,\u001b[32m..\u001b[31m.\u001b[32m.\u001b[31m.\u001b[32m.\u001b[31m.,   \n   \u001b[32m@\u001b[31m@@\u001b[32m@\u001b[31m@\u001b[32m#\u001b[31m##\u001b[32m&&\u001b[31mx%xx\u001b[32m+++;;::\u001b[31m,,..\u001b[32m..\u001b[31m..\u001b[32m.\u001b[31m.\u001b[32m.\u001b[31m..\u001b[32m.  \n   x#\u001b[31m@\u001b[32m@\u001b[31m@\u001b[32m@\u001b[31m&#\u001b[32m%%&\u001b[31mxxxoo++;::,,,\u001b[32m...\u001b[31m..\u001b[32m.\u001b[31m.\u001b[32m.\u001b[31m.\u001b[32m.,  \n  \u001b[31m@\u001b[32m@@\u001b[31m@\u001b[32m@\u001b[31m@\u001b[32m#@\u001b[31m&#\u001b[32m%&%\u001b[31moooo++;::,,\u001b[32m...\u001b[31m..\u001b[32m..\u001b[31m.\u001b[32m.\u001b[31m.\u001b[32m..\u001b[31m. \n \u001b[32m#\u001b[31mx@\u001b[32m@\u001b[31m@\u001b[32m@\u001b[31m@\u001b[32m&@\u001b[31m#&\u001b[32mo%%%\u001b[31m+oo+;;;:;\u001b[32m,..,\u001b[31m..\u001b[32m..\u001b[31m.\u001b[32m.\u001b[31m.\u001b[32m.\u001b[31m.;\u001b[32m.\n @\u001b[31m@@\u001b[32m@\u001b[31m@\u001b[32m@\u001b[31m@@\u001b[32m@\u001b[31mx&#\u001b[32mx%%xoo\u001b[31m+++\u001b[32m::,,,,\u001b[31m..:\u001b[32m.\u001b[31m..\u001b[32m.\u001b[31m.\u001b[32m.\u001b[31m..\u001b[32m.\n#\u001b[31m@\u001b[32m%\u001b[31m@\u001b[32m@\u001b[31m@\u001b[32m@\u001b[31m@@\u001b[32m##\u001b[31m&&&\u001b[32moxxoo++;;:,,:\u001b[31m...\u001b[32m..\u001b[31m..\u001b[32m.\u001b[31m.\u001b[32m.\u001b[31m.\u001b[32m.\u001b[31m.\n\u001b[32mx@@\u001b[31m@\u001b[32m@\u001b[31m@\u001b[32m@\u001b[31m%@\u001b[32m%##\u001b[31m%%%%\u001b[32moo+++;:::\u001b[31m,...\u001b[32m...\u001b[31m..\u001b[32m.\u001b[31m.\u001b[32m.\u001b[31m.\u001b[32m..\n`,
      hide: false,
      votes: {
        "341446613056880641": 1,
        "787184437196095528": -1,
        "789206881968193569": -1,
        "715232864404504676": -1,
        "585943340202065958": -1,
        "572796721730682881": -1,
        "389482537329623040": 1,
        "249992802933538816": -1,
        "889923799116550154": 1,
        "569682414914240537": -1,
      },
    },
    "152836174115766272": {
      title: `Bezier tree`,
      stdout: `.         .    .      .      . ## .. .   .     .  .   . .       \n     .             . . .      ####                     .      . \n     .      .                ##//##      .          .          .\n    .              .        .#////##                .           \n     .            .         #////@/###.                 .    .  \n     .    .    ..         ###////##//###           .  .      . .\n          .     .  .    ###//////#####                        ..\n.      .    .           ##//###//@/##           .               \n          .        ..   .####///////##    .        . .  .  . .  \n                          ##/////@///###     .            .    .\n                         ##////////////#####         .       .  \n        ..     .   .   ###///////@/##/@///###              .    \n .                   ###////////////#######.           .     .  \n .               #####///////////////###                        \n.              . ###/////####@/////////###                ..    \n             .     ########//////////////###      .      .      \n.                      ###//////////////////######          .   \n    .                 ##//////////////###/@////####.            \n       .            ##/////////////////#########        .      .\n                .###/////////@///////////##        ..  .        \n          . ######////////////////////////###             ...   \n            ###//////####///////////////////####.       .   .   \n     .    .   #########//////////////////@/////#######          \n  .  .             ##/////@///////////////###//////####   .     \n     . .         ###//////////////@////////#########     .  .  .\n.              ###///////////////////////////##        .        \n ..       . ###//////@///////@////////////////### ..       .    \n    . ######/////////@///@//////////////////////####            \n.     ###//@////####/@///////////@/////@///@///////#######      \n  .  .  ##########////////////////////////////###////@/####     \n      ..      ###//////////////////////////////#########..      \n       .    ###////////////////////////////@/////##         . . \n.        .###///////@/////////////////////////////###    .      \n.   .  ####////////@////////////////////////////////####        \n  ######////@/////////////////////@//////////@////@////#######  \n                         . |||||||||| .                 .       \n.          ..         ..   ||||||||||                           \n  .            .           ||||||||||           .               \n            . .   .        ||||||||||    .  . .     .           \n                           ||||||||||.  .  .                   .\n`,
      hide: true,
      votes: {
        "341446613056880641": 1,
        "787184437196095528": 1,
        "879324777809080320": 1,
        "789206881968193569": -1,
        "715232864404504676": -1,
        "572796721730682881": -1,
        "249992802933538816": 1,
        "889923799116550154": 1,
        "569682414914240537": 1,
      },
    },
    "405520989443850241": {
      title: `Christmas tree that's code also looks like a Christmas tree`,
      stdout: `          *\n         ***\n        *****\n       *******\n      *********\n     ***********\n    *************\n   ***************\n  *****************\n *******************\n          *\n`,
      hide: false,
      votes: {
        "220327217312432129": 1,
        "341446613056880641": 1,
        "787184437196095528": 1,
        "329730235614363648": 1,
        "715232864404504676": -1,
        "585943340202065958": -1,
        "572796721730682881": -1,
        "808613099586060289": -1,
        "249992802933538816": -1,
        "675274456867930112": -1,
      },
    },
  },
  codes: {
    "341446613056880641": {
      code_type: `python`,
      source_code: `from random import choice, random\r\nfrom math import sqrt\r\n\r\n# x is the horizontal\r\ngrid = [\r\n [None for i in range(66)] for j in range(100)\r\n]\r\n\r\n\r\ndef rnc(s):\r\n return choice(list(s))\r\n\r\n\r\ndef by(n):\r\n return random() < n\r\n\r\n\r\ndef tree(x,y,h):\r\n for i in range(h-1):\r\n  grid[x][y+i]='='\r\n grid[x][h-1]='⍟'\r\n\r\n base=int(sqrt(h))\r\n\r\n current_height=h\r\n\r\n for i in range(h-3):\r\n  current_height-=1\r\n  for b in range(1,base):\r\n   grid[x+b][y+2+i]=rnc('>.')\r\n   grid[x-b][y+2+i]=rnc('>.')\r\n   if by(0.5):\r\n    grid[x][y+2+i]=rnc('>.')\r\n  base-=1\r\n  if base<0:\r\n   base+=int(sqrt(current_height))\r\n\r\n\r\ndef house(x,y,w,h):\r\n for i in range(h):\r\n  grid[x][y+i]='='\r\n for i in range(h):\r\n  grid[x+w][y+i]='='\r\n # Add a roof\r\n incline=-2\r\n for i in range(x-2,x+w//2):\r\n  grid[i][y+h+incline]='\\\\'\r\n  grid[i][y+h+incline+1]='\\\\'\r\n  incline+=1\r\n incline=-2\r\n for i in range(x+w+2,x+w//2,-1):\r\n  grid[i][y+h+incline]='/'\r\n  grid[i][y+h+incline+1]='/'\r\n  incline+=1\r\n # add a star on top\r\n grid[x+w//2][y+h+w//2]='⍟'\r\n\r\n # add a door\r\n\r\n for i in range(7):\r\n  grid[x+w//2-1][y+i]='-'\r\n for i in range(7):\r\n  grid[x+w//2+1][y+i]='-'\r\n for i in range(-1, 2):\r\n  grid[x+w//2+i][y+7]='|'\r\n\r\n\r\ndef random_snow():\r\n return rnc("#.*")\r\n\r\n\r\ndef put_snow():\r\n for x,col in enumerate(grid):\r\n  for y,block in enumerate(reversed(col)):\r\n   # random chance of snow breaking\r\n   if by(0.04):\r\n    break\r\n   y=len(col)-y\r\n   if block is not None:\r\n    # put snow on top\r\n    if y+2==66:\r\n     break\r\n    grid[x][y] = random_snow()\r\n    break\r\n  else:\r\n   grid[x][y] = random_snow()\r\n\r\n\r\ntree(0,0,10)\r\ntree(10,0,10)\r\ntree(45,0,20)\r\ntree(43,0,10)\r\ntree(36,0,15)\r\ntree(50,0,40)\r\ntree(55,0,25)\r\n\r\nhouse(20,0,8,16)\r\nhouse(70,0,10,20)\r\n\r\nfor i in range(30):\r\n put_snow()\r\n\r\n\r\ndef print_grid():\r\n res=[]\r\n for g in grid:\r\n  lst=65\r\n  while g[lst] is None:\r\n   lst-=1\r\n   if lst==-1:\r\n    break\r\n  res.append("".join(" " if i is None else i for i in g[:lst+1]))\r\n return "\\n".join(res)\r\n\r\n\r\nprint(print_grid())\r\n`,
    },
    "220327217312432129": {
      code_type: `python`,
      source_code: `print("Hello Doo Doo Head")`,
    },
    "429268128296468500": {
      code_type: `Python`,
      source_code: `print("Burh bruh rbuh hubr hurb ruhb")`,
    },
    "353305252633772052": {
      code_type: `python`,
      source_code: `print('test')`,
    },
    "589261729289207810": {
      code_type: `python`,
      source_code: `hihi `,
    },
    "275449332960854016": {
      code_type: `python`,
      source_code: `print("3")`,
    },
    "632929247173804081": {
      code_type: `python`,
      source_code: `print("                    O         *        *\\n            *      uwu           *\\n     *            owowo *          *     *\\n  *          *  wOwOwOwOw\\n              UWUWUWUWUWUW\\n                  wuwuw\\n*   *           *wowowow    *     *\\n      *        wUwUwUwUwUw \\n   *   *  OwOwOwOwOwOwOwOwOwOwO   *           *\\n      UWUWUWUWUWUWUWUWUWUWUWUWUWUWU        *      \\n                uwuwuwuwu\\n               owowowowowo    *      *    \\n   *          UwUwUwUwUwUwU *        *    *\\n*       * WuWuWuWuWuWuWuWuWuWuW   *    *\\n      WOWOWOWOWOWOWOWOWOWOWOWOWOWOW\\nWUWUWUWUWUWUWUUWUWUWUWUWUWUWUWUWUWUWUWUWUWUW\\n                   |||\\n                *  |||    \\u039B_____\\u039B\\n       *           |||   / u \\u03C9 u \\ \\n *             *   |||   \\       / \\n    *        *     |||   /===\\u03A9===\\   //\\n        *          |||  /         \\  ||\\n  *         *      |||  \\         /__//\\n___________________|||__(~~~~~~~~~)")`,
    },
    "805903287723229294": {
      code_type: `python`,
      source_code: `print(str().join(chr(x) for x in [10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 42, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 47, 124, 92, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 10, 32, 32, 32, 32, 32, 32, 32, 47, 42, 124, 79, 92, 10, 32, 32, 32, 32, 32, 32, 47, 42, 47, 124, 92, 42, 92, 10, 32, 32, 32, 32, 32, 47, 88, 47, 79, 124, 42, 92, 88, 92, 10, 32, 32, 32, 32, 47, 42, 47, 88, 47, 124, 92, 88, 92, 42, 92, 10, 32, 32, 32, 47, 79, 47, 42, 47, 88, 124, 42, 92, 79, 92, 88, 92, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 10, 32, 32, 47, 42, 47, 79, 47, 88, 47, 124, 92, 88, 92, 79, 92, 42, 92, 10, 32, 47, 88, 47, 79, 47, 42, 47, 88, 124, 79, 92, 88, 92, 42, 92, 79, 92, 10, 47, 79, 47, 88, 47, 42, 47, 79, 47, 124, 92, 88, 92, 42, 92, 79, 92, 88, 92, 10, 32, 32, 32, 32, 32, 32, 32, 32, 124, 88, 124, 32, 32, 32, 32, 32, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 124, 88, 124, 32, 32, 32, 32, 10]))`,
    },
    "807650708530397215": {
      code_type: `python`,
      source_code: `print("\\n          .     .  .      +     .      .          .\\n     .       .      .     #       .           .\\n        .      .         ###            .      .      .\\n      .      .   ^#:. .:##^##:. .:#^  .      .\\n          .      . ^####^###^####^  .\\n       .     ^#:.    .:#^###^#:.    .:#^  .        .       .\\n  .             ^#########^#########^        .        .\\n        .    ^#:.  ^####^###^####^  .:#^   .       .\\n     .     .  ^#######^^##^##^^#######^                  .\\n                .^##^#####^#####^##^           .      .\\n    .   ^#:. ...  .:##^###^###^##:.  ... .:#^     .\\n      .     ^#######^##^#####^##^#######^      .     .\\n    .    .     ^#####^^#######^^#####^    .      .\\n            .     ^      000      ^    .     .\\n       .         .   .   000     .        .       .\\n.. .. ..................O000O........................ ......")`,
    },
    "585943340202065958": {
      code_type: `python`,
      source_code: `message = "ilovestemhelpers"\r\nspace = 2 * len(message) - 2\r\nfor i in range(1, len(message) + 1):\r\n    for s in range(0, space // 2):\r\n        print(end=" ")\r\n    space -= 2\r\n    for char in message[:i]:\r\n        print(char + " ", end="")\r\n    print("")\r\n\r\nspace = 2 * len(message) - 2\r\nfor i in range(5):\r\n    for s in range(0, space // 2):\r\n        print(end=" ")\r\n    print("||")`,
    },
    "763966215261126676": {
      code_type: `python`,
      source_code: `####################################\n# THIS CODE DID NOT RUN FROM PISTON\n####################################\nfrom PIL import Image\nimport math\nimport time\nstart_time = time.time()\nimag = Image.open(r"download (2).jpg")\nwidth, height = imag.size\nif width * height > 64000:\n    new_width = math.floor(80 * math.sqrt(5 * width / height))\n    new_height = math.floor(80 * math.sqrt(5 * height / width))\n    new_width -= new_width % 2\n    new_height -= new_height % 4\n    if new_height > 400:\n        new_height = 400\n        new_width = math.floor(new_width / height * 400)\n        new_width -= new_width % 2\n    else:\n        pass\nelse:\n    new_width, new_height = width - width % 2, height - height % 4\n    if new_height > 400:\n        new_height = 400\n        new_width = math.floor(new_width / height * 400)\n        new_width -= new_width % 2\n    else:\n        pass\nimag.resize((new_width, new_height))\nfor j in range(new_height // 4):\n    for i in range(new_width // 2):\n        k = ''\n        if i != new_width // 2 - 1:\n            for x in range(2):\n                for y in range(4):\n                    R, G, B = imag.getpixel((2 * i + x, 4 * j + y))\n                    Brightness = 1 - math.floor((R+B+G)/(3*128))\n                    k += str(Brightness)\n            character = 10240 + int(k, 2)\n            if character == 10240:\n                character = 32\n            else:\n                pass\n            print(chr(character), end='')\n        else:\n            for x in range(2):\n                for y in range(4):\n                    R, G, B = imag.getpixel((2 * i + x, 4 * j + y))\n                    Brightness = 1 - math.floor((R+B+G)/(3*128))\n                    k += str(Brightness)\n            character = 10240 + int(k, 2)\n            if character == 10240:\n                character = 32\n            else:\n                pass\n            print(chr(character))\n\nprint("My program took", time.time() - start_time, "to run")`,
    },
    "715861939842056233": {
      code_type: `python`,
      source_code: `from random import choice\n\nscreen = None\n\ndef draw_line(x0, y0, x1, y1, c):\n  if x0 == x1:\n    for y in range(y0, y1 + 1):\n      screen[y][x0] = c\n    return\n\n  if y0 == y1:\n    for x in range(x0, x1 + 1):\n      screen[y0][x] = c\n    return\n\n\n  dx = abs(x1 - x0)\n  dy = -abs(y1 - y0)\n\n  if x0 < x1:\n    sx = 1\n  else:\n    sx = -1\n\n  if y0 < y1:\n    sy = 1\n  else:\n    sy = -1\n\n  err1 = dx + dy\n\n  screen[y0][x0] = c\n\n  while x0 != x1 and y0 != y1:\n    err2 = 2 * err1\n\n    if err2 >= dy:\n      err1 += dy \n      x0 += sx\n\n    if err2 <= dx:\n      err1 += dx\n      y0 += sy\n\n    screen[y0][x0] = c\n\ndef create_screen(c):\n  global screen\n\n  screen = [[c for x in range(29)] for y in range(23)]\n\ndef draw_top_tree_part(c):\n  draw_line(14,0,10,4,c)\n  draw_line(10,4,12,4,c)\n  draw_line(12,5,6,12,c)\n  draw_line(6,12,8,12,c)\n  draw_line(8,13,2,19,c)\n  draw_line(2,19,26,19,c)\n  draw_line(26,19,20,13,c)\n  draw_line(20,12,22,12,c)\n  draw_line(22,12,16,5,c)\n  draw_line(16,4,18,4,c)\n  draw_line(18,4,14,0,c)\n\ndef draw_bottom_tree_part(c):\n  draw_line(13,20,13,22,c)\n  draw_line(13,22,15,22,c)\n  draw_line(15,20,15,22,c)\n\ndef beautify(exterior_c, interior_c, edge):\n  for y in range(len(screen)):\n    edges = []\n\n    for x in range(len(screen[y])):\n      if screen[y][x] == edge:\n        edges.append([y, x])\n\n    for x in range(len(screen[y])):\n      if edges and (x >= edges[int(len(edges) / 2 - 1)][1] + 1 and x < edges[int(len(edges) / 2)][1]):\n        if choice([True] + [False] * 6):\n          screen[y][x] = interior_c\n\n      elif edges and (x < edges[0][1] or x > edges[len(edges) - 1][1]):\n        if choice([True] + [False] * 8):\n          screen[y][x] = exterior_c\n\ndef generate_tree(): \n  draw_top_tree_part("█")\n  draw_bottom_tree_part("▒")\n  beautify("*", "O", "█")\n\ndef print_screen():\n  for y in screen:\n    for x in y:\n      print(x, end='')\n    print()\n\nif __name__ == "__main__":\n  create_screen(" ")\n\n  generate_tree()\n\n  print_screen()\n`,
    },
    "191689350881345536": {
      code_type: `java`,
      source_code: `import java.util.Collections;\nimport java.util.List;\nimport java.util.Objects;\nimport java.util.stream.Collectors;\nimport java.util.stream.Stream;\n\npublic class BinaryChristmasTree {\n\n    public static void main(String[] args) {\n        int[] fib = new int[15];\n        fib[0] = 0;\n        fib[1] = 1;\n        for (int i = 2; i < fib.length; i++) {\n            fib[i] = fib[i - 1] + fib[i - 2];\n        }\n\n        BinaryChristmasTree tree = new BinaryChristmasTree(fib);\n        tree.print();\n    }\n\n    private Ornament treeTopper;\n\n    public BinaryChristmasTree(int[] ornaments) {\n        insert(ornaments, 0, ornaments.length - 1);\n    }\n\n    private void insert(int[] ornaments, int start, int end) {\n        if (start > end) {\n            return;\n        }\n        int mid = (start + end) / 2;\n        treeTopper = insert(treeTopper, ornaments[mid]);\n        insert(ornaments, start, mid - 1);\n        insert(ornaments, mid + 1, end);\n    }\n\n    private Ornament insert(Ornament ornament, int value) {\n        if (ornament == null) {\n            return new Ornament(value);\n        }\n        if (value < ornament.value) {\n            ornament.left = insert(ornament.left, value);\n        } else {\n            ornament.right = insert(ornament.right, value);\n        }\n        return ornament;\n    }\n\n    public int getHeight() {\n        return getHeight(treeTopper);\n    }\n\n    private int getHeight(Ornament ornament) {\n        return ornament == null ? 0 : 1 + Math.max(getHeight(ornament.left), getHeight(ornament.right));\n    }\n\n    public void print() {\n        int height = getHeight();\n        if (height == 0) {\n            return;\n        }\n\n        List<Ornament> ornaments = Collections.singletonList(treeTopper);\n\n        for (int level = height - 1; level >= 0; level--) {\n            int branchLen = Math.max(0, 3 * (1 << (level - 1)));\n            int leftSpaces = 3 * ((1 << level) - 1);\n            int midSpaces = 3 * ((1 << (level + 1)) - 1);\n\n            // print ornaments\n            for (int i = 0; i < ornaments.size(); i++) {\n                System.out.print(" ".repeat(i == 0 ? leftSpaces : midSpaces) + ornaments.get(i));\n            }\n            System.out.println();\n\n            // print branches\n            for (int i = 0; i < branchLen; i++) {\n                for (int j = 0; j < ornaments.size(); j++) {\n                    System.out.print(" ".repeat(j == 0 ? leftSpaces-- : midSpaces) + "/" + " ".repeat(2 * i + 1) + "\\\\");\n                }\n                System.out.println();\n                midSpaces -= 2;\n            }\n\n            ornaments = ornaments.stream()\n                    .flatMap(o -> Stream.of(o.left, o.right))\n                    .filter(Objects::nonNull)\n                    .collect(Collectors.toUnmodifiableList());\n        }\n\n        // print base and trunk\n        int baseLen = 6 * (1 << (height - 1)) - 3;\n        System.out.println("-".repeat(baseLen));\n        for (int i = 0; i < 5; i++) {\n            System.out.print(" ".repeat(baseLen / 2 - 3));\n            System.out.println(i == 4 ? "-".repeat(7) : "|" + " ".repeat(5) + "|");\n        }\n    }\n\n    private static class Ornament {\n\n        private Ornament left;\n        private Ornament right;\n        private int value;\n\n        private Ornament(int value) {\n            this.value = value;\n        }\n\n        @Override\n        public String toString() {\n            return String.format("%03d", value);\n        }\n    }\n}\n`,
    },
    "752168910102724649": {
      code_type: `c++`,
      source_code: `#include <iostream>\n#include <vector>\n#include <string>\n\nvoid print_tree()\n{\n    std::cout << "           *        *          *\\n";\n    std::cout << "     *            *****     *       *\\n";\n    std::cout << "                   * *        *            *\\n";\n    std::cout << "           *      *   *               *\\n";\n    std::cout << "    *               *          *\\n";\n    \n    std::vector<std::string> to_print;\n    to_print.push_back(std::string("        *          ***              *  *"));\n    to_print.push_back(std::string("   *              MERRY         *"));\n    to_print.push_back(std::string("     *        *  *******"));\n    to_print.push_back(std::string("                CHRISTMAS         *"));\n    to_print.push_back(std::string("          *    ***********   *"));\n    to_print.push_back(std::string("*       *     HAPPY********     *       *"));\n    to_print.push_back(std::string("   *         ***************     *"));\n    to_print.push_back(std::string("  *         HOLIDAYS!!*******       *"));\n    to_print.push_back(std::string("    *             ****        *"));\n    to_print.push_back(std::string("                  ****"));\n    to_print.push_back(std::string("      *           ****      *     *"));\n    to_print.push_back(std::string("                  ****"));\n    to_print.push_back(std::string("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"));\n    \n    for (std::string& elem : to_print)\n        std::cout << elem << '\\n';\n}\n\nint main()\n{\n    print_tree();\n}`,
    },
    "316481084835495937": {
      code_type: `java`,
      source_code: `import java.util.Random;\n\npublic class ChristmasTree {\n    private static char block = (char) 9632;\n    private static char circle = '\\u2B24';\n\n    public static void main(String[] args) {\n        System.out.println(generateTree(80));\n    }\n\n    private static String generateTree(int size) {\n        Random rand = new Random();\n        StringBuilder tree = new StringBuilder();\n        for (int i = 0; i < size / 20; i++) {\n            for (int j = 0; j < size; j++) {\n                tree.append(rand.nextInt(10) == 0 ? '*' : ' ');\n            }\n            tree.append('\\n');\n        }\n        for (int chunk = 0; chunk < 3; chunk++) {\n            for (int width = chunk == 0 ? 1 : size / 4; width < size / 2; width += 4) {\n                for (int i = 0; i < (size - width) / 2; i++) {\n                    tree.append(rand.nextInt(10) == 0 ? '*' : ' ');\n                }\n                for (int i = 0; i < width; i++) {\n                    tree.append(rand.nextInt(20) == 0 ? circle : block);\n                }\n                for (int i = 0; i < (size - width) / 2; i++) {\n                    tree.append(rand.nextInt(10) == 0 ? '*' : ' ');\n                }\n                tree.append('\\n');\n            }\n        }\n        int logSize = 3 * (size / 20);\n        int logLength = size / 10;\n        while (logLength-- > 0) {\n            for (int i = 0; i < (int) (size - logSize) / 2; i++) {\n                tree.append(rand.nextInt(10) == 0 ? '*' : ' ');\n            }\n            for (int i = 0; i < logSize; i++) {\n                tree.append('#');\n            }\n            for (int i = 0; i < Math.ceil((size - logSize) / 2); i++) {\n                tree.append(rand.nextInt(10) == 0 ? '*' : ' ');\n            }\n            tree.append('\\n');\n        }\n        for (int i = 0; i < size; i++) {\n            tree.append(block);\n        }\n        return tree.toString();\n    }\n}`,
    },
    "293076681890201600": {
      code_type: `c`,
      source_code: `#include <math.h>\n#include <stdbool.h>\n#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#define S_W 40\n#define S_H 100\n#define S_B 100\n#define CRED "\\x1B[31m"\n#define CGRN "\\x1B[32m"\n#define ASPCT ((fl)S_W / (fl)S_H)\n#define C_T typedef struct\ntypedef const char *str;\nchar t[S_W][S_H];\ntypedef float fl;\nC_T {\n\tfl x;\n\tfl y;\n\tfl z;\n}\nv3;\nC_T {\n\tv3 p;\n\tfl l;\n\tstr c;\n}\nbll;\nbll bls[S_B] = {};\nvoid build() {\n\tfor (int i = S_B - 1; i >= 0; i--)\n\t\tbls[i] = (bll){{0, (fl)i * 0.1f + 0.8f, -3.f},(fl)i / 20.f,(i % 2 == 0) ? CRED : CGRN};\n}\nC_T {\n\tv3 pos;\n\tv3 targ;\n}\nray;\nchar shd(fl v) {\n\tchar s[11] = ".,:;+ox%&#@";\n\treturn s[(int)fmin((int)((fmax(v, 0)) * 12), 10)];\n}\n#define dot(l, r) (l.x * r.x + r.y * l.y + l.z * r.z)\n#define dots(v) dot(v, v)\n#define norm(v) ({int l = sqrt(dots((v)));v3 r= {v.x / l, v.y / l, v.z / l};r;})\n#define sub(va, vb) (v3) { va.x - vb.x, va.y - vb.y, va.z - vb.z }\nv3 lpos = {5.f, -0.5f, 0.f};\nbool hit(v3 c, double rad, ray *r, ray *t) {\n\tv3 oc = sub(c, r->pos);\n\tfl a = dots(r->targ);\n\tfl b = 2 * dot(oc, r->targ);\n\tfl cd = dots(oc) - rad * rad;\n\tfl d = (b * b - 4 * a * cd);\n\tif (d < 0)\n\t\treturn false;\n\tfl dd = (-b * sqrt(d) / 2);\n\tt->pos = (v3){r->pos.x + r->targ.x * dd, r->pos.y + r->targ.y * dd, r->pos.z + r->targ.z * dd};\n\tt->targ = norm(sub(t->pos, c));\n\treturn true;\n}\nstr p = "";\nvoid sht(ray r) {\n\tchar cur;\n\tray lp;\n\tfor (int i = 0; i < S_B; i++) {\n\t\tfl l = 0;\n\t\tif (hit(bls[i].p, bls[i].l, &r, &lp)) {\n\t\t\tl = dot(lp.targ, lpos);\n\t\t\tstr c = bls[i].c;\n\t\t\tif (strcmp(c, p)) {\n\t\t\t\tprintf("%s", c);\n\t\t\t}\n\t\t\tp = c;\n\t\t\tprintf("%c", shd(l));\n\t\t\treturn;\n\t\t}\n\t}\n\tprintf(" ");\n}\nv3 gcamr(fl x, fl y) {\n\tv3 p = {-ASPCT, -1.f, -1};\n\tv3 o = {p.x + (fl)(ASPCT * 2.f) * x, p.y + (fl)2.f * y, p.z};\n\treturn o;\n}\nint main(int argc, char **argv) {\n\tbuild();\n\tfor (int y = 65; y < S_H; y++) {\n\t\tfor (int x = 0; x < S_W; x++)\n\t\t\tsht((ray){.pos = {}, .targ = gcamr((fl)x / S_W, (fl)y / S_H)});\n\t\tprintf("\\n");\n\t}\n\treturn 0;\n}\n`,
    },
    "152836174115766272": {
      code_type: `python`,
      source_code: `from random import randint\n\n\ndef quad_bezier(p0, p1, p2):\n\tdef f(t):\n\t\tx = (1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * p1[0] + t ** 2 * p2[0]\n\t\ty = (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * p1[1] + t ** 2 * p2[1]\n\t\treturn x, y\n\n\treturn f\n\n\ndef sample(f, rate):\n\tp = []\n\tt = 0\n\twhile t <= 1:\n\t\tx, y = f(t)\n\t\tp.append((int(x), int(y)))\n\t\tt += rate\n\treturn p\n\n\ndef with_middle_point(a, b):\n\treturn a, ((a[0] + b[0]) / 2, (a[1] + b[1]) / 2 + 3), b\n\n\ndef gen_points(inner, outer):\n\tp = []\n\ti = 0\n\tj = 1\n\twhile j < len(outer):\n\t\tp.extend(with_middle_point(inner[i], outer[j]))\n\t\tp.extend(with_middle_point(outer[j], inner[i + 1]))\n\t\ti += 1\n\t\tj += 1\n\treturn p\n\n\ndef draw(p):\n\tfor i in range(0, len(p) - 3, 3):\n\t\tcurve = quad_bezier(p[i], p[i + 1], p[i + 2])\n\t\tt = 0\n\t\twhile t <= 1:\n\t\t\tx, y = curve(t)\n\t\t\tcanvas[int(y)][int(x)] = '#'\n\t\t\tt += 0.01\n\n\nh = 40\nw = 65\n\ncanvas = []\nline = [" "] * w\nfor i in range(h):\n\tcanvas.append(line.copy())\n\n# right\ninner = sample(quad_bezier((0.5 * w, 0), (0.55 * w, 0.5 * h), (0.85 * w, h - 1)), 0.15)\nouter = sample(quad_bezier((0.5 * w, 0), (0.85 * w, 0.5 * h), (w - 1, h - 1)), 0.15)\n# Yo dawg, I heard you like Bezier curves, so I used Bezier curves to generate Bezier curves.\np = gen_points(inner, outer)\ndraw(p)\n\n# left\ninner = sample(quad_bezier((0.5 * w, 0), (0.45 * w, 0.5 * h), (0.15 * w, h - 1)), 0.18)\nouter = sample(quad_bezier((0.5 * w, 0), (0.15 * w, 0.5 * h), (1, h - 1)), 0.18)\np = gen_points(inner, outer)\ndraw(p)\n\nfor l in canvas:\n\tb = -1\n\te = -1\n\tfor c in range(w):\n\t\tif l[c] == '#':\n\t\t\tif b == -1:\n\t\t\t\tb = c\n\t\t\te = c\n\tif b != -1 and e != -1:\n\t\tfor i in range(b, e + 1):\n\t\t\tif l[i] != '#':\n\t\t\t\tif randint(1, 100) < 5:\n\t\t\t\t\tl[i] = '@'\n\t\t\t\telse:\n\t\t\t\t\tl[i] = '/'\n\nfor x in range(10):\n\tfor y in range(5):\n\t\tcanvas[h - 1 - y][w // 2 - 5 + x] = '|'\n\nfor l in canvas:\n\tfor c in range(w):\n\t\tif l[c] == ' ':\n\t\t\tif randint(1, 100) < 10:\n\t\t\t\tl[c] = '.'\n\nfor i in range(h):\n\tcanvas[i][w - 1] = '\\n'\n\nfor i in range(h):\n\tfor j in range(w):\n\t\tprint(canvas[i][j], end="")`,
    },
    "405520989443850241": {
      code_type: `javascript`,
      source_code: `            (\n           h=>\n          {let i\n         for(i=0;\n        i<h;i++) {\n       console.log(\n      \`\${" ".repeat(\n     h-i)}\${function()\n    {return "*".repeat(\n   2*(i+1)-1)}()}\`)};let\n  fin=\`\${" ".repeat(h)}*\`;\n console.log(\`\${fin}\`)})(10\n            )`,
    },
  },
};

const scoresRaw = Object.entries(treeData.trees)
  .map(([id, v]) => ({
    id,
    score: Object.values(v.votes).reduce((a, b) => a + b),
  }))
  .sort((a, b) => b.score - a.score);

export default {
  setup() {
    const scores = ref([]);

    Promise.all(
      scoresRaw.map(async (v) => {
        const id = v.id;
        const { discriminator, username } = await fetch(
          `${process.env.VUE_APP_API_URL}/v1/service/discordidlookup/${id}`,
        ).then((r) => r.json());
        v.discriminator = discriminator;
        v.username = username;
        return v;
      }),
    )
      .then((v) => {
        scores.value = v;
      })
      .catch((e) => {
        alert(`something went wrong with the api`);
        console.log(e);
      });

    return {
      scores,
    };
  },
};
</script>

<style lang="scss" scoped>
details,
ul,
summary {
  margin: 0;
  padding-left: 0.5rem;
}

ul {
  padding-left: 0;
}

details {
  margin-left: 1rem;
}

summary {
  margin-left: -2rem;
}
</style>
