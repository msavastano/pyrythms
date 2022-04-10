/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    if (x === 0) {
        return 0
    }
    let st = x.toString()
    let neg = ''
    if (st[0] === '-') {
        neg = st.substring(0,1)
        st = st.substring(1, st.length)
    }
    if (st.length === 1) {}
    let start = 0
    let end = st.length - 1
    while (start < end) {
        const tempS = st[start]
        const tempE = st[end]
        st = st.substring(0, start) + tempE + st.substring(start + 1);
        st = st.substring(0, end) + tempS + st.substring(end+1);
        start++
        end--
    }
    
    st = neg + st
    const ret = parseInt(st)
    if (ret < -(2**31) || ret > 2**31) {
        return 0
    }
    return ret
};