import random

class Sort:

  counter = 0
  def addcounter(self):
    self.counter+=1

  def getcounter(self):
    return self.counter

  def merge(self, a, b):
    merged = []
    while len(a) > 0 and len(b) > 0: 
      self.addcounter()
      if a[0] <= b[0]:
        merged.append(a.pop(0))
      else:
        merged.append(b.pop(0))
    merged = merged + a + b
    return merged

  def merge_sort(self, arr):
    self.addcounter()
    if (len(arr) == 1):
      return arr

    midpoint = len(arr)//2

    list_a = self.merge_sort(arr[:midpoint])
    list_b = self.merge_sort(arr[midpoint:])

    return self.merge(list_a, list_b)

  def swap(self, arr, i, min_num):
    tempmin = arr[min_num]
    tempi = arr[i]
    arr[min_num] = tempi
    arr[i] = tempmin
    return arr

  def selection_sort(self, arr):
    for i in range(len(arr)):
      self.addcounter()
      min_num = i
      for j in range(i+1, len(arr)):
        self.addcounter()
        if arr[j] < arr[min_num]:
          min_num = j

      arr = self.swap(arr, i, min_num)
    return arr


if __name__ == '__main__':
  arr = random.sample(range(10000), 8000)
  
  sort = Sort()
  #print('Result: ', sort.merge_sort(arr))
  print('Result: ', sort.selection_sort(arr))

  print('work: ', sort.getcounter())