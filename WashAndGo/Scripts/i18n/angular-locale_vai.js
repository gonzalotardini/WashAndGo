////////////////////////////////////////////////////////////////////////////
// Implementatation of CoolHeadLines class
//
// The main applet.
// 
// This is a part of the Internet Information Server SDK Samples
// Copyright (C) 1997 Microsoft Corporation
// All rights reserved.
//
// This source code is only intended as a supplement to the Software 
// Development Kit Reference and related electronic documentation provided.
//
////////////////////////////////////////////////////////////////////////////

import java.applet.*;
import java.awt.*;
import java.util.*;
import java.net.*;
import TextJump;
import DoubleBuffer;

public class CoolHeadLines extends Applet implements Runnable
{
	// constants to gather data from <param> tags
	private final String	PARAM_BackColor = "BackColor";
	private final String	PARAM_TextColor = "TextColor";
	private final String	PARAM_HiliteTextColor = "HiliteTextColor";
	private final String	PARAM_ScrollDelay = "ScrollDelay";
	private final String	PARAM_MessageDelay = "MessageDelay";
	private final String	PARAM_NumItems = "NumItems";
	private final String	PARAM_URLPrefix = "URLPrefix";

	// data from <param> tags
	private Color			m_colBackColor;
	private Color			m_colTextColor;
	private Color			m_colHiliteTextColor;
	private int				m_iScrollDelay = 10;
	private int				m_iMessageDelay = 4;
	private int				m_iNumItems;
	private String			m_strURLPrefix;

	private Thread			m_CoolHeadLines = null;				// worker thread
	private Dimension		m_dimAppletSize;					// size of the containing applet
	private Vector			m_vectData=null;					// vector of TextJump objects
	private Font			m_font;								// font to draw text with
	private FontMetrics		m_fm;								// size of the font
	private int				m_iFontHeight;						// maximum height of font
	private DoubleBuffer	m_buff=null;						// off-screen buffer
	private boolean			m_fStoppedScrolling = false;		// has the image stopped scrolling (when true mouse-clicks are active)
	private int				m_iCurrentMessage = -1;				// what's the current message at the bottom of the screen?
	private int				m_iMaxMessage=0;						// how many messages can the applet display at once?
	private int				m_iOldMessageSelected = -1;			// what was the last message the mouse moved over?
	private int				m_iOldMessageSelectedYOffset = -1;	// what was the last message location on screen?

	////////////////////////////////////////////////////////////////////////////
	// ctor
	public CoolHeadLines()
	{
		// set some default colors
		m_colBackColor =	   new Color(255,255,128);
		m_colTextColor = 	   new Color(0,0,0);
		m_colHiliteTextColor = new Color(255,0,0);
	}

	////////////////////////////////////////////////////////////////////////////
	// getAppletInfo
	// info about this applet
	public String getAppletInfo()
	{
		return "Name: CoolHeadLines\r\n" +
		       "Author: Michael Howard (mikehow@microsoft.com)\r\n" +
		       "Created with Microsoft Visual J++ Version 1.1";
	}

	////////////////////////////////////////////////////////////////////////////
	// getParameterInfo
	// <param> info
	public String[][] getParameterInfo()
	{
		String[][] info =
		{
			{ PARAM_BackColor,			"String",	"Background Color" },
			{ PARAM_TextColor,			"String",	"Text Color" 