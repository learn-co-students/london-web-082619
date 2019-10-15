function saySomething(something = "hello world") {
  return console.log(something);
}

saySomething();

const hi = () => saySomething("hi");
const bye = () => saySomething("bye");
const morning = () => saySomething("morning");

const greetings = [hi, bye, morning, () => saySomething("evening")];

const userLang = "es";

const localisedGreetings = {
  en: () => saySomething("hello"),
  fr: () => saySomething("bonjour"),
  de: () => saySomething("hallo"),
  es: () => saySomething("hola")
};

localisedGreetings[userLang]();

const saySomethingFunction = greeting => {
  const bigGreeting = greeting.toUpperCase();
  return () => console.log(greeting, bigGreeting);
};

const hiAgain = saySomethingFunction("hi");
