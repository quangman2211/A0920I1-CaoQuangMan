function ChuyenDoiTienTe() {
    let moneychange=0;
    let tiente= document.getElementById('sotien').value;
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;
    if (fromCurrency == 'VND')
    {
        if (toCurrency=='VND')
        {
            moneyChange=tiente;
        }
        else (toCurrency=='USD')
        {
            moneyChange=tiente/23000;
        }
    }
    else if (fromCurrency=='USD')
    {
        if (toCurrency=='USD')
        {
            moneyChange=tiente;
        }
        else (toCurrency=='VND')
        {
            moneyChange=tiente*23000;
        }
    }

    document.getElementById('result').innerText=moneyChange;
}