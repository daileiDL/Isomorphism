import {
    LitElement,
    html
} from 'lit-element';

class XBookList extends LitElement {
    static get properties() {
        return {
            books: Array
        };
    }
    constructor() {
        super();
        this.books = [{
                "book_id": 3,
                "book_name": "javascript函数式编程",
                "book_author": "dailei",
                "book_publish": "aaaa",
                "book_date": "2019-12-02",
                "book_summary": "aaaa",
                "book_remark": "aaa"
            },
            {
                "book_id": 4,
                "book_name": "JavaScript dom编程艺术",
                "book_author": "阿萨德发",
                "book_publish": "阿萨德发",
                "book_date": "2019-01-10",
                "book_summary": "阿斯顿发生",
                "book_remark": "阿萨德发"
            },
            {
                "book_id": 18,
                "book_name": "javascript函数式编程",
                "book_author": "dailei",
                "book_publish": "aaaa",
                "book_date": "2019-12-02",
                "book_summary": "aaaa",
                "book_remark": "aaa"
            },
            {
                "book_id": 19,
                "book_name": "javascript函数式编程",
                "book_author": "DFSDFG",
                "book_publish": "SDFGSDGFD",
                "book_date": "2019-01-08",
                "book_summary": "SDFASDFD",
                "book_remark": "SDFGSDFGFD"
            },
            {
                "book_id": 20,
                "book_name": "javascript函数式编程",
                "book_author": "去去去",
                "book_publish": "我我我",
                "book_date": "2019-01-15",
                "book_summary": "阿斯顿发斯蒂芬",
                "book_remark": "啊发顺丰"
            },
            {
                "book_id": 21,
                "book_name": "javascript函数式编程",
                "book_author": "DFSDFG",
                "book_publish": "SDFGSDGFD",
                "book_date": "2019-01-08",
                "book_summary": "SDFASDFD",
                "book_remark": "SDFGSDFGFD"
            },
            {
                "book_id": 22,
                "book_name": "javascript函数式编程",
                "book_author": "去去去",
                "book_publish": "AFDSF",
                "book_date": "2019-01-16",
                "book_summary": "ASDFSADFDS",
                "book_remark": "DAFDS"
            },
            {
                "book_id": 23,
                "book_name": "javascript函数式编程",
                "book_author": "去去去",
                "book_publish": "AFDSF",
                "book_date": "2019-01-16",
                "book_summary": "ASDFSADFDS",
                "book_remark": "DAFDS"
            },
            {
                "book_id": 24,
                "book_name": "javascript",
                "book_author": "去去去",
                "book_publish": "as阿斯顿发",
                "book_date": "2019-01-16",
                "book_summary": "阿斯顿发",
                "book_remark": "阿是非得失"
            },
            {
                "book_id": 25,
                "book_name": "javascript函数式编程",
                "book_author": "阿斯顿发",
                "book_publish": "SDFGSDGFD",
                "book_date": "2019-01-15",
                "book_summary": "阿道夫",
                "book_remark": "水电费"
            }
        ];
    }
    render() {
        return html `
            <table class="table table-bordered table-hover table-striped text-center">
                <tr class="info">
                    <th class="text-center">#</th>
                    <th class="text-center">书名</th>
                    <th class="text-center">作者</th>
                    <th class="text-center">出版社</th>
                    <th class="text-center">出版日期</th>
                    <th class="text-center">简介</th>
                    <th class="text-center">备注</th>
                    <th class="text-center">操作</th>
                </tr>
                ${this.books.map(book => html`
                    <tr>
                        <td>
                            ${book.book_id}
                        </td>
                        <td>
                            ${book.book_name}
                        </td>
                        <td>
                            ${book.book_author}
                        </td>
                        <td>
                            ${book.book_publish}
                        </td>
                        <td>
                            ${book.book_date}
                        </td>
                        <td>
                            ${book.book_summary}
                        </td>
                        <td>
                            ${book.book_remark}
                        </td>
                        <td>
                            <a href="/admin/book/edit/${book.book_id}"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></a>&nbsp;&nbsp;&nbsp;
                            <a href="/admin/book/delete/${book.book_id}"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>
                        </td>
                    </tr>
                `)}
            </table>
        `;
    }
}

customElements.define('x-booklist', XBookList);