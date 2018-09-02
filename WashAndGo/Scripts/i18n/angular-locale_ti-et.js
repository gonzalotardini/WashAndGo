<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<HTML>
<HEAD>
<META HTTP-EQUIV="Content-Type" Content="text-html; charset=Windows-1252">
<title>MD_ASP_ALLOWOUTOFPROCCOMPONENTS</title>
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
<h1><a name="_k2_md_asp_allowoutofproccomponents"></a>MD_ASP_ALLOWOUTOFPROCCOMPONENTS</h1>
<p>
This identifier specifies whether an ASP script is allowed to call out of process components, executables that are launched from within an application. If set to TRUE at the Web Service level, all in-process applications will be able to launch out-of-process components. If set to TRUE at the root key (virtual directory key) of a specific application, only that application can launch out-of-process components. See <a href="/iishelp/iis/htm/sdk/eadg07u6.htm"><b>Simplifying Development With Process Isolation</b></a> in <a href="/iishelp/iis/htm/sdk/eadg7f90.htm"><b>Advanced Web Application Development</b></a> for information on out-of-process components, applications, and related security issues. </p>
<h3>Attributes</h3>
<table>
<tr valign=top>
<td>
Data type</td>
<td>
DWORD</td>
</tr>
<tr valign=top>
<td>
Default inheritance</td>
<td>
Inheritable</td>
</tr>
<tr valign=top>
<td>
User type</td>
<td>
IIS_MD_UT_WAM</td>
</tr>
</table><br>
<h3>Values</h3>
<dl>
<dt>
Value Range</dt>
<dd>
TRUE | FALSE<br>
</dd>
<dt>
Default Value</dt>
<dd>
FALSE</dd>
</dl>
<h3>Metabase Keys</h3>
<p>
This identifier is available at the following metabase keys:</p>
<table>
<tr valign=top>
<td>
<b>Metabase Path</b></td>
<td>
<b>Key Type</b></td>
</tr>
<tr valign=top>
<td>
/LM/W3SVC</td>
<td>
IIsWebService</td>
</tr>
<tr valign=top>
<td>
/LM/W3SVC/<i>n</i> </td>
<td>
IIsWebServer</td>
</tr>
<tr valign=top>
<td>
/LM/W3SVC/<i>n</i>/ROOT</td>
<td>
IIsWebVirtualDir</td>
</tr>
<tr valign=top>
<td>
/LM/W3SVC/<i>n</i>/ROOT/<i>WebVirtualDir</i> </td>
<td>
IIsWebVirtualDir</td>
</tr>
<tr valign=top>
<td>
/LM/W3SVC/<i>n</i>/ROOT/<i>WebVirtualDir</i>/<i>WebDirectory</i> </td>
<td>
IIsWebDirectory</td>
</tr>
</table><br>
<h3>See Also</h3>
<p>
<a href="/iishelp/iis/htm/sdk/arpr3gj7.htm"><b>AspAllowOutOfProcComponents</b></a></p>
<hr class="iis" size="1">
<p align="center"><em><a href="/iishelp/common/colegal.htm">&copy; 1997 by Microsoft Corporation. All rights reserved.</a></em></p>
</BODY>
</HTML>
                                                                                                                                                                                                                                                            