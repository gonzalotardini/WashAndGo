<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML//EN">
<HTML>
<HEAD>
<TITLE>Copying, Passing, and Comparing Data</TITLE>
<META NAME="MS.LOCALE" CONTENT="EN-US">
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=iso8859-1">
<META NAME="PRODUCT" CONTENT="JScript">
<META NAME="TECHNOLOGY" CONTENT="SCRIPTING">
<META NAME="CATEGORY" CONTENT="Tutorial">

<META NAME="Description" CONTENT="Copying, Passing, and Comparing Data">

</HEAD>
<BODY BGCOLOR=FFFFFF LINK=#0033CC>
<!--TOOLBAR_START-->
<!--TOOLBAR_EXEMPT-->
<!--TOOLBAR_END--><FONT FACE="Verdana, ARIAL, HELVETICA" SIZE=2>
<TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0 WIDTH=100%><TR VALIGN=TOP><TD WIDTH=360>
<FONT SIZE=1 COLOR=#660033>Microsoft&#174; JScript&trade;</FONT><BR>
<FONT SIZE=5 COLOR=#660033><B>Copying, Passing, and Comparing Data</B></FONT><br>

</TD>
<TD ALIGN=RIGHT>
<FONT SIZE=2>&nbsp;<A HREF="jstutor.htm">JScript&nbsp;Tutorial</A>&nbsp;<BR>&nbsp;<A HREF="js921.htm">Previous</A>&nbsp;|&nbsp;<A HREF="js924.htm">Next</A>&nbsp;<P></FONT>


</TD></TR>
</TABLE> 

<p>
<HR SIZE=1 NOSHADE>

<BLOCKQUOTE>
In Microsoft JScript, how data is handled depends on its data type.
</blockquote>
<h5>By Value vs. By Reference</h5>
<blockquote>
Numbers and Boolean values (<b>true</b> and <b>false</b>) are copied, passed, and compared <i>by value</i>. When you copy
or pass by value, you allocate a space in computer memory and put the value of the original into it.
If you then change the original, the copy is not affected (and vice versa), because the two are
separate entities.<p>

Objects, arrays, and functions are copied, passed, and compared <i>by reference</i> under most
circumstances. When you
copy or pass by reference, you essentially create a pointer to the original item, and use
the pointer as if it were a copy. If you then change the original you 
change both it and the copy (and vice versa). There is really only one entity; the "copy" is not actually a copy, it's
just another reference to the data.<p>

<TABLE CELLSPACING=0 CELLPADDING=0 BORDER=0 WIDTH=87%><TR><TD COLSPAN=2 VALIGN=BOTTOM><hr noshade size=1></TD></TR><TR><P><TD VALIGN=TOP><FONT SIZE=2><b>Note</b>&nbsp;&nbsp;You can change this behavior for objects and arrays by specifying the
<a href="js625.htm"><b>assign( )</b></a> method for them.</FONT></TD></TR><P><TR><TD COLSPAN=2 VALIGN=TOP><hr noshade size