export async function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

export const convertBlobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}


export function filterField(text) {

    // Sua string de entrada
    var texto = text///"Eles apelanas por MOTIVOS diferentes. O MOTIVO principal é o dinheiro.";

    // Use uma expressão regular insensível a maiúsculas e minúsculas para verificar a presença de "MOTIVOS" ou "MOTIVO"
    var expressaoRegular = /motivos|motivo/gi;

    // Verifique se a expressão regular encontra uma correspondência na string
    var correspondencia = expressaoRegular.test(texto);

    // Se uma correspondência for encontrada, retorne "motivo", caso contrário, retorne null
    var resultado = correspondencia ? "motivo" : null;

    // Exiba o resultado
    return (resultado);

}

export function filterSigin(text) {

    // Sua string de entrada
    var texto = text///"Eles apelanas por MOTIVOS diferentes. O MOTIVO principal é o dinheiro.";

    // Use uma expressão regular insensível a maiúsculas e minúsculas para verificar a presença de "MOTIVOS" ou "MOTIVO"
    var expressaoRegular = /ASSINATURAs|ASSINATURA/gi;

    // Verifique se a expressão regular encontra uma correspondência na string
    var correspondencia = expressaoRegular.test(texto);

    // Se uma correspondência for encontrada, retorne "motivo", caso contrário, retorne null
    var resultado = correspondencia ? "Ex: Lucas Fulano" : null;

    // Exiba o resultado
    return (resultado);

}


export function filterGenre(text) {

    // Sua string de entrada
    var texto = text///"Eles apelanas por MOTIVOS diferentes. O MOTIVO principal é o dinheiro.";

    // Use uma expressão regular insensível a maiúsculas e minúsculas para verificar a presença de "MOTIVOS" ou "MOTIVO"
    var expressaoRegular = /filha|filho/gi;

    // Verifique se a expressão regular encontra uma correspondência na string
    var correspondencia = expressaoRegular.test(texto);

    // Se uma correspondência for encontrada, retorne "motivo", caso contrário, retorne null
    var resultado = correspondencia ? "Ex: se tu for mulher digite filha e se for homem digite filho " : null;

    // Exiba o resultado
    return (resultado);

}