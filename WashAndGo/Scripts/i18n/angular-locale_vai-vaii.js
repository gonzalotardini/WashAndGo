 buffer. 
		// note the text is drawn BELOW the bottom of the applet so when it
		// gets scrolled it appears to rise from nowhere
		drawString(m_buff.getGraphics(),
				   m_iCurrentMessage,
				   0,
				   m_buff.getSize().height-m_fm.getDescent(),
				   m_colTextColor);

		// scroll one line
		scrollOneLine();
	}

	////////////////////////////////////////////////////////////////////////////
	// drawString
	// draw a string at a given location and place a 'dot' at the start
	private void drawString(Graphics g,String str, int x, int y, Color col)
	{
		int iFontWidth = m_fm.charWidth('W');
		int iOvalWidth = Math.min(iFontWidth/2,m_iFontHeight/2);
		g.setFont(m_font);
		g.setColor(col);
		g.drawString(str,x + iFontWidth,y);
		g.fillOval(x + iOvalWidth/2,y-iOvalWidth-2,iOvalWidth,iOvalWidth);
	}

	////////////////////////////////////////////////////////////////////////////
	// drawString
	// draw a string at a given location and place a 'dot' at the start
	// this version takes an index into the vector to get the string
	private void drawString(Graphics g,int iMsg, int x, int y, Color col)
	{
		drawString(g,getStringFromVector(iMsg),x,y,col);
	}

	////////////////////////////////////////////////////////////////////////////
	// getStringFromVector
	// returns a string from the vector of TextJumps. 
	private String getStringFromVector(int iIndex)
	{
		TextJump t = (TextJump)m_vectData.elementAt(iIndex);
		return (String)t.getString();
	}

	////////////////////////////////////////////////////////////////////////////
	// scrollOneLine
	// 
	private void scrollOneLine()
	{
		// smoothly draw the off-screen buffer
		for (int j=0; j < m_iFontHeight; j++)
		{
			getGraphics().drawImage(m_buff.getImage(),0,-j,this);
			try { Thread.sleep(m_iScrollDelay);}
			catch (InterruptedException e) { }
		}

		Graphics g = m_buff.getGraphics();

		// move image up one-line inside the off-screen buffer
		g.drawImage(m_buff.getImage(),0,-m_iFontHeight,this);

		// erase old text at bottom of image
		g.setColor(m_colBackColor);
		g.fillRect(0,
				   m_dimAppletSize.height,
				   m_dimAppletSize.width,
				   m_dimAppletSize.height+m_iFontHeight);
	}

	////////////////////////////////////////////////////////////////////////////
	// getYOffset
	// based on a mouse y-location determine which text row we are on
	private int getYOffset(int y)
	{
		int iY = (m_dimAppletSize.height - y) / m_iFontHeight;
		return iY;
	}

	////////////////////////////////////////////////////////////////////////////
	// mouseMove
	// highlights a row of text as we move over it
	public boolean mouseMove(Event evt, int x, int y)
	{
		// if the image is still scrolling then bail
		if (!m_fStoppedScrolling)
			return true;

		// get the message we must be over
		int iYOffset = getYOffset(y);
		int iWhichMsg = m_iCurrentMessage - iYOffset;

		// if we are still over the same message then don't do anything
		if (m_iOldMessageSelected == iWhichMsg)
			return true;

		// if there was an old message we were over then re-draw it in it's non-highlighted color
		if (m_iOldMessageSelected >= 0)
		{
			drawString(getGraphics(),
					   m_iOldMessageSelected,
					   0,
					   m_dimAppletSize.height - (m_iOldMessageSelectedYOff