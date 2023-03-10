from typing import Callable
import typer
from rich import print
from rich.prompt import Prompt
from printer_cli.lib.api import API, TodoListModel, TodoModel

from printer_cli.lib.printer import Printer
from printer_cli.lib.util import Util

app = typer.Typer()


@app.command()
def todos(done: bool = False, list_name: str = None):
    print("[bold]Printing to do's[/bold]")

    printer = Printer()

    api = Util.get_api()

    Util.authenticate(api)

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

    print(
        ":white_check_mark: [bold green]To do's have been printed![/bold green]")


@app.command()
def interactive():
    print("[bold]Printing in interactive mode, enter :quit to stop.[/bold]")

    printer = Printer()

    text = Prompt.ask("Text")

    while text != ":quit":
        printer.printer.textln(text)
        text = Prompt.ask("Text")

    printer.printer.cut()

    print(
        ":white_check_mark: [bold green]Printing succeeded![/bold green]")


@app.command()
def test():
    printer = Printer()
    printer.print_test()
