import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";




describe('Pruebas en <GifGridItem />', () => {

    const title = "un titulo";
    const url = "https://localhost/comunismo.jpg"
    const wrapper = shallow(<GifGridItem
        title={title}
        url={url} />)


    test('debe mostar el componente correctamente ', () => {


        expect(wrapper).toMatchSnapshot();
    });

    test('debe tener un parrafo con el titulo ', () => {


        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);


    });
    test('debe de tener la imagen igual el url y alt de los props ', () => {
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe de tener animate__fadeIn ', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);

    })












})  