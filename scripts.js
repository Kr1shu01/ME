function playAudio() {
    var audio = document.getElementById('background-audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

const themes = [
    {
        bodyBg: 'linear-gradient(90deg, #FF69B4, #FFB6C1)',
        headerBg: 'linear-gradient(90deg, #FF69B4, #FFB6C1)',
        mainBg: 'linear-gradient(90deg, #FF69B4, #FFB6C1)',
        contentBg: 'linear-gradient(90deg, #FF69B4, #FFB6C1)',
        sectionBg: 'linear-gradient(45deg, #FFCC99, #FFA07A)',
        footerBg: 'linear-gradient(90deg, #FF69B4, #FFB6C1)'
    },
    {
        bodyBg: 'linear-gradient(90deg, #00BFFF, #1E90FF)',
        headerBg: 'linear-gradient(90deg, #00BFFF, #1E90FF)',
        mainBg: 'linear-gradient(90deg, #00BFFF, #1E90FF)',
        contentBg: 'linear-gradient(90deg, #00BFFF, #1E90FF)',
        sectionBg: 'linear-gradient(45deg, #ADD8E6, #87CEFA)',
        footerBg: 'linear-gradient(90deg, #00BFFF, #1E90FF)'
    },
    {
        bodyBg: 'linear-gradient(90deg, #3CB371, #2E8B57)',
        headerBg: 'linear-gradient(90deg, #3CB371, #2E8B57)',
        mainBg: 'linear-gradient(90deg, #3CB371, #2E8B57)',
        contentBg: 'linear-gradient(90deg, #3CB371, #2E8B57)',
        sectionBg: 'linear-gradient(45deg, #98FB98, #00FA9A)',
        footerBg: 'linear-gradient(90deg, #3CB371, #2E8B57)'
    }
];

let currentTheme = 0;

function toggleTheme() {
    currentTheme = (currentTheme + 1) % themes.length;
    const theme = themes[currentTheme];

    document.body.style.background = theme.bodyBg;
    document.querySelector('header').style.background = theme.headerBg;
    document.querySelector('main').style.background = theme.mainBg;
    document.querySelector('.content').style.background = theme.contentBg;
    document.querySelectorAll('.content section').forEach(section => {
        section.style.background = theme.sectionBg;
    });
    document.querySelector('footer').style.background = theme.footerBg;
}

function startRelax() {
    var userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) {
        window.location.href = 'chrome://dino/'; // 替换为在线版本的恐龙游戏
    } else if (userAgent.includes('Edg')) {
        window.location.href = 'edge://surf/'; // 替换为在线版本的冲浪游戏
    } else {
        window.location.href = 'https://play2048.co/';
    }
}
