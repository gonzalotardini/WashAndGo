<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<HTML>
<HEAD>
<META HTTP-EQUIV="Content-Type" Content="text-html; charset=Windows-1252">
<title>HttpExpires</title>
<script language="JavaScript">

    szNavVersion = navigator.appVersion

    if (navigator.appName == "Microsoft Internet Explorer") {
	if (szNavVersion.indexOf ("4.") >= 0) {
	    document.writeln('<link rel="stylesheet" type="text/css" href="/iishelp/common/spidie4.css">');
	} else {
	    document.writeln('<link rel="stylesheet" type="text/css" href="/iishelp/common/spidie3.css">');
	}
    }
    else if (navigator.appName == "Netscape") {
	document.writeln('<link rel="stylesheet" type="text/css" href="/iishelp/common/spidie4.css">');
    }
    else {
	document.writeln('<link rel="stylesheet" type="text/css" href="/iishelp/common/spidie3.css">');
    }

</script>
<META NAME="DESCRIPTION" CONTENT="Internet Information Server reference information"></HEAD>
<BODY BGCOLOR=#FFFFFF TEXT=#000000>
<font face="Verdana, Arial, Helvetica">
<h1><a name="_k2_httpexpires"></a>HttpExpires</h1>
<p>
This property specifies the expiration of HTML document content by returning the value to the browser in the HTML file header. The browser compares the value of this property with the current date to determine whether to display a cached page or to request an updated page from the server. This property can be relative, or dynamic, using the format D, <i>#SecondsUntilExpiration</i> (with 0xFFFFFFFF indicating no expiration date), or absolute, with the format S,<i>ValidGMTString</i>.</p>
<p>
The following table describes this property: </p>
<table>
<tr valign=top>
<td>
Data type</td>
<td>
String</td>
</tr>
<tr valign=top>
<td>
Default value</td>
<td>
D,0xFFFFFFFF (No expiration)</td>
</tr>
<tr valign=top>
<td>
Default inheritance</td>
<td>
Inheritable</td>
</tr>
</table><br>
<p>
Accessible by IIS Admin Objects:</p>
<table>
<tr valign=top>
<td>
<a href="/iishelp/iis/htm/sdk/aoii1p5x.htm"><b>IIsWebService</b></a></td>
<td>
<a href="/iishelp/iis/htm/sdk/aoii7zn6.htm"><b>IIsWebServer</b></a></td>
<td>
<a href="/iishelp/iis/htm/sdk/aoii8v5e.htm"><b>IIsWebVirtualDir</b></a></td>
<td>
<a href="/iishelp/iis/htm/sdk/aoii1jw9.htm"><b>IIsWebDirectory</b></a></td>
</tr>
<tr valign=top>
<td>
<a href="/iishelp/iis/htm/sdk/aoii136t.htm"><b>IIsWebFile</b></a></td>
<td>
</td>
<td>
</td>
<td>
</td>
</tr>
</table><br>
<hr class="iis" size="1">
<p align="center"><em><a href="/iishelp/common/colegal.htm">&copy; 1997 by Microsoft Corporation. All rights reserved.</a></em></p>
</BODY>
</HTML>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<HTML>