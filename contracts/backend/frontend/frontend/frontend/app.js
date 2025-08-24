let wallet=0, gameFund=0;
const walletEl=document.getElementById('wallet'), gameFundEl=document.getElementById('gameFund');

function updateUI(){ walletEl.textContent=wallet.toFixed(2); gameFundEl.textContent=gameFund.toFixed(2); }

document.getElementById('collectBtn').onclick=()=>{
    const total=30; // 50 قطعة = 30$
    const fundShare=total*0.10; wallet+=total*0.90; gameFund+=fundShare; updateUI();
    alert(`✅ تم تحويل ${ (total*0.90).toFixed(2) } USDT إلى رصيدك الداخلي.\n💰 تمويل اللعبة: ${(fundShare).toFixed(2)} USDT`);
};

document.getElementById('withdrawBtn').onclick=()=>{
    const amount=parseFloat(document.getElementById('withdrawAmount').value);
    const to=document.getElementById('withdrawTo').value;
    if(!amount||!to){ alert('أدخل المبلغ والعنوان'); return; }
    if(amount>wallet){ alert('الرصيد الداخلي غير كافٍ'); return; }
    const net=amount*0.95;
    wallet-=amount; gameFund+=amount*0.05; updateUI();
    alert(`✅ تم دفع ${net.toFixed(2)} USDT بعد خصم 5% رسوم`);
};
