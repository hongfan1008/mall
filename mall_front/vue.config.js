module.exports = {
    productionSourceMap: true,
    configureWebpack: {
        devtool: 'source-map'
    },
    devServer: {
        proxy: 'http://localhost:8088'
        },
    pages: {
        index: {
            entry: "src/main.js",
            template: "public/html/index.html",
            filename: "index.html"
        },
        login: {
            entry: "src/login/login.js",
            template: "public/html/login.html",
            filename: "login.html"
        },
        register: {
            entry: "src/register/register.js",
            template: "public/html/register.html",
            filename: "register.html"
        },
        dunnu: {
            entry: "src/productList/productList.js",
            template: "public/html/productList.html",
            filename: "productList.html"
        },
        gzg: {
            entry: "src/productList/productList2.js",
            template: "public/html/productList2.html",
            filename: "productList2.html"
        },
        lako: {
            entry: "src/productList/productList3.js",
            template: "public/html/productList3.html",
            filename: "productList3.html"
        },
        jefen: {
            entry: "src/productList/productList4.js",
            template: "public/html/productList4.html",
            filename: "productList4.html"
        },
        detail1: {
            entry: "src/details/detail1/DetailList1.js",
            template: "public/html/details/detail1/detailList1.html",
            filename: "detailList1.html"
         },
        detail2: {
            entry: "src/details/detail1/DetailList2.js",
            template: "public/html/details/detail1/detailList2.html",
            filename: "detailList2.html"
        },
        detail3: {
            entry: "src/details/detail1/DetailList3.js",
            template: "public/html/details/detail1/detailList3.html",
            filename: "detailList3.html"
        },
        detail4: {
            entry: "src/details/detail1/DetailList4.js",
            template: "public/html/details/detail1/detailList4.html",
            filename: "detailList4.html"
        },
        detail5: {
            entry: "src/details/detail1/DetailList5.js",
            template: "public/html/details/detail1/detailList5.html",
            filename: "detailList5.html"
        },
        detail6: {
            entry: "src/details/detail1/DetailList6.js",
            template: "public/html/details/detail1/detailList6.html",
            filename: "detailList6.html"
        },
        detail7: {
            entry: "src/details/detail1/DetailList7.js",
            template: "public/html/details/detail1/detailList7.html",
            filename: "detailList7.html"
        },
        detail8: {
            entry: "src/details/detail1/DetailList8.js",
            template: "public/html/details/detail1/detailList8.html",
            filename: "detailList8.html"
        },
        detail13: {
            entry: "src/details/detail2/DetailList1.js",
            template: "public/html/details/detail2/detailList1.html",
            filename: "detailList9.html"
        },
        detail14: {
            entry: "src/details/detail2/DetailList2.js",
            template: "public/html/details/detail2/detailList2.html",
            filename: "detailList10.html"
        },
        detail15: {
            entry: "src/details/detail2/DetailList3.js",
            template: "public/html/details/detail2/detailList3.html",
            filename: "detailList11.html"
        },
        detail16: {
            entry: "src/details/detail2/DetailList4.js",
            template: "public/html/details/detail2/detailList4.html",
            filename: "detailList12.html"
        },
        detail17: {
            entry: "src/details/detail2/DetailList5.js",
            template: "public/html/details/detail2/detailList5.html",
            filename: "detailList13.html"
        },
        detail18: {
            entry: "src/details/detail2/DetailList6.js",
            template: "public/html/details/detail2/detailList6.html",
            filename: "detailList14.html"
        },
        detail19: {
            entry: "src/details/detail2/DetailList7.js",
            template: "public/html/details/detail2/detailList7.html",
            filename: "detailList15.html"
        },
        detail20: {
            entry: "src/details/detail2/DetailList8.js",
            template: "public/html/details/detail2/detailList8.html",
            filename: "detailList16.html"
        },
        detail25: {
            entry: "src/details/detail3/DetailList1.js",
            template: "public/html/details/detail3/detailList1.html",
            filename: "detailList17.html"
        },
        detail26: {
            entry: "src/details/detail3/DetailList2.js",
            template: "public/html/details/detail3/detailList2.html",
            filename: "detailList18.html"
        },
        detail27: {
            entry: "src/details/detail3/DetailList3.js",
            template: "public/html/details/detail3/detailList3.html",
            filename: "detailList19.html"
        },
        detail28: {
            entry: "src/details/detail3/DetailList4.js",
            template: "public/html/details/detail3/detailList4.html",
            filename: "detailList20.html"
        },
        detail29: {
            entry: "src/details/detail3/DetailList5.js",
            template: "public/html/details/detail3/detailList5.html",
            filename: "detailList21.html"
        },
        detail30: {
            entry: "src/details/detail3/DetailList6.js",
            template: "public/html/details/detail3/detailList6.html",
            filename: "detailList22.html"
        },
        detail31: {
            entry: "src/details/detail3/DetailList7.js",
            template: "public/html/details/detail3/detailList7.html",
            filename: "detailList23.html"
        },
        detail32: {
            entry: "src/details/detail3/DetailList8.js",
            template: "public/html/details/detail3/detailList8.html",
            filename: "detailList24.html"
        },
        detail37: {
            entry: "src/details/detail4/DetailList1.js",
            template: "public/html/details/detail4/detailList1.html",
            filename: "detailList25.html"
        },
        detail38: {
            entry: "src/details/detail4/DetailList2.js",
            template: "public/html/details/detail4/detailList2.html",
            filename: "detailList26.html"
        },
        detail39: {
            entry: "src/details/detail4/DetailList3.js",
            template: "public/html/details/detail4/detailList3.html",
            filename: "detailList27.html"
        },
        detail40: {
            entry: "src/details/detail4/DetailList4.js",
            template: "public/html/details/detail4/detailList4.html",
            filename: "detailList28.html"
        },
        detail41: {
            entry: "src/details/detail4/DetailList5.js",
            template: "public/html/details/detail4/detailList5.html",
            filename: "detailList29.html"
        },
        detail42: {
            entry: "src/details/detail4/DetailList6.js",
            template: "public/html/details/detail4/detailList6.html",
            filename: "detailList30.html"
        },
        detail43: {
            entry: "src/details/detail4/DetailList7.js",
            template: "public/html/details/detail4/detailList7.html",
            filename: "detailList31.html"
        },
        detail44: {
            entry: "src/details/detail4/DetailList8.js",
            template: "public/html/details/detail4/detailList8.html",
            filename: "detailList32.html"
        },
        search:{
            entry: "src/searchApp.js",
            template: "public/html/search.html",
            filename: "search.html"
        },
        cart:{
            entry:'src/cart.js',
            template:'public/html/cart.html',
            filename:'cart.html'
        },
        payInfo:{
            entry:'src/PayInfo.js',
            template:'public/html/payInfo.html',
            filename:'payInfo.html'
        }
    }
};
