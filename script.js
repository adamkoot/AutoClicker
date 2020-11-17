window.onload = function() {
        let kot = document.getElementById('bdalej'); 
        
    setInterval(() => {
        kot.classList.remove('disabled');
        document.getElementById('bdalej').click(); 
    }, 100);
};