class Node:
	def __init__(self, value):
		self.value = value
		self.next = None
	def getValue(self):
		return self.value
	def getNext(self):
		return self.next
	def setValue(self, value):
		self.value = value
	def setNext(self, next):
		self.next = next

#node_one = Node(1)
#print (node_one.getValue())
#print (node_one.value)

class SingleLinkedList:
	def __init__(self):
		self.head = None

	def isEmpty(self):
		return self.head == None

	def addFront(self,value):
		nextNode = Node(value)
		if self.isEmpty():
			self.head = nextNode
		else:
			nextNode.next = self.head
			self.head = nextNode

	def addBack(self, value):
		newNode = Node(value)
		current = self.head
		if not current:
			self.head = newNode
			return
		while current.getNext():
			current = current.getNext()
		current.next = newNode

	def size(self):
		if self.isEmpty():
			print ("0")
			return 0
		count = 0
		current = self.head
		while current:
			count += 1
			current = current.getNext()
		print (count)
		return count

	#return false if not in list, else return index
	def search(self, value):
		if self.isEmpty():
			return False
		current = self.head
		index = 0
		while current:
			if current.getValue() == value:
				print ("Found " + str(value) + " at index: " + str(index))
				return index
			else:
				index += 1
				current = current.getNext()
		print ("couldn't find it")
		return False

	def removeAtIndex(self, targetIndex):
		if self.isEmpty() or targetIndex > self.size()-1:
			return False
		if targetIndex == 0:
			self.head = self.head.getNext()
			return
		current = self.head
		previous = current
		index = 0
		while index < targetIndex:
			index += 1
			previous = current
			current = current.getNext()
		print ("should only print 2 numbers")
		print (previous.getValue())
		print (current.getValue())
		previous.setNext(current.getNext())
		current.setNext(None)

	def removeValue(self, targetValue):
		index = self.search(targetValue)
		if not index:
			return False
		self.removeAtIndex(index)
		return True



	def printList(self):
		if not self.head:
			print ("[]")
			return
		listStr = "["
		current = self.head
		while current:
			listStr += str(current.value)
			if current.next:
				listStr += ", "
			current = current.getNext()
		listStr += "]"
		print (listStr)

mySLL = SingleLinkedList()
mySLL.size()
mySLL.addBack(2)
mySLL.addFront(1)
mySLL.printList()
mySLL.addFront(0)
mySLL.printList()
mySLL.addBack(3)
mySLL.printList()
mySLL.size()
mySLL.search(999)
mySLL.search(2)
mySLL.printList()

print ("((((((((((((((((((((")
mySLL.removeAtIndex(0)
mySLL.addBack(4)
mySLL.addBack(5)
mySLL.printList()
mySLL.removeValue(3)
mySLL.printList()


