import typer
from rich.prompt import Prompt
from pocketbase import PocketBase

from printer_cli.printer import Printer

app = typer.Typer()


@app.command()
def todos(name: str = "person"):
    # printer = Printer()
    print("Printing todo's")

    client = PocketBase('http://127.0.0.1:8090')

    username = Prompt.ask("Enter your username :sunglasses:")
    password = Prompt.ask("Enter your password :key:", password=True)

    client.collection('users').auth_with_password(username, password)

    todos = client.collection('todos').get_full_list(query_params={
        "filter": "checked = true",
        "expand": "todo_list"
    })

    for todo in todos:
        print(todo.expand['todo_list'].name, "|", todo.content)


@app.command()
def test():
    printer = Printer()
    printer.test_print()
