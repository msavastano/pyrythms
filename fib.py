class fib:
  counter = 0
  def addcounter(self):
    self.counter+=1

  def getcounter(self):
    return self.counter

  def fib_list(self, n):
    
    fibs = [0, 1]
    for num in range(2, n+1):
      self.addcounter()
      fibs.append(fibs[num-1] + fibs[num-2])
    return fibs[n]

  def fib_rec(self, n):
    print(n)
    self.addcounter()
    if n <= 1:
      return n 
    else:
      return self.fib_rec(n-1) + self.fib_rec(n-2)

if __name__ == '__main__':
  counter = 0
  
  fib = fib()
  print('Result', fib.fib_rec(15))
  #print('Result', fib.fib_list(20))
  print('work: ', fib.getcounter())