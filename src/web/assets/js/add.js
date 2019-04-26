class Book {
    constructor() {
        this.btn = $('#addbook');
    }

    add() {
        this.btn.click(dl.debounce(function () {
            console.log(111)
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
                    alert('添加成功')
                }
            });
        }));
    }
}

export default Book;