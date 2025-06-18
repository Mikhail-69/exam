const translations = {
    'ru': {
        title: 'Настройки',
        description: 'Яркость сайта'
    },
    'en': {
        title: 'Settings',
        description: 'Website Brightness'
    },
    'zh': {
        title: '设置',
        description: '网站亮度'
    },
    'ar': {
        title: 'الإعدادات',
        description: 'سطوع الموقع'
    },
    'hi': {
        title: 'सेटिंग्स',
        description: 'वेबसाइट की चमक'
    },
    'bn': {
        title: 'সেটিংস',
        description: 'ওয়েবসাইটের উজ্জ্বলতা'
    },
    'pt': {
        title: 'Configurações',
        description: 'Brilho do site'
    },
    'ja': {
        title: '設定',
        description: 'ウェブサイトの明るさ'
    },
    'pl': {
        title: 'Ustawienia',
        description: 'Jasność strony'
    },
    'fr': {
        title: 'Paramètres',
        description: 'Luminosité du site'
    },
    'it': {
        title: 'Impostazioni',
        description: 'Luminosità del sito'
    },
    'es': {
        title: 'Configuraciones',
        description: 'Brillo del sitio web'
    }
};


document.getElementById('language-selector').addEventListener('change', function() {
    const selectedLanguage = this.value;
    updateLanguage(selectedLanguage);
});

function updateLanguage(language) {
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');

    titleElement.textContent = translations[language].title;
    descriptionElement.textContent = translations[language].description;

}
document.getElementById('saveButton').addEventListener('click', (event) => {        event.preventDefault();
    localStorage.setItem('brightness', slider.value);
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
    
    alert('Настройки сохранены!');
});

// Обновление значения при изменении слайдера
slider.oninput = function() {
    output.textContent = this.value;
};

// Переключение темы
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    toggleButton.textContent = body.classList.contains('dark-theme') ? 'Переключить на светлую тему' : 'Переключить на темную тему';
    
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
});

// Обработчик изменения языка
languageSelector.addEventListener('change', (event) => {
    updateLanguage(event.target.value);
});

// Восстановление настроек при загрузке страницы
restoreSettings();
