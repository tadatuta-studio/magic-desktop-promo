block('about')(
    elem('main').mix()({ elem: 'inner' }),
    elem('partners').content()(function() {
        return {
            elem: 'inner',
            content: applyNext()
        };
    })
);
