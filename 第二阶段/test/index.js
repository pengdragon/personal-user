class Menu {
    constructor() {
        this.first = document.querySelector('.first');
        this.second = document.querySelector('.second');
        this.thed = document.querySelector('.thed');
        this.four = document.querySelector('.four');
        console.log(this.second)
        this.firstChildAll = this.first.children;
        console.log(this.forstChildAll);
    }
    init() {
        this.insertData();
        this.event();
    }
    event() {
        $(document).click(function () {
            $('.mask').css('display', 'none')
        })
        $('.firli').on('click', '.firstone', function () {
            $(this).next().next().fadeToggle();
            $('.first').on('click', '.cpm', function (e) {
                e = e || window.event;
                e.stopPropagation() || e.cancelBubble == true;
                $('.mask').css('display', 'block');
                var index = $(this).parent().index('.firli ul li');
                var indexf = $(this).parent().parent().parent().index('.first li:has(ul)'); //加一个.forst作为作用域的限制，即于此无关的li不会影响到此
                console.log(indexf)
                console.log(index)
                $('.mask').empty();
                $('.mask').append(indexf + '---' + index);
            })

        })
        $('.secli').on('click', '.firstone', function () {
            $(this).next().next().fadeToggle();
            $('.first').on('click', '.cpm', function (e) {
                e = e || window.event;
                e.stopPropagation() || e.cancelBubble == true;
                $('.mask').css('display', 'block');
                var index = $(this).parent().index('.secli ul li');
                var indexf = $(this).parent().parent().parent().index('.first li:has(ul)');
                console.log(indexf)
                console.log(index)
                $('.mask').empty();
                $('.mask').append(indexf + '---' + index);
            })

        })
        $('.theli').on('click', '.firstone', function () {
            $(this).next().next().fadeToggle();
            $('.first').on('click', '.cpm', function (e) {
                e = e || window.event;
                e.stopPropagation() || e.cancelBubble == true;
                $('.mask').css('display', 'block');
                var index = $(this).parent().index('.theli ul li');
                var indexf = $(this).parent().parent().parent().index('.first li:has(ul)');
                console.log(indexf)
                console.log(index)
                $('.mask').empty();
                $('.mask').append(indexf + '---' + index);
            })

        })
        $('.fouli').on('click', '.firstone', function () {
            $(this).next().next().fadeToggle();
            $('.first').on('click', '.cpm', function (e) {
                e = e || window.event;
                e.stopPropagation() || e.cancelBubble == true;
                $('.mask').css('display', 'block');
                var index = $(this).parent().index('.fouli ul li');
                var indexf = $(this).parent().parent().parent().index('.first li:has(ul)');
                console.log(indexf)
                console.log(index)
                $('.mask').empty();
                $('.mask').append(indexf + '---' + index);
            })

        })

    }
    insertData() {
        var _this = this;
        $.ajax('menu.json', {
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({}),
            success: function (data) {
                console.log(data)
                for (var i = 0; i < data.length; i++) {
                    console.log(1)
                    console.log(_this.firstChildAll[i].firstElementChild)
                    _this.firstChildAll[i].firstElementChild.innerHTML = data[i].name;
                    _this.firstChildAll[i].firstElementChild.nextElementSibling.innerHTML = data[i].content;
                    console.log(_this.firstChildAll[i].lastElementChild.firstElementChild.children[0])
                    for (var j = 0; j < data[i].child.length; j++) {
                        console.log(data[i].child.length)
                        _this.firstChildAll[i].lastElementChild.children[j].children[0].innerHTML = data[i].child[j].name;
                        _this.firstChildAll[i].lastElementChild.children[j].children[1].innerHTML = data[i].child[j].content;
                    }
                }

            }

        })
    }
}