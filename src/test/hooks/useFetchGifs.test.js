import { useFetchGifs } from "../../Hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';
describe('pruebas en el hook useFetchGifs ', () => {


    test('debe retornar el estado inicial ', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('one punch'))
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);

    })


    test('debe retornar un arreglo de imagenes y loading en false ', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('one punch'));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    })






})
