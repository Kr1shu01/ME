document.addEventListener('DOMContentLoaded', () => {
    // 当DOM内容完全加载后，执行以下代码
    document.getElementById('initial-play-button').addEventListener('click', initialPlay);
    // 为初始播放按钮添加点击事件监听器，当点击时调用initialPlay函数
    document.getElementById('controls').classList.add('hidden');
    // 隐藏控制按钮区域（播放、暂停和换歌按钮）

    // 使用事件委托为所有按钮添加事件监听器
    document.addEventListener('click', (event) => {
        // 检查被点击的元素是否包含特定的类，并执行相应的函数
        if (event.target.classList.contains('play-pause-button')) {
            // 如果点击的是播放/暂停按钮，调用togglePlayPause函数
            togglePlayPause();
        } else if (event.target.classList.contains('next-button')) {
            // 如果点击的是换歌按钮，调用playRandom函数
            playRandom();
        } else if (event.target.classList.contains('theme-button')) {
            // 如果点击的是切换主题按钮，调用toggleTheme函数
            toggleTheme();
        } else if (event.target.classList.contains('relax-button')) {
            // 如果点击的是随机轻松一下按钮，调用startRelax函数
            startRelax();
        } else if (event.target.classList.contains('ac-button')) {
            // 如果点击的是打开小空调按钮，调用openLink函数并传入指定URL
            openLink('https://wxurl.cn/PME');
        } else if (event.target.classList.contains('tv-button')) {
            // 如果点击的是打开小电视按钮，调用openLink函数并传入指定URL
            openLink('https://wxurl.cn/36C');
        } else if (event.target.classList.contains('console-button')) {
            // 如果点击的是打开小霸王按钮，调用openLink函数并传入指定URL
            openLink('http://yx.1dly.cn/');
        } else if (event.target.classList.contains('dropdown-button')) {
            // 如果点击的是透明下拉菜单按钮，调用toggleDropdown函数
            toggleDropdown();
        }
    });

    // 当点击页面上的任何地方时，检查是否需要隐藏下拉菜单
    document.addEventListener('click', function(event) {
        // 获取下拉菜单容器和下拉菜单元素
        const dropdownContainer = document.querySelector('.dropdown-container');
        const dropdownMenu = document.getElementById('dropdown-menu');
        // 如果点击的元素不在下拉菜单容器内，隐藏下拉菜单
        if (!dropdownContainer.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});

// 音频元素和音乐文件列表
const audio = document.getElementById('background-audio');
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
// 初始化音频播放状态
let isPlaying = false;

function initialPlay() {
    // 隐藏初始播放按钮并显示控制按钮
    document.getElementById('initial-play-button').classList.add('hidden');
    document.getElementById('controls').classList.remove('hidden');
    // 随机播放一首歌曲
    playRandom();
}

function togglePlayPause() {
    // 切换播放和暂停状态
    if (isPlaying) {
        audio.pause(); // 如果正在播放，则暂停
        document.querySelector('.play-pause-button').textContent = '播放'; // 更新按钮文本为“播放”
    } else {
        audio.play(); // 如果未播放，则开始播放
        document.querySelector('.play-pause-button').textContent = '暂停'; // 更新按钮文本为“暂停”
    }
    isPlaying = !isPlaying; // 切换播放状态
}

function playRandom() {
    // 随机选择一首歌曲并播放
    const randomIndex = Math.floor(Math.random() * mp3Files.length);
    audio.src = mp3Files[randomIndex]; // 设置音频源为随机选择的歌曲
    audio.play(); // 播放音频
    isPlaying = true; // 设置播放状态为真
    document.querySelector('.play-pause-button').textContent = '暂停'; // 更新按钮文本为“暂停”
}

// 主题切换
const themes = [
    { bg: 'linear-gradient(90deg, #FF69B4, #FFB6C1)', secBg: 'linear-gradient(45deg, #FFCC99, #FFA07A)' },
    { bg: 'linear-gradient(90deg, #00BFFF, #1E90FF)', secBg: 'linear-gradient(45deg, #ADD8E6, #87CEFA)' },
    { bg: 'linear-gradient(90deg, #3CB371, #2E8B57)', secBg: 'linear-gradient(45deg, #98FB98, #00FA9A)' }
];
let currentTheme = 0;

function toggleTheme() {
    // 切换主题
    currentTheme = (currentTheme + 1) % themes.length;
    const theme = themes[currentTheme];
    document.body.style.background = theme.bg; // 更新背景色
    document.querySelector('header').style.background = theme.bg; // 更新头部背景色
    document.querySelector('main').style.background = theme.bg; // 更新主要内容区背景色
    document.querySelector('.content').style.background = theme.bg; // 更新内容区背景色
    document.querySelectorAll('.content section').forEach(section => section.style.background = theme.secBg); // 更新各部分背景色
    document.querySelector('footer').style.background = theme.bg; // 更新底部背景色
}

// 轻松一下按钮功能
function startRelax() {
    // 随机选择一个小游戏并打开
    const games = [
        'https://play2048.co/', 'https://playsnake.org/', 'https://hextris.io/', 'https://sudoku.com/',
        'https://www.bubbleshooter.net/', 'https://liferestart.syaro.io/public/index.html', 'https://proxx.app/',
        'https://pinball.flutter.dev/'
    ];
    window.open(games[Math.floor(Math.random() * games.length)], '_blank');
}

// 打开指定链接
function openLink(url) {
    window.open(url, '_blank');
}

// 切换下拉菜单显示状态
function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

// 打开指定视频链接
function navigateToLink(videoLink) {
    window.open(videoLink, '_blank');
}
