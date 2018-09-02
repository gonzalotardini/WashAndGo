<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<HTML>
<HEAD>
<META HTTP-EQUIV="Content-Type" Content="text-html; charset=Windows-1252">
<title>IIsFilter</title>
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
<h3><a name="_k2_iisfilter"></a>IIsFilter</h3>
<p>
You can use the <b>IIsFilter</b> object to set metabase properties that affect the operation of ISAPI filters. You can set filter properties at the WebService level or at an individual Web server. </p>
<p>
The <b>IIsFilter</b> object is an ADSI object, but not an ADSI container object. </p>
<h4>ADsPath</h4>
<p>
IIS://<i>MachineName</i>/W3SVC/Filters/<i>FilterName</i></p>
<p>
Where <i>MachineName </i>can be any name or &quot;LocalHost&quot;.</p>
<p>
or</p>
<p>
IIS://<i>MachineName</i>/W3SVC/<i>n</i>/Filters/<i>FilterName</i></p>
<p>
Where <i>MachineName </i>can be any name or &quot;LocalHost&quot;, and <i>n</i> is the number of a Web server.</p>
<h4>Syntax</h4>
<pre><i>varReturn </i><b>= </b><i>object</i><b>.</b>{<i>Method</i>}
 </pre>
<h4>Parts</h4>
<dl>
<dt>
<i>varReturn</i></dt>
<dd>
A variable that receives the return value from the method.<br>
</dd>
<dt>
<i>object</i></dt>
<dd>
A variable that contains the <b>IIsFilter</b> object, usually as a result of a previous <b>GetObject</b> operation.<br>
</dd>
<dt>
<i>Method</i></dt>
<dd>
The object method chosen.</dd>
</dl>
<h4>Properties</h4>
<p>
<a href="/iishelp/iis/htm/sdk/aoii57hv.htm"><b>ADSI Object Properties</b></a></p>
<b>Metabase Properties</b>
<table>
<tr valign=top>
<td>
<a href="/iishelp/iis/htm/sdk/arpr4mcu.htm"><b>FilterDescription</b></a></td>
<td>
<a href="/iishelp/iis/htm/sdk/arpr9mk4.htm"><b>NotifyNonSecurePort</b></a></td>
</tr>
<tr valign=top>
<td>
<a href="/iishelp/iis/htm/sdk/arpr799g.htm"><b>FilterEnabled</b></a></td>
<td>
<a href="/iishelp/iis/htm/sdk/arpr8mco.htm"><b>NotifyOrderHigh</b></a