import 'dart:convert';
import 'dart:typed_data';

import 'package:libserialport/libserialport.dart';

import 'constants.dart';

abstract class Printer {
  void raw(List<int> bytes);

  void read() {
    throw UnimplementedError();
  }

  void text(String text) {
    raw(utf8.encode(text));
  }

  void textln(String text) {
    raw(List.from(utf8.encode(text))..add(CTL_LF));
  }

  void ln({int count = 1}) {
    if (count < 0) throw RangeError.value(count);
    raw(List.generate(count, (index) => CTL_LF));
  }
}

class SerialPrinter extends Printer {
  static final Finalizer<SerialPort> _finalizer =
      Finalizer((serialPort) => serialPort.close());

  SerialPort _serialPort;

  SerialPrinter(this._serialPort);

  factory SerialPrinter.fromName(String name) {
    final serialPort = SerialPort(name);
    final printer = SerialPrinter(serialPort);

    _finalizer.attach(printer, serialPort, detach: printer);

    if (!serialPort.openReadWrite()) {
      print(SerialPort.lastError);
      throw Error();
    }

    return printer;
  }

  @override
  void raw(List<int> bytes) {
    _serialPort.write(Uint8List.fromList(bytes));
  }

  void close() {
    _serialPort.close();
    _finalizer.detach(this);
  }
}
