let timeId;

let Util = {
    /**
     * 延迟执行函数
     * @param func  延迟后执行的函数
     * @param duration  延迟时间
     * @param context
     */
    delayCall(func, duration, context) {
        let me = this;
        let clearCall = function () {
            if (timeId) {
                clearTimeout(timeId);
            }
        };
        clearCall();
        timeId = setTimeout(function () {
            timeId = null;
            if (typeof func === 'function') {
                func.apply(context || me);
            }
        }, duration || 300);
    }
};
export default Util;