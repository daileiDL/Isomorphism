// import jquery from 'jquery';
// import 'jq-paginator';
//import '../../components/book/x-booklist';



import list from '../../components/list/list';

list.init();

// jquery('#page').jqPaginator({
//     totalPages: parseInt('{{pages.pageCount}}'),
//     visiblePages: 8,
//     currentPage: parseInt('{{pages.currentPage}}'),
//     first: '<li><a href="javascript:void(0);">首页</a></li>',
//     prev: '<li><a href="javascript:void(0);">上一页</a></li>',
//     next: '<li><a href="javascript:void(0);">下一页</a></li>',
//     last: '<li><a href="javascript:void(0);">尾页</a></li>',
//     page: '<li><a href="javascript:void(0);">\{\{page\}\}</a></li>',
//     onPageChange: function (num, type) {
//         console.log(num, type);
//         if (type == 'change') {
//             location.href = "/?book_name={{querys.book_name || ''}}&page=" + num;
//         }
//     }
// });