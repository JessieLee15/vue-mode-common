/**
 * 
 * @param {Number} num 当前页
 * @param {Number} size 每页条数
 */
export const getPageParams = (num, size) => {
    let pn = (num - 1) * size
    let rn = size
    return {
        pn,
        rn
    }
}

/**
 * 是否是移动端/pc
 * @param 
 */
export const isPC = () => {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

/**
 * 解析url
 */
export const getParamsFromUrl = (url) => {
    let urlParams = [], origin= '';
    //使用indexOf()函数进行检索?，返回的是字符串的下标
    let n = url.indexOf("?");
    //使用substr进行截取
    if (n >= 0) {
        //表示从n这个位置一直截取到最后   
        let url_sub = url.substr(n + 1);
        //对截取到的字符串进行分割
        let sp_arr = url_sub.split("&");

        sp_arr.forEach(function (ele, index) {
            let item = ele.split("=");
            urlParams[item[0]] = item[1]
        });
        origin = url.substr(0, n);
    } else {
        origin = url;
    }
    return {
        origin: origin,
        params: urlParams
    };
}

/**函数防抖 */
export const debounce = (fn, t) => {
    let delay = t || 500;
    let timer;
    return function () {
        let args = arguments;
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, args);
        }, delay);
    }
};
/**
 * 判断是否是数组
 * @param data
 * @returns {boolean}
 */
export const isArray = (data) => {
    return Object.prototype.toString.call(data) === '[object Array]'
}

export const date2star = (date,format='YYYY-MM-dd') => {
    const obj = {
        YYYY:date.getFullYear(),
        MM:date.getMonth() + 1,
        dd:date.getDate()
    };

    return obj.YYYY + '-' + obj.MM + '-' + obj.dd
}