<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<HTML>
<HEAD>
<META HTTP-EQUIV="Content-Type" Content="text-html; charset=Windows-1252">
<title>IMSAdminReplication Interface Reference</title>
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
<h2><a name="_k2_imsadminreplication_interface_reference"></a>IMSAdminReplication Interface Reference</h2>
<p>
Any interfaces you create must implement the following <b>IMSAdminReplication </b>methods. </p>
<table>
<tr valign=top>
<td>
<b>Method</b></td>
<td>
<b>Description</b></td>
</tr>
<tr valign=top>
<td>
<a href="/iishelp/iis/htm/sdk/aire8acl.htm"><b>IMSAdminReplication::DeSerialize</b></a></td>
<td>
Receives data on the target computer that is provided by the <b>Serialize</b> method on the source computer.</td>
</tr>
<tr valign=top>
<td>
<a href="/iishelp/iis/htm/sdk/aire1vtx.htm"><b>IMSAdminReplication::GetSignature</b></a></td>
<td>
Provides your custom-designed signature that indicates the state of the data to be replicated.</td>
</tr>
<tr valign=top>
<td>
<a href="/iishelp/iis/htm/sdk/aire47ad.htm"><b>IMSAdminReplication::Propagate</b></a></td>
<td>
Called if signatures differ between source computer and target computer. Receives the name of the target computer so that you can transfer data.</td>
</tr>
<tr valign=top>
<td>
<a href="/iishelp/iis/htm/sdk/aire8ygi.htm"><b>IMSAdminReplication::Propagate2</b></a></td>
<td>
Called on the source computer after metabase replication is complete to a target computer. Receives the name of the target computer and signature comparison flag. Used for termination tasks.</td>
</tr>
<tr valign=top>
<td>
<a href="/iishelp/iis/htm/sdk/aire8xr9.htm"><b>IMSAdminReplication::Serialize</b></a></td>
<td>
Provides your data to be replicated by iissync.exe.</td>
</tr>
</table><br>
<hr class="iis" size="1">
<p align="center"><em><a href="/iishe