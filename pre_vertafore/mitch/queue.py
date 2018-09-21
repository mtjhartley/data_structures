class Node:
    def __init__(self, value, pointer):
        self.pointer = pointer
        self.value = value

class Queue:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0
    
    def enqueue(self, value):
        newNode = Node(value, None)
        self.size += 1
        if self.tail:
            self.tail.pointer = newNode
        self.tail = newNode
        
        if not self.head:
            self.head = newNode
            return self
    
    def dequeue(self):
        if self.head:
            self.size -= 1
            temp = self.head
            self.head = self.head.pointer
            return temp.value
        else:
            print "Queue is empty, can't dequeue"
            
    def getSize(self):
        return int(self.size)
            
            
q = Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
print q.getSize()
print q.dequeue()
print q.getSize()

nameslist = ["Abra", "Billy", "Cadabra", 'Dinky', "Effe"]
def hotPotato(names, num):
    myQueue = Queue()
    for name in names:
        myQueue.enqueue(name)

    while myQueue.getSize() > 1:
        for i in range(num):
            print i
            myQueue.enqueue(myQueue.dequeue())
        myQueue.dequeue()

    return myQueue.dequeue()

print hotPotato(nameslist, 6)

