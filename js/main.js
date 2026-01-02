// small interactivity for the sample site
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const connectBtn = document.getElementById('connectWallet');

  navToggle && navToggle.addEventListener('click', ()=>{
    const nav = document.querySelector('.nav');
    if(!nav) return;
    if(nav.style.display === 'flex') nav.style.display = '';
    else nav.style.display = 'flex';
  });

  // Sample Connect Wallet simulation (no real web3)
  connectBtn && connectBtn.addEventListener('click', async ()=>{
    if(connectBtn.dataset.connected === '1'){
      connectBtn.textContent = 'Connect Wallet';
      connectBtn.dataset.connected = '0';
      return;
    }
    // simulate wallet connect
    connectBtn.textContent = '0xAb...CD12';
    connectBtn.dataset.connected = '1';
  });

  // Hook up Buy buttons (sample)
  document.querySelectorAll('.product .btn-primary').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      alert('This is a sample site — integrate payments or web3 to complete checkout.');
    });
  });
});
