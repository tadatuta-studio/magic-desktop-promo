block('lang-switcher').replace()(function() {
    var content = this.ctx.content;

    return {
        block: 'dropdown',
        mods: { switcher: 'link', theme: 'islands', size: 'm' },
        mix: { block: this.block },
        switcher: content.shift().content,
        popup: content.map(function(item) {
            return {
                block: 'link',
                mix: { block: this.block, elem: 'item', elemMods: { lang: item.lang } },
                url: item.url,
                content: item.content
            };
        }, this)
    };
});
