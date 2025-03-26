from odoo import http
from odoo.http import request


class RefugeController(http.Controller):

    @http.route(["/refuge/web", "/refuge/ui"], type="http", auth="user")
    def refuge_web(self, **k):
        session_info = request.env["ir.http"].session_info()
        context = {
            "session_info": session_info
        }
        response = request.render("refuge_aventuriers.index", context)
        response.headers["Cache-Control"] = "no-store"
        return response
