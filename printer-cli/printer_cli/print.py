from typing import Callable
import typer
from rich import print
from rich.prompt import Prompt
from printer_cli.lib.api import API, TodoListModel, TodoModel

from printer_cli.lib.printer import Printer

app = typer.Typer()


@app.command()
def todos(done: bool = False, list_name: str = None):
    print("[bold]Printing to do's[/bold]")

    printer = Printer()

    username = Prompt.ask("Enter your username :sunglasses:")
    password = Prompt.ask("Enter your password :key:", password=True)

    api = API(base_url="http://localhost:8090/")
    api.login(username, password)

    todo_lists = api.get_todo_lists()

    if done:
        todos = api.get_todos()
    else:
        todos = api.get_todos(query_params={
            "filter": "checked = false"
        })

    if list_name:
        todo_list_filter: Callable[[
            TodoListModel], bool] = lambda todo_list: todo_list.name == list_name
        todo_lists = filter(todo_list_filter, todo_lists)

    printer.print_todo_lists(todo_lists, todos)

    print(":white_check_mark: [bold green]To do's have been printed![/bold green]")

@app.command()
def test():
    printer = Printer()
    printer.print_test()
