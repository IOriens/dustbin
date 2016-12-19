#pragma once
#include "P2.h"

class CLine
{
public:
	CLine(void);
	virtual ~CLine();
	void MoveTo(CDC*, CP2);
	void LineTo(CDC*, CP2);

public:
	CP2 P0;
	CP2 P1;
};

