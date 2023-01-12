from datetime import datetime
from escpos.printer import Serial


class Printer:
    printer: Serial

    def __init__(self) -> None:
        self.printer = Serial(
            devfile='/dev/ttyUSB0',
            baudrate=9600,
            bytesize=8,
            parity='N',
            stopbits=1,
            timeout=1.00,
            dsrdtr=True,
            profile='TM-T88II')

    def __del__(self) -> None:
        self.printer.close()

    def test_print(self) -> None:
        self.printer.textln(f"Diagnostics")
        self.printer.textln(datetime.now().strftime('%B %d, %Y @ %H:%M:%S'))
        self.printer.textln(f"Device: {self.printer.devfile}")
        self.printer.ln(7)
        # self.printer.cut()
