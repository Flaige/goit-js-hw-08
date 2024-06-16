const json = '{"name":"Mango","age":3,"isHappy":true}';
const obj = JSON.parse(json);
console.log(obj);

const invalidJson = '{"name":"Mango","age":3,"isHappy":true';

try {
    const obj = JSON.parse(invalidJson);
    console.log(obj);
} catch (error) {
    console.error("Wystąpił błąd podczas parsowania JSON:");
    console.error("Nazwa błędu:", error.name);
    console.error("Wiadomość błędu:", error.message);
}

console.log("Skrypt działa dalej mimo błędu parsowania JSON.");
