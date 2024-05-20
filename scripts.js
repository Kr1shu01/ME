document.addEventListener('DOMContentLoaded', () => {
    const initialPlayButton = document.getElementById('initial-play-button');
    const playPauseButton = document.querySelector('.play-pause-button');
    const nextButton = document.querySelector('.next-button');
    const themeButton = document.querySelector('.theme-button');
    const relaxButton = document.querySelector('.relax-button');
    const acButton = document.querySelector('.ac-button');
    const tvButton = document.querySelector('.tv-button');
    const consoleButton = document.querySelector('.console-button');
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const controls = document.getElementById('controls');

    initialPlayButton.addEventListener('click', initialPlay);
    playPauseButton.addEventListener('click', togglePlayPause);
    nextButton.addEventListener('click', playRandom);
    themeButton.addEventListener('click', toggleTheme);
    relaxButton.addEventListener('click', startRelax);
    acButton.addEventListener('click', () => openLink('https://wxurl.cn/PME'));
    tvButton.addEventListener('click', () => openLink('https://wxurl.cn/36C'));
    consoleButton.addEventListener('click', () => openLink('http://yx.1dly.cn/'));
    dropdownButton.addEventListener('click', toggleDropdown);

    document.addEventListener('click', function (event) {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    document.getElementById('controls').classList.add('hidden');
});

const audio = new Audio();
const mp3Files = [
    'music/10_000_Hours.mp3', 'music/Blowin_In_the_Wind.mp3', 'music/Boyfriend.mp3', 'music/Cold_Water.mp3',
    'music/Ghost.mp3', 'music/My_Back_Pages.mp3', 'music/No_Time_To_Die.mp3', 'music/Shake_It_Off.mp3',
    'music/Six_Feet_Under.mp3', 'music/Style(Karaoke_Version).mp3', 'music/White_Christmas.mp3',
    'music/Workingman\'s_Blues.mp3', 'music/aimei.mp3', 'music/aizaixiyuanqian.mp3', 'music/bad_guy.mp3',
    'music/bandaotiehe.mp3', 'music/bugai.mp3', 'music/caihong.mp3', 'music/changhuan.mp3', 'music/chengaiying.mp3',
    'music/congcongnanian.mp3', 'music/cuimian.mp3', 'music/dangni.mp3', 'music/daoxiang.mp3', 'music/erlingsan.mp3',
    'music/fanfangxiangdezhong.mp3', 'music/feiyunzhixia.mp3', 'music/fushishanxia.mp3', 'music/ganbei.mp3',
    'music/hongchenkezhan.mp3', 'music/huahai.mp3', 'music/huoyuanjia.mp3', 'music/idontwannabeyouanymore.mp3',
    'music/jiandanai.mp3', 'music/jie.mp3', 'music/lantingxu.mp3', 'music/lizhichangzhou.mp3', 'music/longjuanfeng.mp3',
    'music/mingmingjiu.mp3', 'music/ocean_eyes.mp3', 'music/peiniduguomanchangsuiyue.mp3', 'music/putaochengshushi.mp3',
    'music/qilixiang.mp3', 'music/qingfengxulai.mp3', 'music/qingtian.mp3', 'music/renjian.mp3', 'music/shengxia.mp3',
    'music/shuohaobuku.mp3', 'music/shuohaodexingfune.mp3', 'music/taotai.mp3', 'music/tingmamadehua.mp3',
    'music/turanhaoxiangni.mp3', 'music/wenrou.mp3', 'music/wish_you_were_gay.mp3', 'music/woyouchulianle.mp3',
    'music/xiangwozheyangderen.mp3', 'music/xiaochou.mp3', 'music/xiaojiuwo.mp3', 'music/xiaowangshu.mp3',
    'music/xuanmu.mp3', 'music/yequ.mp3', 'music/yifuzhiming.mp3', 'music/yiluxiangbei.mp3', 'music/you_should_see_me_in_a_crown.mp3',
    'music/youjianchuiyan.mp3'
];
let isPlaying = false;

function initialPlay() {
    document.getElementById('initial-play-button').classList.add('hidden');
    document.getElementById('controls').classList.remove('hidden');
    playRandom();
}

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        document.querySelector('.play-pause-button').textContent = '播放';
    } else {
        audio.play();
        document.querySelector('.play-pause-button').textContent = '暂停';
    }
    isPlaying = !isPlaying;
}

function playRandom() {
    const randomIndex = Math.floor(Math.random() * mp3Files.length);
    audio.src = mp3Files[randomIndex];
    audio.play();
    isPlaying = true;
    document.querySelector('.play-pause-button').textContent = '暂停';
}

const themes = [
    { bg: 'linear-gradient(90deg, #FF69B4, #FFB6C1)', secBg: 'linear-gradient(45deg, #FFCC99, #FFA07A)' },
    { bg: 'linear-gradient(90deg, #00BFFF, #1E90FF)', secBg: 'linear-gradient(45deg, #ADD8E6, #87CEFA)' },
    { bg: 'linear-gradient(90deg, #3CB371, #2E8B57)', secBg: 'linear-gradient(45deg, #98FB98, #00FA9A)' }
];
let currentTheme = 0;

function toggleTheme() {
    currentTheme = (currentTheme + 1) % themes.length;
    const theme = themes[currentTheme];
    document.body.style.background = theme.bg;
    document.querySelector('header').style.background = theme.bg;
    document.querySelector('main').style.background = theme.bg;
    document.querySelector('.content').style.background = theme.bg;
    document.querySelectorAll('.content section').forEach(section => section.style.background = theme.secBg);
    document.querySelector('footer').style.background = theme.bg;
}

function startRelax() {
    const games = [
        'https://play2048.co/', 'https://playsnake.org/', 'https://hextris.io/', 'https://sudoku.com/',
        'https://www.bubbleshooter.net/', 'https://liferestart.syaro.io/public/index.html', 'https://proxx.app/',
        'https://pinball.flutter.dev/'
    ];
    window.open(games[Math.floor(Math.random() * games.length)], '_blank');
}

function openLink(url) {
    window.open(url, '_blank');
}

function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

function navigateToLink(videoLink) {
    window.open(videoLink, '_blank');
}
