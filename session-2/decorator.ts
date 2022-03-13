enum ValidationType
{
    NotNull
}
function validate(...types:ValidationType[])
{
    return function test(target:any,propertyKey:string)
    {
            Validator2.registerValidator(target,propertyKey,types);
    }
}
class Validator2{
    private static notNullValidatorMap: Map<any,string[]> = new Map();
    static registerValidator(target:any,property:any,types:ValidationType[]):void
    {
        for(const type of types)
        {
            if(type==ValidationType.NotNull){
                let keys:string[]= this.notNullValidatorMap.get(target);
                if(!keys){
                    keys=[];
                    this.notNullValidatorMap.set(target,keys);
                }
                keys.push(property);
            }
        }
    }
    static validate(target:any):boolean{
        let notNullProps:string[]=
        this.notNullValidatorMap.get(Object.getPrototypeOf(target));
        if(!notNullProps)
        {return true;}
        else{
            let hasErrors:boolean=false;
            for(let property of notNullProps){
                let value=target[property];
                if(!value)
                {
                    console.log("value cannot be null");
                    hasErrors=true;
                }
            }
            if(hasErrors)
                return false;
            else
                return true;
            }
        }
}
class Person2{
    //decorator
    @validate(ValidationType.NotNull)
    name:string;
    constructor(name:string)
    {
        this.name=name;
    }
    getName():string{
        return this.name;
    }
}
console.log("--create Instance to check decorators----");
let user1:Person2= new Person2(null);
console.log(user1);
let pass=Validator2.validate(user1);
console.log("Validation passes "+ pass);tsc
console.log("--create another Instance to check decorators----");
let user2:Person2= new Person2("Shruti");
console.log(user2);
let pass1=Validator2.validate(user2);
console.log("Validation passes "+ pass1);
