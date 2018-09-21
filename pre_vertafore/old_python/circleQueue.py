class CircleQueue:
	def __init__(self, capacity):
		self.queue = [None] * capacity 
		self.capacity = capacity
		self.front = 0
		self.rear = 0
		self.isEmpty = True
	def printQueue(self):
		print self.queue
	def enqueue(self, value):
		if self.rear == self.front and not self.isEmpty:
			return False
		self.queue[self.rear] = value
		self.rear += 1
		self.isEmpty = False
		self.rear = self.rear % len(self.queue)
	def dequeue(self):
		if self.isEmpty:
			return False
		print self.front
		temp = self.queue[self.front]
		print temp
		self.front += 1 
		self.front = self.front % len(self.queue)
		self.isEmpty = self.front == self.rear
		return temp
			
def main():
	q = CircleQueue(5)
	q.printQueue()
	q.enqueue(1)
	q.enqueue(2)
	q.enqueue(3)
	q.enqueue(4)
	q.enqueue(5)
	q.printQueue()
	assert not q.enqueue(3)
	assert q.dequeue() == 1
	assert q.dequeue() == 2
	assert q.dequeue() == 3
	assert q.dequeue() == 4
	q.enqueue(6)
	assert q.dequeue() == 5
	assert q.dequeue() == 6
	q.enqueue(1)
	assert q.dequeue() == 1

main()

[None, None, None, None, None]
