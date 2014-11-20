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

// JSON RegExp
var rvalidchars = /^[\],:{}\s]*$/,
    rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
    rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g;
function parseJSON( data ) {
    if ( window.JSON && window.JSON.parse ) {
        return window.JSON.parse( data );
    }
    if ( data === null ) {
        return data;
    }
    if ( typeof data === "string" ) {
        data = trim( data );
        if ( data ) {
            if ( rvalidchars.test( data.replace( rvalidescape, "@" )
                .replace( rvalidtokens, "]" )
                .replace( rvalidbraces, "")) ) {

                return ( new Function( "return " + data ) )();
            }
        }
    }
    return null;
}