import React from 'react';
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe('pruebas en <GifExpertApp/>',()=>{


test('debe hacer match con el snapshot ', () => {

    const wrapper = shallow(<GifExpertApp/>);

    expect(wrapper).toMatchSnapshot();
    
})

test('debe de mostrar una lista de categorias ', () => {
    const categories = ['one punch', 'Dragon Ball'];
    const wrapper = shallow(<GifExpertApp defaultCategories = {categories}/>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
})






})