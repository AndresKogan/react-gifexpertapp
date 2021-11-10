import React from 'react'
import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from '../../Hooks/useFetchGifs';
jest.mock('../../Hooks/useFetchGifs')
describe('Pruebas en <GifGrid/>', () => {

    const category = "one punch";


    test('debe hacer match con el snapshot', () => {

        useFetchGifs.mockReturnValue({

            data:[],
            loading:true

        })


    const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();

    })

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
       
        const gifs = [{
            id:'ABC',
            url: 'https://localhost/cualquiera/cosa.jpg',
            title: 'comunismo'
        }]

        useFetchGifs.mockReturnValue({

            data:gifs,
            loading:false

        })
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })




})