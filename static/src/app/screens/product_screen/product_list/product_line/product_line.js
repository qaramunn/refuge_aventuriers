/** @odoo-module */

import { Component } from "@odoo/owl";


export class ProductLine extends Component {
    static template = "refuge_aventuriers.ProductLine";

    static props = {
        name: String,
        productId: Number,
        onClick: { type: Function, optional: true },
    };
}
