// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000){
        var msg = { error : "You are rich, my friend! We don\'t have so much coins for exchange" };
        return msg;
    } else if (currency < 0){
        return {}
    }
    var CoinCost = [50,  25,   10,  5,   1 ];
    var NameCoin = ['H', 'Q', 'D', 'N', 'P'];
    var CoinQuantity = {};
    var i = 0;
    
    
   

    while (currency != 0 && i < CoinCost.length){
        var CostOne = currency /  CoinCost[i]; 
        currency -= Math.floor(CostOne) * CoinCost[i];
        var Cost  = Math.floor(CostOne); 
            
        if (Cost != 0) {
            CoinQuantity[NameCoin[i]] = Math.floor(CostOne); 
        }
        i++;
    };
    return CoinQuantity;
}