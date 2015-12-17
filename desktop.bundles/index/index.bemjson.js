module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
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
                                    lang: 'danish',
                                    url: '#Danish',
                                    content: 'Dansk (Danish)'
                                },
                                {
                                    lang: 'dutch',
                                    url: '#Nederlands',
                                    content: 'Nederlands (Dutch)'
                                },
                                {
                                    lang: 'finnish',
                                    url: '#Finnish',
                                    content: 'Suomi (Finnish)'
                                },
                                {
                                    lang: 'french',
                                    url: '#French',
                                    content: 'Français (French)'
                                },
                                {
                                    lang: 'german',
                                    url: '#Deutsch',
                                    content: 'Deutsch (German)'
                                },
                                {
                                    lang: 'greek',
                                    url: '#Greek',
                                    content: 'Ελληνικά (Greek)'
                                },
                                {
                                    lang: 'hungarian',
                                    url: '#Magyar',
                                    content: 'Magyar (Hungarian)'
                                },
                                {
                                    lang: 'italian',
                                    url: '#Italiano',
                                    content: 'Italiano (Italian)'
                                },
                                {
                                    lang: 'japanese',
                                    url: '#Japanese',
                                    content: '日本語 (Japanese)'
                                },
                                {
                                    lang: 'norwegian',
                                    url: '#Norwegian',
                                    content: 'Norsk (Norwegian)'
                                },
                                {
                                    lang: 'polish',
                                    url: '#Polish',
                                    content: 'Polski (Polish)'
                                },
                                {
                                    lang: 'portuguese',
                                    url: '#Portuguese',
                                    content: 'Português (Portuguese)'
                                },
                                {
                                    lang: 'romanian',
                                    url: '#Romanian',
                                    content: 'Română (Romanian)'
                                },
                                {
                                    lang: 'russian',
                                    url: '#Russian',
                                    content: 'Русский (Russian)'
                                },
                                {
                                    lang: 'spnish',
                                    url: '#Spanish',
                                    content: 'Español (Spanish)'
                                },
                                {
                                    lang: 'swedish',
                                    url: '#Swedish',
                                    content: 'Svenska (Swedish)'
                                },
                                {
                                    lang: 'turkish',
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
