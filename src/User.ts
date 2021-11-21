export class User {
    constructor(public name:string,public age:number){
        this.name=name;
        this.age=age;
    }
    login():string{
        return `${this.name}=======${this.age}`
    }

}
export default User;