import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';




export default class Pagination extends Component {
    render() {
        return (

            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link" href="#/" tabindex="-1" aria-disabled="true">Anterior</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#/">1</a></li>
                    <li className="page-item"><a className="page-link" href="#/">2</a></li>
                    <li class="page-item"><a class="page-link" href="#/">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#/">Proximo</a>
                    </li>
                </ul>
            </nav>

        );
    }
}
