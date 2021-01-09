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
      this.start = new ListNode(value) // this.start -> {value: '1°valor', next: null}
      return
    }
    
    let newNode: ListNode = this.start // newNode -> {value: '1°valor', next: null}
  
    while (newNode.next) {
      newNode = newNode.next
    }
    
    newNode.next = new ListNode(value) // newNode.next -> {value: '1°valor', next: {value: '2°valor', next: null}}
  }

  public get(index: number):any {
    if(index > -1){
      let currentNode = this.start
      let count:number = 0 

      while(currentNode !== null && count < index){
        currentNode = currentNode.next
        count++
      }

      return currentNode !== null ? currentNode.value : undefined
    }

    return undefined
  }

  public getAll():any {
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
list.add("melancia")
list.add("goiaba")

console.table(list.getAll())
console.log('index 2 -->',list.get(2))

