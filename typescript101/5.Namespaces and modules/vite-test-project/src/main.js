import "./style.css";
import { setupCounter } from "./counter.ts";
document.querySelector("#app").innerHTML = `
  <div>
     <h1> Hello Vite </h1>
  </div>
`;
class Person {
    constructor(name) {
        this.name = name;
    }
}
const p = new Person("Mitko");
console.log(p.name);
setupCounter(document.querySelector("#counter"));
