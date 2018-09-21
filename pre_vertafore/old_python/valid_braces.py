class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Stack:
    def __init__(self):
        self.head = None
        self.population = 0
    
    def push(self, value):
        newNode = Node(value)
        newNode.next = self.head
        self.head = newNode
        self.population += 1
        return self
    def pop(self):
        poppedNode = self.head
        self.head = self.head.next
        self.population -= 1
        return poppedNode.value


myStack = Stack()
myStack.push(7) 
print myStack.pop()

def validBraces(string):
    symbolStack = Stack()
    symbolDict = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    for idx in range(len(string)):
        if string[idx] in "({[":
            print "pushing open brace"
            myStack.push(string[idx])
        elif string[idx] in symbolDict.keys() and myStack.population > 0:
            if myStack.head.value == symbolDict[string[idx]]:
                print "removing open brace"
                myStack.pop()
            else:
                print "caught ya "
                return False
        elif string[idx] in symbolDict.keys() and myStack.population == 0:
            print "extra closey brace"
            return False
        else:
            continue
    return myStack.population == 0;

print validBraces("(What do you think about [1,2,3,4] this array!)")


print validBraces("(What) do you think about [1,2,3,4} this array!)")