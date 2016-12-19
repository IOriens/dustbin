
// Drawing.h : main header file for the Drawing application
//
#pragma once

#ifndef __AFXWIN_H__
	#error "include 'stdafx.h' before including this file for PCH"
#endif

#include "resource.h"       // main symbols


// CDrawingApp:
// See Drawing.cpp for the implementation of this class
//

class CDrawingApp : public CWinAppEx
{
public:
	CDrawingApp();


// Overrides
public:
	virtual BOOL InitInstance();
	virtual int ExitInstance();

// Implementation
	afx_msg void OnAppAbout();
	DECLARE_MESSAGE_MAP()
};

extern CDrawingApp theApp;
