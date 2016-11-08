import math
outcome = math.factorial(10000)
num = 0
while not(outcome%10):
    num += 1
    outcome = outcome/10

print num