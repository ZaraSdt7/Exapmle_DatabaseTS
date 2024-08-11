type User = {
    id:number
    name:string
    age:number
}

function mainuser<T extends User , K extends keyof T>(obj:T , keys:K[])
{
    let objuser:any = {};
    for(const key of keys)
        {
            objuser[key] = obj[key]
        }
        return objuser

}
const Eployee:User = {
    id:21,
    name:"zara",
    age:8
}
console.log(mainuser(Eployee,["name","id"]));

