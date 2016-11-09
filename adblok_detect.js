function detectAdBlock() {
    var className = 'pub_300x250 pub_300x250m text-ad';
    var style = 'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;';
    var bait = document.createElement('div');
    bait.setAttribute('class', className);
    bait.setAttribute('style', style);
    bait = window.document.body.appendChild(bait);
    return check();

    function check() {
        if(window.document.body.getAttribute('abp') !== null
            || bait.offsetParent === null
            || bait.offsetHeight == 0
            || bait.offsetLeft == 0
            || bait.offsetTop == 0
            || bait.offsetWidth == 0
            || bait.clientHeight == 0
            || bait.clientWidth == 0) {
            return '1';
        } else if (window.getComputedStyle !== undefined) {
            var baitTemp = window.getComputedStyle(bait, null);
            if (baitTemp && (baitTemp.getPropertyValue('display') == 'none' || baitTemp.getPropertyValue('visibility') == 'hidden')) {
                return '1';
            }
        }
        return '0';
    }
}
