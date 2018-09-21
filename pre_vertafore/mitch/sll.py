class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
    def getData(self):
        return self.data
    def getNext(self):
        return self.next
    def setData(self, newData):
        self.data = newdata
    def setNext(self, newNext):
        self.next = newNext

node1 = Node("hi")
print node1.getData()

class SLL:
    def __init__(self):
        self.head = None
    
    def isEmpty(self):
        return self.head == None

    def addFront(self, value):
        newNode = Node(value)
        if not self.head:
            self.head = newNode
        else:
            newNode.next = self.head
            self.head = newNode

            # current = self.head
            # while current.next:
            #     current = current.next
            # current.next = newNode
    def printList(self):
        listStr = "["
        current = self.head
        while current:
            listStr += str(current.data)
            if current.next:
                listStr += ", "
            current = current.next
        listStr += "]"
        print listStr
    def size(self):
        current = self.head
        count = 0
        while current:
            count += 1
            current = current.next
        return count

    def search(self, value):
        found = False
        current = self.head
        while current and not found:
            if current.data == value:
                found = True
            else:
                current = current.next
        return found

    def remove(self, item):
        current = self.head
        previous = None
        found = False
        while not found:
            if current.data == item:
                found = True
            else:
                previous = current
                currenet = current.next

        if previous == None:
            self.head = currenet.getNext()
        else:
            previous.next = current.next
            
            
        
        
            

myList = SLL()
myList.addFront(1)
myList.addFront(2)
myList.addFront(3)
myList.printList()
print myList.size()
print myList.search(3)
print myList.search(4)


