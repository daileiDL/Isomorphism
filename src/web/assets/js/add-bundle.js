"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var Book;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [],
    execute: function () {
      Book =
      /*#__PURE__*/
      function () {
        function Book() {
          _classCallCheck(this, Book);

          this.btn = $('#addbook');
        }

        _createClass(Book, [{
          key: "add",
          value: function add() {
            this.btn.click(dl.debounce(function () {
              console.log(111);
              $.post('/add', {
                book_name: $('#book_name').val().trim(),
                book_author: $('#book_author').val().trim(),
                book_publish: $('#book_publish').val().trim(),
                book_date: $('#book_date').val().trim(),
                book_summary: $('#book_summary').val().trim(),
                book_remark: $('#book_remark').val().trim()
              }, function (data) {
                console.log(data);

                if (data.code == 1) {
                  alert('添加成功');
                }
              });
            }));
          }
        }]);

        return Book;
      }();

      _export("default", Book);
    }
  };
});
