modules.define('promo', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this.findBlockOn('modal').setMod('visible');
            }
        }
    }
}));

});
