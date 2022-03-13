class GenericMap<T extends number|string>
{
    private items:{[key:string]:T}={};
    setItem(key:string,item:T):void{
        this.items[key]=item;
    }
    getItem(key:string):T{
        return this.items[key]
    }
    printMap():string{
        const itemAsString= Object.getOwnPropertyNames(this.items)
        .map(key=> key+":"+this.getItem(key))
        .join(", ");
        return itemAsString;
    }
}
const numb= new GenericMap<number>();
numb.setItem('alpha',5);
numb.setItem('beta',15);
console.log(numb.printMap());
const strMap= new GenericMap<string>();
strMap.setItem('color','blue');
strMap.setItem('height','54 cm');
console.log(strMap.printMap());