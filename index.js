var setStyle = function(styleOf, sourceStyleProp, ToStyleOf, targetStyleProp){
    srcElmnt = window.getComputedStyle(styleOf);
    ToStyleOf.style[targetStyleProp] = srcElmnt[sourceStyleProp];
}

module.exports = setStyle