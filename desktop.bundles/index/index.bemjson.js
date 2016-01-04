module.exports = {
    block: 'page',
    title: '@MetaStrings.HPUpdateLandingTitle',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '@MetaStrings.HPUpdateLandingDescription' } },
        { elem: 'meta', attrs: { name: 'keywords', content: '@MetaStrings.HPUpdateLandingKeywords' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'about',
            content: [
                {
                    block: 'header',
                    content: [
                        {
                            block: 'lang-switcher',
                            content: [
                                {
                                    lang: 'english',
                                    url: '#English',
                                    content: 'International (English)'
                                },
                                {
                                    lang: 'da-DK',
                                    url: '#Danish',
                                    content: 'Dansk (Danish)'
                                },
                                {
                                    lang: 'nl-NL',
                                    url: '#Nederlands',
                                    content: 'Nederlands (Dutch)'
                                },
                                {
                                    lang: 'fi-FI',
                                    url: '#Finnish',
                                    content: 'Suomi (Finnish)'
                                },
                                {
                                    lang: 'fr-FR',
                                    url: '#French',
                                    content: 'Français (French)'
                                },
                                {
                                    lang: 'de-DE',
                                    url: '#Deutsch',
                                    content: 'Deutsch (German)'
                                },
                                {
                                    lang: 'el-GR',
                                    url: '#Greek',
                                    content: 'Ελληνικά (Greek)'
                                },
                                {
                                    lang: 'hu-HU',
                                    url: '#Magyar',
                                    content: 'Magyar (Hungarian)'
                                },
                                {
                                    lang: 'it-IT',
                                    url: '#Italiano',
                                    content: 'Italiano (Italian)'
                                },
                                {
                                    lang: 'ja-JP',
                                    url: '#Japanese',
                                    content: '日本語 (Japanese)'
                                },
                                {
                                    lang: 'nb-NO',
                                    url: '#Norwegian',
                                    content: 'Norsk (Norwegian)'
                                },
                                {
                                    lang: 'pl-PL',
                                    url: '#Polish',
                                    content: 'Polski (Polish)'
                                },
                                {
                                    lang: 'pt-PT',
                                    url: '#Portuguese',
                                    content: 'Português (Portuguese)'
                                },
                                {
                                    lang: 'ro-RO',
                                    url: '#Romanian',
                                    content: 'Română (Romanian)'
                                },
                                {
                                    lang: 'ru-RU',
                                    url: '#Russian',
                                    content: 'Русский (Russian)'
                                },
                                {
                                    lang: 'es-ES',
                                    url: '#Spanish',
                                    content: 'Español (Spanish)'
                                },
                                {
                                    lang: 'sv-SE',
                                    url: '#Swedish',
                                    content: 'Svenska (Swedish)'
                                },
                                {
                                    lang: 'tr-TR',
                                    url: '#Turkish',
                                    content: 'Türkçe (Turkish)'
                                }
                            ]
                        },
                        {
                            block: 'logo',
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Magic Desktop&nbsp;9'
                                },
                                {
                                    elem: 'subtitle',
                                    content: 'A safe educational computer playground for children.'
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'main',
                    mix: { block: 'clearfix' },
                    content: [
                        {
                            elem: 'column',
                            content: [
                                {
                                    elem: 'slogan',
                                    content: [
                                        'Develops kid’s intelligence, ',
                                        'imagination and creativity!'
                                    ]
                                },
                                {
                                    elem: 'description',
                                    content: [
                                        'Magic Desktop creates a safe environment, ',
                                        'provides children with educational content ',
                                        'and delivers lots of fun while they are learning.'
                                    ]
                                },
                                {
                                    elem: 'download',
                                    content: [
                                        {
                                            block: 'button',
                                            mods: { type: 'link', theme: 'md' },
                                            url: 'http://www.magicdesktop.com/get',
                                            text: 'Download'
                                        },
                                        {
                                            elem: 'footnote',
                                            content: '(for Windows only)'
                                        }
                                    ]
                                },
                                { elem: 'stamp' }
                            ]
                        },
                        {
                            elem: 'laptop',
                            content: [
                                {
                                    block: 'video',
                                    url: 'https://www.youtube.com/embed/7pmPO95Y068?autoplay=1&showinfo=0'
                                },
                                { elem: 'stamp' }
                            ]
                        }
                    ]
                },
                {
                    elem: 'partners',
                    content: [
                        'Our partners:',
                        ['microsoft', 'disney', 'intel', 'hp', 'samsung', 'acer', 'asus'].map(partner => ({
                            elem: 'partner',
                            elemMods: { type: partner }
                        }))
                    ]
                }
            ]
        },
        {
            block: 'modal',
            mods: {
                autoclosable: true,
                theme: 'islands',
                'has-close': true
            },
            mix: { block: 'promo', js: true },
            content: {
                block: 'promo',
                elem: 'content'
            }
        }
    ]
};
