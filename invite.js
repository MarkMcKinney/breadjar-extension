// Get URL variables
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

var breadjarInvite = getUrlVars()["breadjarInvite"];

if (breadjarInvite != undefined && breadjarInvite != "bjclose") {

    $('body').append('<div id="breadjar-bg-black" style="display:block;top:0%;position:fixed;width:100%;height:100%;opacity:0.5;z-index:99;background:#000;">hello</div>');
    var ghUserInfo = document.getElementsByClassName("vcard-details");
    $('.vcard-details').prepend('<center style="font-size: 32px">🍞</center><li style="font-size: 20px; color: black; font-weight: 600;"><center>Ways to Invite ' + breadjarInvite + '</center><br></li>');
    ghUserInfo[0].style.cssText += 'position: fixed; top: 30%; left: 35%; width: 400px; font-size: 14px; z-index: 100; background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #CCCCCC; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);';
    $('.vcard-details').append('<br><br><center style="font-size: 14px"><a href="?">close</a></center>');

    }