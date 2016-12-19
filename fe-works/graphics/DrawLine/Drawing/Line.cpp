#include "stdafx.h"
#include "Line.h"
#include "math.h"
#define Round(d) int(floor(d+0.5))


CLine::CLine()
{
}


CLine::~CLine()
{
}

void CLine::MoveTo(CDC *pDC, CP2 p0) 
{
	P0 = p0;
}


void CLine::LineTo(CDC *pDC, CP2 p1)
{
	P1 = p1;
	CP2 p, t;


	if (P0.y > P1.y) {
		t = P0;
		P0 = P1;
		P1 = t;
	}
	// Draw Vertical Line
	if (fabs(P0.x - P1.x) < 1e-6) {
		for (p = P0; p.y < P1.y; p.y++) {
			double i = (p.y - P0.y) / (P1.y - P0.y); //Set Gradient ff
			pDC->SetPixelV(Round(p.x), Round(p.y), RGB(255 * i, 255 * (1 - i), 0));
		}
	}

	// Draw None Vertical Line
	else {
		double k, d;
		k = (P1.y - P0.y) / (P1.x - P0.x);
		if (k > 1.0) {
			d = 1 - 0.5 * k;

			for (p = P0; p.y < P1.y; p.y++) {
				double i = (p.y - P0.y) / (P1.y - P0.y);
				pDC->SetPixelV(Round(p.x), Round(p.y), RGB(255 * i, 255 * (1 - i), 0));

				if (d >= 0) {
					p.x++;
					d += 1 - k;
				}
				else {
					d += 1;
				}
			}
		} else if (k >= 0) {
			d = 0.5 - k;
			for (p = P0; p.x < P1.x; p.x++) {
				double i = (p.x - P0.x) / (P1.x - P0.x);
				pDC->SetPixelV(Round(p.x), Round(p.y), RGB(255 * i, 255 * (1 - i), 0));

				if (d < 0) {
					p.y++;
					d +=  1 - k;
				}
				else {
					d -= k;
				}
			}
		}
		else if (k >= -1) {
			d = -0.5 - k;
			for (p = P1; p.x < P0.x; p.x++) {
				double i = (p.x - P0.x) / (P1.x - P0.x);
				pDC->SetPixelV(Round(p.x), Round(p.y), RGB(255 * i, 255 * (1 - i), 0));
				if (d <= 0) {
					d -= k;
				}
				else {
					p.y--;
					d -= 1 + k;
				}
			}
		}
		else {
			d = -1 - 0.5 * k;

			for (p = P1; p.y > P0.y; p.y--) {
				double i = (p.y - P0.y) / (P1.y - P0.y);
				pDC->SetPixelV(Round(p.x), Round(p.y), RGB(255 * i, 255 * (1 - i), 0));

				if (d >= 0) {
					
					d -= 1;
				}
				else {
					p.x++;
					d -= 1 + k;
				}
			}
			
		}
	}

}