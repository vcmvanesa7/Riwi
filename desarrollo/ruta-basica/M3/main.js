// This is an asynchronous function 
async function loadPartial(path) {
    const res = await fetch(path);     // Wait while it finds the path and fetches the file.
    const html = await res.text();      //Create a new variable called html and wait for the server response to be converted to text
    document.getElementById("app").innerText = html;
    //Find the element in the document that has the id app and replace its content with the HTML we just downloaded.
}