import chalk from 'chalk';
import fs from 'fs';

const a = 1;


function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = []
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arrayResultados.push({ [temp[1]]: temp[2]})
    }

    
    return arrayResultados.length === 0 ? 'Não há links:' : arrayResultados;
}


function trataErro(erro){
    throw new Error(erro);
}

async function pegarArquivo(caminhoDoArquivo){
    try{
    const encondig = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encondig)
    return extraiLinks(texto);
    }catch(e){
        throw new Error(e)

    }

} 

export default pegarArquivo;
































