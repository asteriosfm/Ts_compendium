//Optional Properties
function greeting(text: string, who?: string) {
  if (who) {
    console.log('hello' + who + text);
  } else {
    console.log(text);
  }
}



//--------------Union Types--------------
type HorseOrCat = 'horse' | 'cat';



//--------------Type Assertions--------------
const myCanvas1 = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");