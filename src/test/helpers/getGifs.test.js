import { getGifs } from "../../helpers/getGifs";

describe('pruebas con getGifs Fetch', () => {

    test('debe de traer 10 elementos', async () => {


        const gifs = await getGifs("dragon ball");
        expect(gifs.length).toBe(10);


    })
    test('debe de traer un array vacio cuando no mando parametro', async () => {


        const gifs = await getGifs("");
        expect(gifs.length).toBe(0);


    })


})