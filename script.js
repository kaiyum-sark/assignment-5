

document.getElementById('main').addEventListener('click',function(e){
  const heart = e.target.className.includes('heart');
  if(heart){
    e.stopPropagation();
    const loveCount = document.getElementById('love-count');
    let loveCountNumber = Number(loveCount.innerText)
    loveCountNumber++;
    loveCount.innerText = loveCountNumber;
  }
  
  const callBtn = e.target.className.includes('call-btn');
  if(callBtn){
    // alert message
     const messageText = e.target.parentNode.parentNode.children[1].children[1].innerText;
     const number = e.target.parentNode.parentNode.children[1].children[2].innerText;
    const coinCount = document.getElementById('coin-count');
    let coinCountNumber = Number(coinCount.innerText);
    let coinDeduct = 20;
    if(coinCountNumber<coinDeduct){
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      return;
    }else{
      alert(`📞 Calling ${messageText} ${number}... `);
    }
    // coin deduction 
    let coinBalance = coinCountNumber - coinDeduct;
    coinCount.innerText = coinBalance;
    
    // history added 
    const title = e.target.parentNode.parentNode.children[1].children[0].innerText;
    const date = new Date().toLocaleTimeString([],{hour12: true});
    let convertedDate = date.toUpperCase()
    
    const history = document.getElementById('call-history-container')
    let div = document.createElement('div')
    div.innerHTML = `<h1>hello world</h1>`

    history.appendChild(div)
    console.log(div)
  }
 
  
})