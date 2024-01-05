import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import style from './style';
import { FontAwesome } from '@expo/vector-icons';

function Timer() {
    const [dias, setDias] = useState(0);
    const [horas, setHoras] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        const dataEspecifica = new Date('2023-01-03 16:20');
        const intervalId = setInterval(() => {
            const agora = new Date();
            agora.setHours(agora.getHours() - 3);
            const diferencaEmMilissegundos = dataEspecifica - agora;

            const dias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24)) * -1;
            const horas = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) * -1;
            const minutos = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60)) / (1000 * 60)) * -1;
            const segundos = Math.floor((diferencaEmMilissegundos % (1000 * 60)) / 1000) * -1;

            setDias(dias);
            setHoras(horas);
            setMinutos(minutos);
            setSegundos(segundos);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <View style={style.fundo}>
            <Text style={style.textHora}>{`Estamos juntos a ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`} <FontAwesome name="heart" size={24} color="pink" /></Text>
        </View>
    );
}

export default Timer;
