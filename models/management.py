from odoo import api, fields, models


class RefugeManagement(models.Model):
    _name = "refuge.management"
    _description = "Refuge Management"

    @api.model
    def load_refuge_data(self):
        return {
            "product.template": self.env["product.template"].search_read(
                fields=["name", "id", "list_price"]),
        }
