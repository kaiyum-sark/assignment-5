document.getElementById("main").addEventListener("click", function (e) {
  const time = new Date().toLocaleTimeString([], { hour12: true });
  const timeUppercase = time.toUpperCase();
  const CallHistoryBox = document.getElementById("call-history-container");
  if (e.target.className.includes("heart")) {
    const loveCount = document.getElementById("love-count");
    let loveCountNumber = Number(loveCount.innerText);
    loveCountNumber++;
    loveCount.innerText = loveCountNumber;
  }

  if (e.target.className.includes("call-btn")) {
    // alert message
    const serviceName =
    e.target.parentNode.parentNode.children[1].children[0].innerText;
    const hotline =
    e.target.parentNode.parentNode.children[1].children[2].innerText;
    const subtitle =
    e.target.parentNode.parentNode.children[1].children[1].innerText;
   
    const coinCount = document.getElementById("coin-count");
    let coinCountNumber = Number(coinCount.innerText);
    let coinDeduct = 20;
    if (coinCountNumber < coinDeduct) {
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      return;
    } else {
      alert(`📞 Calling ${subtitle} ${hotline}... `);
    }
    // coin deduction
    let coinBalance = coinCountNumber - coinDeduct;
    coinCount.innerText = coinBalance;

    // history added
    
    let div = document.createElement("div");
    div.innerHTML = `<div class="flex justify-between items-center bg-[#FAFAFA] p-4 rounded-xl ">
            <div>
              <h1 class="text-xl font-semibold">${serviceName}</h1>
              <p class="text-xl text-[#5C5C5C]">${hotline}</p>
            </div>
            <p class="text-xl">${timeUppercase}</p>
           </div>`;

    CallHistoryBox.appendChild(div);
  }
  // clear button 
 if(e.target.className.includes('clear-btn')){
  CallHistoryBox.innerText ="";
 }
//  copy button 
 if(e.target.className.includes('copy-btn')){
  const hotline =
    e.target.parentNode.parentNode.children[1].children[2].innerText;
  alert(`নম্বর কপি হয়েছে ${hotline}`)
  const copyCount = document.getElementById('copy-count');
  let copyCountNumber = Number(copyCount.innerText);
  copyCountNumber++;
  copyCount.innerText = copyCountNumber; 
  navigator.clipboard.writeText(hotline)
 }
});

 