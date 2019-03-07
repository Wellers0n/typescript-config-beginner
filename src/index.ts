import koa from 'koa';

const app = new koa();
function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

app.listen(3000,() => console.log(greeter(user)))