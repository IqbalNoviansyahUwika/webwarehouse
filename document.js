document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.menu-item');
    const totalElement = document.getElementById('total');
    
    items.forEach(item => {
        const minusBtn = item.querySelector('.minus');
        const plusBtn = item.querySelector('.plus');
        const qtyInput = item.querySelector('.qty');
        
        minusBtn.addEventListener('click', () => {
            if(qtyInput.value > 0) qtyInput.value--;
            calculateTotal();
        });
        
        plusBtn.addEventListener('click', () => {
            qtyInput.value++;
            calculateTotal();
        });
        
        qtyInput.addEventListener('change', calculateTotal);
    });
    
    function calculateTotal() {
        let total = 0;
        document.querySelectorAll('.qty').forEach(input => {
            total += input.value * input.dataset.price;
        });
        totalElement.textContent = `Rp${total.toLocaleString('id-ID')}`;
    }
    
    document.getElementById('simpan').addEventListener('click', function() {
        alert(`Transaksi disimpan!\nTotal: ${totalElement.textContent}`);
    });
});