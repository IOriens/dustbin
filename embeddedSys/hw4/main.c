#define NVIC_ST_CTRL_R    (*((volatile unsigned long *) 0xE000E010))
#define NVIC_ST_RELOAD_R  (*((volatile unsigned long *) 0xE000E014))
#define NVIC_ST_CURRENT_R (*((volatile unsigned long *) 0xE000E018))

void SysTick_Init(void) {
  NVIC_ST_CTRL_R = 0;
  NVIC_ST_CTRL_R = 0x00000005;
}

void SysTick_Wait(unsigned long delay) {
  NVIC_ST_RELOAD_R = delay - 1;
  NVIC_ST_CURRENT_R = 0;
  while((NVIC_ST_CTRL_R & 0x00010000) == 0) {
  }
}

// 80000000 * 12.5ns equals 1000ms
void SysTick_Wait1000ms(unsigned long delay) {
  unsigned long i;
  for(i = 0; i < delay; i ++) {
    SysTick_Wait(80000000);
  }
}
