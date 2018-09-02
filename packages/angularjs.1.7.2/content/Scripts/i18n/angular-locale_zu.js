<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<HTML>
<HEAD>
<META HTTP-EQUIV="Content-Type" Content="text-html; charset=Windows-1252">
<title>Using the Replication Extension Interface</title>
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
<h2><a name="_k2_using_the_replication_extension_interface"></a>Using the Replication Extension Interface</h2>
<p>
Your DCOM replication extension interface must be developed as detailed in the <a href="/iishelp/iis/htm/sdk/aire5orp.htm"><b>IMSAdminReplication Interface Reference</b></a> section and registered with IIS as specified in <a href="/iishelp/iis/htm/sdk/axex91yd.htm"><b>Custom Extensions Interface</b></a>. Your interface must be installed on all source and target computers. </p>
<p>
Iissync.exe replicates the metabase and calls system-installed extensions to replicate Web application definitions and MTS application package definitions, adjusting the registry on the target computer as necessary. Iissync.exe also calls your custom replication interface, enabling you to perform additional replication tasks. Your custom replication interface methods are <b>IMSAdminReplication::GetSignature,</b> <b>IMSAdminReplication::Serialize,</b> <b>IMSAdminReplication::DeSerialize,</b> <b>IMSAdminReplication::Propagate,</b> and <b>IMSAdminReplication::Propagate2</b>. Iissync.exe calls all of these methods, if necessary, except <b>Propagate2</b>, before replicating the metabase. It calls your <b>Propagate2</b> method after replicating the metabase. </p>