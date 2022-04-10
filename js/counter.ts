class Counter /* implements Iterator<number> */ {
    private counter = 0;

    //public next(): IteratorResult<number> {
    public next(): { done: boolean, value: number } {
        return {
            done: false,
            value: this.counter++
        }
    }
}

let c = new Counter();
console.log(c.next().value); // 0
console.log(c.next().value); // 1
console.log(c.next().value); // 2
