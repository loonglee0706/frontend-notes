var nativeTrim = String.prototype.trim;
function escapeRegExp(str){
    if (str == null) return '';
    return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}
function defaultToWhiteSpace(characters) {
    if (characters == null)
        return '\\s';
    else if (characters.source)
        return characters.source;
    else
        return '[' + escapeRegExp(characters) + ']';
}
function trim(str, characters){
    if (str == null) return '';
    if (!characters && nativeTrim) return nativeTrim.call(str);
    characters = defaultToWhiteSpace(characters);
    return String(str).replace(new RegExp('\^' + characters + '+|' + characters + '+$', 'g'), '');
}
