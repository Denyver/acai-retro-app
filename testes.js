function executarBateriaTestes() {
    // CT-01: Tigela base padrão sem adicionais (0 paçocas, 0 leite condensado)
    {
        // Arrange
        let qtdPacoca = 0;
        let qtdLeiteCond = 0;
        
        // Act
        let resultadoObtido = calcularSubtotalAcai(qtdPacoca, qtdLeiteCond);
        
        // Assert
        assert("CT-01: Tigela base padrão sem adicionais", resultadoObtido, 18.00);
    }

    // CT-02: Tigela com 2 paçocas (R$ 22,00 esperado)
    {
        // Arrange
        let qtdPacoca = 2;
        let qtdLeiteCond = 0;
        
        // Act
        let resultadoObtido = calcularSubtotalAcai(qtdPacoca, qtdLeiteCond);
        
        // Assert
        assert("CT-02: Tigela com 2 paçocas", resultadoObtido, 22.00);
    }

    // CT-03: Tigela com 2 coberturas de leite condensado (R$ 24,00 esperado pela regra oficial)
    {
        // Arrange
        let qtdPacoca = 0;
        let qtdLeiteCond = 2;
        
        // Act
        let resultadoObtido = calcularSubtotalAcai(qtdPacoca, qtdLeiteCond);
        
        // Assert
        assert("CT-03: Tigela com 2 coberturas de leite condensado", resultadoObtido, 24.00);
    }

    // CT-04: Entrada com quantidade negativa de acompanhamentos (-2 paçocas)
    {
        // Arrange
        let qtdPacoca = -2;
        let qtdLeiteCond = 0;
        
        // Act
        let resultadoObtido = calcularSubtotalAcai(qtdPacoca, qtdLeiteCond);
        
        // Assert
        assert("CT-04: Quantidade negativa tratada sem reduzir base", resultadoObtido, 18.00);
    }

    // CT-05: Fatura final com subtotal R$ 20,00 + frete R$ 5,00 + cupom RETRO10 (R$ 15,00 esperado)
    {
        // Arrange
        let subtotal = 20.00;
        let frete = 5.00;
        let cupom = "RETRO10";
        
        // Act
        let resultadoObtido = calcularFaturaFinal(subtotal, frete, cupom);
        
        // Assert
        assert("CT-05: Fatura final com cupom RETRO10", resultadoObtido, 15.00);
    }
}

// Chamada automática da bateria de testes
executarBateriaTestes();