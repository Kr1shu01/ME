document.addEventListener('DOMContentLoaded', () => {
    const playPauseButton = document.querySelector('.play-pause-button');
    const nextButton = document.querySelector('.next-button');
    const themeButton = document.querySelector('.theme-button');
    const relaxButton = document.querySelector('.relax-button');
    const acButton = document.querySelector('.ac-button');
    const tvButton = document.querySelector('.tv-button');
    const consoleButton = document.querySelector('.console-button');
    
    const menuButton = document.querySelector('.menu-button');
    const emptyButton = document.querySelector('.empty-button');
    const menu = document.getElementById('menu');
    const emptyMenu = document.getElementById('empty-menu');

    // 添加事件监听器
    playPauseButton.addEventListener('click', togglePlayPause);
    nextButton.addEventListener('click', playRandom);
    themeButton.addEventListener('click', toggleTheme);
    relaxButton.addEventListener('click', startRelax);
    acButton.addEventListener('click', () => openLink('https://wxurl.cn/PME'));
    tvButton.addEventListener('click', () => openLink('https://wxurl.cn/36C'));
    consoleButton.addEventListener('click', () => openLink('http://yx.1dly.cn/'));
    menuButton.addEventListener('click', toggleMenu);
    emptyButton.addEventListener('click', toggleEmptyMenu);

    // 隐藏下拉菜单
    document.addEventListener('click', function (event) {
        if (!menuButton.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.add('hidden');
        }
        if (!emptyButton.contains(event.target) && !emptyMenu.contains(event.target)) {
            emptyMenu.classList.add('hidden');
        }
    });

    // 添加菜单项点击事件监听器
    menu.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', (event) => {
            event.stopPropagation();  // 防止事件冒泡
            menu.classList.add('hidden');  // 点击后隐藏菜单
        });
    });
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
let isFirstPlay = true;

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        document.querySelector('.play-pause-button').textContent = '流音';
    } else {
        if (isFirstPlay) {
            playRandom();
            isFirstPlay = false;
        } else {
            audio.play();
            document.querySelector('.play-pause-button').textContent = '驻乐';
        }
    }
    isPlaying = !isPlaying;
}

function playRandom() {
    const randomIndex = Math.floor(Math.random() * mp3Files.length);
    audio.src = mp3Files[randomIndex];
    audio.play();
    audio.loop = true; // 循环播放
    document.querySelector('.play-pause-button').textContent = '驻乐';
    isPlaying = true;
}

// 主题切换
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

// 轻松一下按钮
function startRelax() {
    const games = [
        'https://play2048.co/', 'https://playsnake.org/', 'https://hextris.io/', 'https://sudoku.com/',
        'https://www.bubbleshooter.net/', 'https://liferestart.syaro.io/public/index.html', 'https://proxx.app/',
        'https://pinball.flutter.dev/'
    ];
    window.open(games[Math.floor(Math.random() * games.length)], '_blank');
}

// 外部链接按钮
function openLink(url) {
    window.open(url, '_blank');
}


// 下拉菜单
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}
function toggleEmptyMenu() {
    const menu = document.getElementById('empty-menu');
    menu.classList.toggle('hidden');
}

function navigateToLink(videoLink) {
    window.open(videoLink, '_blank');
}
