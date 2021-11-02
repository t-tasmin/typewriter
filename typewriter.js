const sentence = "hello there from lighthouse labs";

let a=0;
for (const i in sentence) {
   setTimeout(() => process.stdout.write(sentence[i]), i*50); // <= 1s delay to make it noticeable. Can dial it down later.
   a=50*i;
}

setTimeout(() => console.log(), a+1);