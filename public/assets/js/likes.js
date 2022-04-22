(self["webpackChunkcontrollersroutes"] = self["webpackChunkcontrollersroutes"] || []).push([["js/likes"],{

/***/ "./assets/js/likes.js":
/*!****************************!*\
  !*** ./assets/js/likes.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

$(document).ready(function () {
  $('.userLikesVideo').hide();
  $('.userDoesNotLikeVideo').hide();
  $('.noActionYet').hide();
  $('.toogle-likes').on('click', function (e) {
    e.preventDefault();
    var $link = $(e.currentTarget);
    $.ajax({
      method: 'POST',
      url: $link.attr('href')
    }).done(function (data) {
      switch (data.action) {
        case 'liked':
          var number_of_likes_str = $('.number-of-likes-' + data.id);
          var number_of_likes = parseInt(number_of_likes_str.html().replace(/\D/g, '')) + 1;
          number_of_likes_str.html('(' + number_of_likes + ')');
          $('.likes-video-id-' + data.id).show();
          $('.dislikes-video-id-' + data.id).hide();
          $('.video-id-' + data.id).hide();
          break;

        case 'disliked':
          var number_of_dislikes_str = $('.number-of-dislikes-' + data.id);
          var number_of_dislikes = parseInt(number_of_dislikes_str.html().replace(/\D/g, '')) + 1;
          number_of_dislikes_str.html('(' + number_of_dislikes + ')');
          $('.dislikes-video-id-' + data.id).show();
          $('.likes-video-id-' + data.id).hide();
          $('.video-id-' + data.id).hide();
          break;

        case 'undo liked':
          var number_of_likes_str = $('.number-of-likes-' + data.id);
          var number_of_likes = parseInt(number_of_likes_str.html().replace(/\D/g, '')) - 1;
          number_of_likes_str.html('(' + number_of_likes + ')');
          $('.video-id-' + data.id).show();
          $('.dislikes-video-id-' + data.id).hide();
          $('.likes-video-id-' + data.id).hide();
          break;

        case 'undo disliked':
          var number_of_dislikes_str = $('.number-of-dislikes-' + data.id);
          var number_of_dislikes = parseInt(number_of_dislikes_str.html().replace(/\D/g, '')) - 1;
          number_of_dislikes_str.html('(' + number_of_dislikes + ')');
          $('.video-id-' + data.id).show();
          $('.dislikes-video-id-' + data.id).hide();
          $('.likes-video-id-' + data.id).hide();
          break;
      }
    });
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_parse-int_js-node_modules_core-js_modules_es_string_r-f48d8e"], () => (__webpack_exec__("./assets/js/likes.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);