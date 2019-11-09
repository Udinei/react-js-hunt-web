import React, { Component } from 'react';
import api from "../../services/api";
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {
    // variaveis devem ser armazenada no state
    // o que permite serem ouvidas pelo metodo render, e seu 
    // conteudo ser exibido assim que modificadas
    state = {
        products: [],
        productInfo: {},
        page: 1,

    };
     
    // carregado assim que o componente é exibido em tela
    componentDidMount() {
        this.loadProducts();
    }

    // funçoes devem ser criadas no modelo arrow function
    // para que seja possivel acessar e ser acessivel por todo 
    // scopo da classe com this
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        this.setState({ products: docs, productInfo, page });

    };

    prevPage = () => {
        const { page } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    };

    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };


    /** render fica ouvindo as alteração das
     * variaveis no state, e atualiza sempre que uma das 
     * variavel do state forem alteradas */
    render() {

        const { products, page, productInfo } = this.state;

        return (
            <div className="product-list">
                
                { products.map(product => ( /** map - percorre a list products e acessa cada item da lista em product */
                    <article key={ product._id }>
                        <strong> { product.title }</strong>
                        <p>{ product.description }</p>

                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                )) }
                <div className="actions">
                    <button disabled={ page === 1 }
                        onClick={ this.prevPage }>
                        Anterior
                    </button>

                    <button disabled={ page === productInfo.pages }
                        onClick={ this.nextPage }>
                        Próximo
                    </button>

                </div>

            </div>
        )
    }

}