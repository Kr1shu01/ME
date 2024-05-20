const audio = document.getElementById('background-audio');
const mp3Files = [
    'path/to/your/mp3/directory/music1.mp3',
    'path/to/your/mp3/directory/music2.mp3',
    'path/to/your/mp3/directory/music3.mp3'
];
let isPlaying = false;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('initial-play-button').addEventListener('click', initialPlay);
    document.querySelector('.play-pause-button').addEventListener('click', togglePlayPause);
    document.querySelector('.next-button').addEventListener('click', playRandom);
});

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

// 主题切换
const themes = [
    { bg: 'linear-gradient(90deg, #FF69B4, #FFB6C1)', secBg: 'linear-gradient(45deg, #FFCC99, #FFA07A)' },
    { bg: 'linear-gradient(90deg, #00BFFF, #1E90FF)', secBg: 'linear-gradient(45deg, #ADD8E6, #87CEFA)' },
    { bg: 'linear-gradient(90deg, #3CB371, #2E8B57)', secBg: 'linear-gradient(45deg, #98FB98, #00FA9A)' }
];
let currentTheme = 0;
document.querySelector('.theme-button').addEventListener('click', toggleTheme);

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
document.querySelector('.relax-button').addEventListener('click', startRelax);
function startRelax() {
    const games = [
        'https://play2048.co/',
        'https://playsnake.org/',
        'https://hextris.io/',
        'https://sudoku.com/',
        'https://www.bubbleshooter.net/',
        'https://liferestart.syaro.io/public/index.html',
        'https://proxx.app/',
        'https://pinball.flutter.dev/'
    ];
    window.open(games[Math.floor(Math.random() * games.length)], '_blank');
}

// 外部链接按钮
document.querySelector('.ac-button').addEventListener('click', () => openLink('https://wxurl.cn/PME'));
document.querySelector('.tv-button').addEventListener('click', () => openLink('https://wxurl.cn/36C'));
document.querySelector('.console-button').addEventListener('click', () => openLink('http://yx.1dly.cn/'));
function openLink(url) {
    window.open(url, '_blank');
}

// 下拉菜单
document.querySelector('.dropdown-button').addEventListener('click', toggleDropdown);
function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}
document.addEventListener('click', function(event) {
    const dropdownContainer = document.querySelector('.dropdown-container');
    const dropdownMenu = document.getElementById('dropdown-menu');
    if (!dropdownContainer.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});
function navigateToLink(videoLink) {
    window.open(videoLink, '_blank');
}
