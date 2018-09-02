<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<HTML>
<HEAD>
<META HTTP-EQUIV="Content-Type" Content="text-html; charset=Windows-1252">
<title>SetInfo</title>
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
<h1><a name="_k2_setinfo"></a>SetInfo</h1>
<p>
The ADSI <b>SetInfo</b> method saves changed property values from the object into the metabase. After you have changed some or all of the values in the object properties, you must use the <b>SetInfo</b> method to save the new values back into the metabase. Only the values you changed will be saved back into the metabase; unchanged values will not be written. </p>
<h4>Syntax</h4>
<pre><i>object</i>.<b>SetInfo</b> 
 </pre>
<h4>Parts</h4>
<dl>
<dt>
<i>object</i></dt>
<dd>
Contains an IIS Admin Object, usually as a result of a previous <b>GetObject</b> operation.</dd>
</dl>
<h4>Code Example</h4>
<pre>&lt;% 
Dim IIsObj 
Set IIsObj = GetObject(&quot;IIS://LocalHost/W3SVC/1/Root&quot;) 
' Make some changes to properties 
' . . . 
' Save the changes back to the metabase 
IIsObj.<b>SetInfo</b> 
%&gt; 
 </pre>
<h4>See Also</h4>
<p>
<a href="/iishelp/iis/htm/sdk/aoii7vcf.htm"><b>GetInfo</b></a>, <a href="/iishelp/iis/htm/sdk/aoii5ius.htm"><b>Get</b></a>, <a href="/iishelp/iis/htm/sdk/aoii6c38.htm"><b>Put</b></a>, <a href="/iishelp/iis/htm/sdk/aoii5ewo.htm"><b>GetEx</b></a>, <a href="/iishelp/iis/htm/sdk/aoii1np4.htm"><b>PutEx</b></a>, <a href="/iishelp/iis/htm/sdk/aoii8htk.htm"><b>GetInfoEx</b></a></p>
<hr class="iis" size="1">
<p align="center"><em><a href="/iishelp/common/colegal.htm">&copy; 1997 by Microsoft Corporation. All rights reserved.</a></em></p>
</BODY>
</HTML>
                                                                                                                                                                                                                       