block('about')(
    js()(true),
    elem('main').mix()({ elem: 'inner' }),
    elem('partners').content()(function() {
        return {
            elem: 'inner',
            content: applyNext()
        };
    })
);
