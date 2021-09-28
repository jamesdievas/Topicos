
function Carro(_id,_placa,_marca,_cor,_nomedoProprietario){
    var veiculo = new Veiculo(_id,_placa,_marca,_cor,_nomedoProprietario);
    veiculo.calcularValorPago = function(horaEntrada,horaSaida){
        var duracao = calculaMinutos(horaEntrada,horaSaida);
        //até 15min é grátis
        if(duracao > 0 && duracao < 15)
            return 0;
        if(duracao < 60 && duracao >= 15)
            return 2;
        if(duracao >= 60 && duracao < 240)
            return Math.round(duracao/15.0);
        return 20;
    }
    return veiculo;
}