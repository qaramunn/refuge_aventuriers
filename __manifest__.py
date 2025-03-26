{
    "name": "Refuge des aventuriers",
    "version": "17.0.1.0.0",
    "depends": ["base"],
    "author": "Kal-It",
    "website": "https://kal-it.fr",
    "license": "GPL-3 or any later version",
    "category": "Tools",
    "data": [
        "views/refuge_assets_index.xml",
    ],
    "assets": {
        "refuge_aventuriers._assets_refuge": [

            # 'webclient' bootstrap customization layer
            ('include', 'web._assets_helpers'),
            ('include', 'web._assets_backend_helpers'),

            'web/static/src/scss/pre_variables.scss',
            'web/static/lib/bootstrap/scss/_variables.scss',

            # Import Bootstrap
            ('include', 'web._assets_bootstrap_backend'),

            # Icons
            'web/static/src/libs/fontawesome/css/font-awesome.css',
            'web/static/lib/odoo_ui_icons/*',
            'web/static/src/webclient/icons.scss',

            # scss variables and utilities
            'web/static/src/scss/bootstrap_overridden.scss',
            'web/static/src/scss/fontawesome_overridden.scss',
            'web/static/fonts/fonts.scss',

            # JS boot
            'web/static/src/module_loader.js',

            # libs (should be loaded before framework)
            'web/static/lib/luxon/luxon.js',
            'web/static/lib/owl/owl.js',
            'web/static/lib/owl/odoo_module.js',

            # JS framework
            ('include', 'web._assets_core'),
            ('remove', 'web/static/src/core/errors/error_handlers.js'),

            "refuge_aventuriers/static/src/**/*",

            # main.js boots the pos app, it is only included in the prod bundle as tests mount the app themselves
            ('remove', 'refuge_aventuriers/static/src/app/main.js'),
        ],
        'refuge_aventuriers.assets_prod': [
            ('include', 'refuge_aventuriers._assets_refuge'),
            'refuge_aventuriers/static/src/app/main.js',
        ],
    }

}
