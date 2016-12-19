
// DrawingView.cpp : implementation of the CDrawingView class
//

#include "stdafx.h"
// SHARED_HANDLERS can be defined in an ATL project implementing preview, thumbnail
// and search filter handlers and allows sharing of document code with that project.
#ifndef SHARED_HANDLERS
#include "Drawing.h"
#endif

#include "DrawingDoc.h"
#include "DrawingView.h"


#ifdef _DEBUG
#define new DEBUG_NEW
#endif


// CDrawingView

IMPLEMENT_DYNCREATE(CDrawingView, CView)

BEGIN_MESSAGE_MAP(CDrawingView, CView)
	// Standard printing commands
	ON_COMMAND(ID_FILE_PRINT, &CView::OnFilePrint)
	ON_COMMAND(ID_FILE_PRINT_DIRECT, &CView::OnFilePrint)
	ON_COMMAND(ID_FILE_PRINT_PREVIEW, &CView::OnFilePrintPreview)
	ON_WM_LBUTTONDOWN()
	ON_WM_LBUTTONUP()
	ON_WM_MOUSEMOVE()
END_MESSAGE_MAP()

// CDrawingView construction/destruction

CDrawingView::CDrawingView()
{
	// TODO: add construction code here

}

CDrawingView::~CDrawingView()
{
}

BOOL CDrawingView::PreCreateWindow(CREATESTRUCT& cs)
{
	// TODO: Modify the Window class or styles here by modifying
	//  the CREATESTRUCT cs

	return CView::PreCreateWindow(cs);
}

// CDrawingView drawing

void CDrawingView::OnDraw(CDC* /*pDC*/)
{
	CDrawingDoc* pDoc = GetDocument();
	ASSERT_VALID(pDoc);
	if (!pDoc)
		return;

	// TODO: add draw code for native data here
}


// CDrawingView printing

BOOL CDrawingView::OnPreparePrinting(CPrintInfo* pInfo)
{
	// default preparation
	return DoPreparePrinting(pInfo);
}

void CDrawingView::OnBeginPrinting(CDC* /*pDC*/, CPrintInfo* /*pInfo*/)
{
	// TODO: add extra initialization before printing
}

void CDrawingView::OnEndPrinting(CDC* /*pDC*/, CPrintInfo* /*pInfo*/)
{
	// TODO: add cleanup after printing
}




// CDrawingView diagnostics

#ifdef _DEBUG
void CDrawingView::AssertValid() const
{
	CView::AssertValid();
}

void CDrawingView::Dump(CDumpContext& dc) const
{
	CView::Dump(dc);
}

CDrawingDoc* CDrawingView::GetDocument() const // non-debug version is inline
{
	ASSERT(m_pDocument->IsKindOf(RUNTIME_CLASS(CDrawingDoc)));
	return (CDrawingDoc*)m_pDocument;
}
#endif //_DEBUG


// CDrawingView message handlers


void CDrawingView::OnLButtonDown(UINT nFlags, CPoint point)
{
	// TODO: Add your message handler code here and/or call default

	// TODO: 在此添加消息处理程序代码和/或调用默认值
	p0.x = point.x;
	p0.y = point.y;
	CView::OnLButtonDown(nFlags, point);

}





void CDrawingView::OnLButtonUp(UINT nFlags, CPoint point)
{
	// TODO: Add your message handler code here and/or call default
	p1.x = point.x;
	p1.y = point.y;
	CLine *line = new CLine;
	CDC *pDC = GetDC(); //定义设备上下文指针
	line->MoveTo(pDC, p0);
	line->LineTo(pDC, p1);
	delete line;
	ReleaseDC(pDC);

	CView::OnLButtonUp(nFlags, point);
}






void CDrawingView::OnMouseMove(UINT nFlags, CPoint point)
{
	// TODO: Add your message handler code here and/or call default

	CString str;
	str.Format(_T("当前鼠标位置：%d,%d"), point.x, point.y);

	((CMainFrame *)GetParent())->SetMessageText(str);

	CView::OnMouseMove(nFlags, point);
}
