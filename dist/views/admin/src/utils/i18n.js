'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateTitle = generateTitle;
// translate router.meta.title, be used in breadcrumb sidebar tagsview
function generateTitle(title) {
  var hasKey = this.$te('route.' + title);

  if (hasKey) {
    // $t :this method from vue-i18n, inject in @/lang/index.js
    var translatedTitle = this.$t('route.' + title);

    return translatedTitle;
  }
  return title;
}
//# sourceMappingURL=i18n.js.map