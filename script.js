async function callAPI(){
  const generateContent = document.getElementById("in").generateContent;
  require("dotenv").config();
  const mySecret = process.env.API_KEY;
  console.log(`The key is loaded: ${mySecret ? 'Yes' : 'No'}`);
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent`;
  const result = await fetch.url();
  contdata = await result.json();
  document.getElementById("data").innerText=JSON.stringify(data,null,2);  //cp cv idk this line have to  be learn later
  console.log("data")
}