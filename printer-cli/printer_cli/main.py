import typer

import printer_cli.print as _print

app = typer.Typer()
app.add_typer(_print.app, name="print")
