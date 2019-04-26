function dl() {}

/**
 * 防抖函数，返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
 *
 * @param  {function} func        回调函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @param  {boolean}  immediate   设置为ture时，是否立即调用函数
 * @return {function}             返回客户调用函数
 */
dl.debounce = function (fn, wait = 1000, immidiate = true) {
    let timer = 0;
    let state = false;
    let later = (args) => setTimeout(() => {
        if (!immidiate) fn.apply(this, args);
        state = false;
    }, wait);

    return function (...args) {
        if (immidiate && !state) {
            fn.apply(this, args);
            state = true;
        }
        if (timer) clearTimeout(timer);
        timer = later(args);
    }
}