/** @odoo-module */

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useRefuge } from "@refuge_aventuriers/app/store/refuge_hook";
import { ProductLine } from "@refuge_aventuriers/app/screens/product_screen/product_list/product_line/product_line";
export class ProductListScreen extends Component {
    static template = "refuge_aventuriers.ProductListScreen";
    static components = { ProductLine };


    setup() {
        this.refuge = useRefuge();
    }
        async onProductClick(product) {
        this.refuge.showScreen("ProductFormScreen", {"product": product})
    }

}
registry.category("refuge_screens").add("ProductListScreen", ProductListScreen);