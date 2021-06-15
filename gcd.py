class Gcd:
  counter = 0
  def addcounter(self):
    self.counter+=1

  def getcounter(self):
    return self.counter

  def it_gcd(self, a, b):
    gr = 0
    hi = a + b
    for i in range(1, hi):
      self.addcounter()
      if a % i == 0 and b % i == 0:
        gr = i

    return gr

  def recursive_gcd(self, a, b):
    self.addcounter()
    if b == 0:
      return a
    rem = a % b
    return self.recursive_gcd(b, rem)

if __name__ == '__main__':
  gcd = Gcd()
  #print('it_gcd', gcd.it_gcd(9000000, 39000000))
  print('recursive_gcd', gcd.recursive_gcd(9000000, 39000000))
  print('work: ', gcd.getcounter())