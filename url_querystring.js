/*
 * get url querystring params' value
 */
function $_GET(param) {
    var vars = {};
    var src = location.href.toString();
    var hash = src.indexOf('#') >= 0 ? src.slice(src.indexOf('#')) : '';
    src && src.replace( hash , '' ).replace( 
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function( m, key, value ) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if ( param ) {
        return vars[param] ? vars[param] : null;    
    }
    return vars;
}
