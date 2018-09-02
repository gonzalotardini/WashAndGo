<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML//EN"><HTML><HEAD><TITLE>Instrucción Randomize</TITLE> 
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=iso8859-1">
<META NAME="MS.LOCALE" CONTENT="ES">
<META NAME="PRODUCT" CONTENT="Visual Basic Scripting Edition">
<META NAME="TECHNOLOGY" CONTENT="SCRIPTING">
<META NAME="CATEGORY" CONTENT="Language Reference">

<META NAME="Keywords" CONTENT="Random,Randomize statement,seed values,random numbers,numbers random,pseudorandom numbers,numbers pseudorandom,initializing random number sequences,random number sequences initializing,numbers,random number sequences"><META NAME="Description" CONTENT="Randomize Statement"></HEAD><BODY BGCOLOR=FFFFFF LINK=#0033CC>
<!--TOOLBAR_START-->
<!--TOOLBAR_EXEMPT-->
<!--TOOLBAR_END-->
<FONT FACE="Verdana, Arial, Helvetica" SIZE=2>
<TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0 WIDTH=100%><TR VALIGN=TOP><TD WIDTH=360>
<FONT SIZE=1 COLOR=#660033>Microsoft&#174; Visual Basic&#174; Scripting Edition</FONT><BR>
<FONT SIZE=5 COLOR=#660033><B>Instrucción Randomize</B></FONT>

</TD>
<TD ALIGN=RIGHT>
<FONT SIZE=2>&nbsp;<A HREF="vbstoc.htm">Referencia&nbsp;del&nbsp;lenguaje</A>&nbsp;<BR>
<!--START PAGE START--><!--START PAGE END--><A HREF="vbs17.htm">Versión&nbsp;1</A>&nbsp;<P></FONT>
</TD></TR>
</TABLE> 

<FONT SIZE=2><p><A HREF="vbs592.htm">Vea también</A></FONT>
<HR noshade SIZE=1>

<H5>Descripción</H5>
<BLOCKQUOTE>Inicializa el generador de números aleatorios.</BLOCKQUOTE>

<H5>Sintaxis</H5>
<BLOCKQUOTE><b>Randomize</b> [<i>number</i>]<P>
El argumento <i>número</i> puede ser cualquier <A HREF="vbs0.htm#defNumericExpression">expresión numérica</A> válida.</BLOCKQUOTE>

<H5>Comentarios</H5>
<BLOCKQUOTE>La instrucción <b>Randomize</b> utiliza <i>número</i> para inicializar el generador de números aleatorios de la función <b>Rnd</b>, asignándole un nuevo valor de <A HREF="vbs0.htm#defSeed">inicialización</A>.  Si omite <i>número, </i>el valor devuelto por el reloj del sistema se usa como el nuevo valor de inicialización.<P>Si no utiliza la instrucción <b>Randomize</b>, la función <b>Rnd</b> (sin argumentos) utiliza el mismo número como valor de inicialización la primera vez que se la invoca, usando después como valor de inicialización el último número generado.

<TABLE CELLSPACING=0 CELLPADDING=0 BORDER=0 WIDTH=87%><TR><TD COLSPAN=2 VALIGN=BOTTOM><HR noshade size=1></TD></TR><TR><TD VALIGN=TOP><FONT SIZE=2><b>Nota</b>&nbsp;&nbsp;Para repetir secuencias de números aleatorios, llame a la función <b>Rnd</b> con un argumento negativo antes de utilizar la instrucción <b>Randomize</b> con un argumento numérico. Al utilizar la instrucción <b>Randomize</b> con el mismo valor de 