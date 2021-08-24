function show(){
   var textcon = document.getElementById("stress").value;
  // document.getElementById("showcontext").innerText = "tttt";
  // alert(textcon);
  if (textcon == "default"){
    document.getElementById("showcontext").innerText = "";
    return;
  }
  if (textcon == "breaks"){
    document.getElementById("showcontext").innerText = "Take breaks from watching, reading, or listening to news stories, including those on social media. It’s good to be informed, but hearing about the pandemic constantly can be upsetting. Consider limiting news to just a couple times a day and disconnecting from phone, tv, and computer screens for a while.";
    return;
  }
  if (textcon == "body"){
    document.getElementById("showcontext").innerText = "Take deep breaths, stretch, or meditateexternal icon. Try to eat healthy, well-balanced meals. Exercise regularly. Get plenty of sleep. Avoid excessive alcohol, tobacco, and substance use. Continue with routine preventive measures (such as vaccinations, cancer screenings, etc.) as recommended by your healthcare provider. Get vaccinated with a COVID-19 vaccine";
    return;
  }
  if (textcon == "unwind"){
    document.getElementById("showcontext").innerText = "Try to do some other activities you enjoy";
    return;
  }
  if (textcon == "connect"){
    document.getElementById("showcontext").innerText = "Talk with people you trust about your concerns and how you are feeling";
    return;
  }
  if (textcon == "community"){
    document.getElementById("showcontext").innerText = "While social distancing measures are in place, try connecting online, through social media, or by phone or mail";
    return;
}
}
