class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class CircleQueue:
    def __init__(self, capacity):
        self.isEmpty = True
        node1 = Node("None")
        self.head = node1
        self.rear = node1
        self.capacity = capacity
        for num in range(capacity-1):
            newNode = Node("None")
            node1.next = newNode
            node1 = newNode
        node1.next = self.head
        
    def printQueue(self):
        current = self.head
        queueString = "["

        for num in range(self.capacity):
            queueString += `current.value`
            queueString += ", "
            current = current.next
        queueString +="]"
        print queueString
        return self
    
    def enqueue(self, value):
        if self.rear == self.head and not self.isEmpty:
            return False
        self.rear.value = value
        self.rear = self.rear.next
        self.isEmpty = False
        return self
    
    def dequeue(self):
        if self.isEmpty:
            return False
        temp = self.head.value
        self.head = self.head.next
        self.isEmpty = self.head == self.rear
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
    assert q.dequeue() == False

main()
