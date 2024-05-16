function playAudio() {
    const audio = document.getElementById('background-audio');
    audio.paused ? audio.play() : audio.pause();
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
        'https://play2048.co/',
        'https://playsnake.org/',
        'https://hextris.io/',
        'https://sudoku.com/',
        'https://www.bubbleshooter.net/',
        'https://liferestart.syaro.io/public/index.html',
        'https://proxx.app/',
        'https://pinball.flutter.dev/'
    ];
    const randomGame = games[Math.floor(Math.random() * games.length)];
    window.open(randomGame, '_blank');
}

function openAC() {
    window.open('https://wxurl.cn/PME', '_blank');
}

function openTV() {
    window.open('https://wxurl.cn/36C', '_blank');
}

function openConsole() {
    window.open('http://yx.1dly.cn/', '_blank');
}
