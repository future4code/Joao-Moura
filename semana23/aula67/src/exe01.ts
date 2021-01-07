/**
 * Faça a implementação de uma Lista Ligada em Typescript.
 *  Implemente o método que adiciona um elemento ao final da lista
 *  e um método que imprima todos elementos presentes nela.
 * 
 * TO-DO:
 * - add elemento ao final da lista
 * - imprimir todo os elementos da lista
 */

class ListNode {
  constructor(
    public value: any,
    public next: ListNode | null = null
  ){}
}

class LinkedList{
  constructor(
    public start: ListNode | null = null
  ){}

  public add(value: any): void {
    if(!this.start){
      this.start = new ListNode(value)
      return
    }
    
    let newNode: ListNode = this.start
  
    while (newNode.next) {
      newNode = newNode.next
    }
    
    newNode.next = new ListNode(value)
  }

  public print():any {
    const elementList:any[] = []

    if(!this.start) return null

    let myNode = this.start

    while(myNode.next){
      elementList.push(myNode.value)
      myNode = myNode.next
    }

   elementList.push(myNode.value)
   return elementList
  }
}

const list: LinkedList = new LinkedList()

list.add("pão")
list.add("manteiga")
list.add("batata")

console.log(list.print())

