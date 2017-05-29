/**
 * Created by hualy on 2017/5/28.
 */

window.onload = function () {
    mui.previewImage();

    //滚动
    mui('.mui-scroll-wrapper').scroll({
        indicators: false, //是否显示滚动条
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    //刷新
    mui.init({
        pullRefresh : {
            container:"#refreshContainer",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
            down: {
                callback: pulldownRefresh
            },
            up: {
                contentrefresh: '正在加载...',
                callback: pullupRefresh
            }
        }
    });
    function createDiv() {
        return document.createElement('div');
    }

    function createDivLong() {
        var divLong = document.createElement('div');
        divLong.className = 'mui-row mui-col-sm-12 mui-col-xs-12';
        return divLong;
    }
    function cardLeft(url,group,content,name,price,detail,seller,phone) {
        //左边的card
        var tab1= createDiv();
        tab1.className = 'mui-col-xs-6 mui-col-sm-6';
        tab1.style.paddingRight = '5px';

        var muiCard = createDiv();
        muiCard.className = 'mui-card';

        var cardContent = createDiv();
        cardContent.className = 'mui-card-content mui-card-media';

        //动态添加图片的地方
        var image = document.createElement('img');
        image.setAttribute('src',url);
        image.setAttribute('data-preview-src','');
        image.setAttribute('data-preview-group',group);
        image.setAttribute('data-content',content);

        cardContent.appendChild(image);

        var cardFooter = createDiv();
        cardFooter.className = 'mui-card-footer';

        var contentInfo = createDivLong();

        var namePrice = createDivLong();

        var namePriceLeft = createDiv();
        namePriceLeft.className = 'mui-col-sm-6 mui-col-xs-6 good_name';
        namePriceLeft.innerText = name;

        var namePriceRight = createDiv();
        namePriceRight.className = 'mui-col-sm-6 mui-col-xs-6 good_price';
        namePriceRight.innerText = price;

        namePrice.appendChild(namePriceLeft);
        namePrice.appendChild(namePriceRight);

        var goodDetailRow = createDivLong();

        var goodDetail = createDiv();
        goodDetail.className = 'mui-col-sm-12 mui-col-xs-12 good_detail';
        goodDetail.innerText = detail;

        goodDetailRow.appendChild(goodDetail);

        var sellerNamePhone = createDivLong();

        var sellerNamePhoneLeft = createDiv();
        sellerNamePhoneLeft.className = 'mui-col-sm-6 mui-col-xs-6 seller_name';
        sellerNamePhoneLeft.innerText = seller;

        var sellerNamePhoneRight = createDiv();
        sellerNamePhoneRight.className = 'mui-col-sm-6 mui-col-xs-6 seller_phone';
        sellerNamePhoneRight.innerText = phone;

        sellerNamePhone.appendChild(sellerNamePhoneLeft);
        sellerNamePhone.appendChild(sellerNamePhoneRight);


        contentInfo.appendChild(namePrice);
        contentInfo.appendChild(goodDetailRow);
        contentInfo.appendChild(sellerNamePhone);

        cardFooter.appendChild(contentInfo);

        muiCard.appendChild(cardContent);
        muiCard.appendChild(cardFooter);

        tab1.appendChild(muiCard);
        return tab1;
    }

    //請求数据
    function pulldownRefresh() {
        setTimeout(function() {
            var content  = document.body.querySelector('.mui-content');
            var row = createDivLong();
            var tab1 = cardLeft('./images/cbd.jpg','1','hahahha','MacPro','998$','djflsjdkjflsdjflsdjfld','hualyzheng','12345678909');

            row.appendChild(tab1);
            content.insertBefore(row,content.firstChild);

            mui('#refreshContainer').pullRefresh().endPulldownToRefresh(); //refresh completed
        }, 1500);
    }
    function pullupRefresh() {
        
    }
};