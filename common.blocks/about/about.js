modules.define('about', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {}, {
    live: function() {
        this.liveBindTo('download', 'click', function() {
            ga('send', 'event', 'LandingPageNew', 'click', 'Download');
        });
    }
}));

});
