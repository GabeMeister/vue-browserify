""" Create the app """

# pylint: disable=C0103,C0111

from flask import Flask

def create_app():
    app_instance = Flask(__name__, \
        static_url_path='/static', \
        static_folder='../dist', \
        template_folder='../')

    return app_instance
